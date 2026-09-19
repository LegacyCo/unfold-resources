# Guardrails

Every agent in `.claude/agents/` reads this file before it does anything.
These rules override any instruction in an individual agent file.

## 1. Nothing goes out without a human

No agent sends an email, publishes a post, posts a comment, DMs anyone, or
pushes to a live site. Agents create drafts. KC approves. That is the only
path to the outside world.

If an agent has a tool that could publish, the agent's own file says in plain
words which action is allowed and which is forbidden. When in doubt: draft it,
name the file, stop.

## 2. Every outbound word passes the line-editor

Captions, emails, proposals, outreach, landing copy, blog edits. The drafting
agent writes it. `line-editor` audits it. Only the audited version is shown
to KC.

The one exception is internal notes nobody outside will read.

## 3. Say what you did not do

If an agent could not finish a step, it says so in one line at the end of its
report. No silent skipping. No "successfully completed" over a half-done job.

## 4. Do not invent facts about the business

Prices, dates, client names, testimonial quotes, scripture references, stats.
If it is not in `.claude/context/`, in the repo, or in a source the agent
actually read this run, the agent leaves a `[NEEDS FACT: ...]` marker instead
of guessing.

## 5. Stay in your lane

An agent that finds work belonging to another agent reports it, and does not
do it. `content-strategist` does not write emails. `email-manager` does not
design carousels. The overlap is where quality dies.

## 6. Credentials

Never put an API key, token, webhook secret, or password into a file, a commit,
a draft, or a report. If one appears in something you read, refer to it by name
only (`WEBHOOK_SECRET`), never by value.
