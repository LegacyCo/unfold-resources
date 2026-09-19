# Stack

Which system owns which job, and the MCP server name each agent must use.

IMPORTANT: the `tools:` allowlist in each agent file names MCP servers exactly.
If your local server names differ from the list below, the agent silently loses
that tool. Check yours with `/mcp` in Claude Code and fix the agent files to
match before trusting any of them.

| Job | System | MCP server name used in agent files |
|---|---|---|
| Email | Gmail | `Gmail` |
| Calendar | Google Calendar | `Google_Calendar` |
| Files | Google Drive | `Google_Drive` |
| Notes, CRM, projects | Notion | `Notion` |
| Social scheduling + analytics | Metricool | `Metricool_Social_Media_Management` |
| Design | Canva | `Canva` |
| Team chat | Slack | `Slack` |
| Code, issues, this vault | GitHub | `github` |

Not covered by MCP in this session: Go High Level. The `blog-to-social` and
`instagram-carousel-system` skills reach GHL through their own steps. Agents
that need GHL invoke those skills rather than calling GHL directly.

## Skills the agents lean on

Agents do not re-explain procedures that already live in a skill. They invoke
the skill and supervise it.

- `blog-to-social` — weekly blog check, then a week of captions and images
- `instagram-carousel-system` — carousels, quote cards, statics, GHL drafts
- `content-repurpose` — one asset into many formats
- `youtube-to-social` — video into scripts, carousels, statics
- `content-calendar` — 30 days planned into Notion
- `email-sequence` — welcome, nurture, launch, re-engagement flows
- `client-crm` — Notion pipeline
- `pricing-calculator` — rates and tiers
- `stop-slop` — AI-tell removal
- `social-media-audit` — presence review
