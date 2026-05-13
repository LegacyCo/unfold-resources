export const config = { runtime: 'edge' };

const REPO = 'LegacyCo/unfold-resources';

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  if (req.headers.get('x-webhook-secret') !== process.env.WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }

  const payload = await req.json();
  const props = payload.data?.properties ?? payload.properties ?? {};

  const issueNumber =
    props['GitHub Issue #']?.number ??
    parseIssueFromUrl(props['GitHub URL']?.url);

  if (!issueNumber) return json({ error: 'No GitHub Issue # found' }, 400);

  const statusName = props['Status']?.select?.name ?? props['Status']?.name;
  const shouldClose = statusName === 'Resolved' || statusName === 'Closed';

  const ghResp = await fetch(`https://api.github.com/repos/${REPO}/issues/${issueNumber}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'notion-github-bridge',
    },
    body: JSON.stringify({
      state: shouldClose ? 'closed' : 'open',
      state_reason: shouldClose ? 'completed' : null,
    }),
  });

  if (!ghResp.ok) return json({ error: 'GitHub API error', detail: await ghResp.text() }, 502);

  return json({ ok: true, issue: issueNumber, state: shouldClose ? 'closed' : 'open' });
}

function parseIssueFromUrl(url?: string): number | null {
  if (!url) return null;
  const m = url.match(/\/issues\/(\d+)/);
  return m ? Number(m[1]) : null;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
