# Building a team of bots

What the screenshot is actually showing, what it takes to build, and what is
now sitting in this repo.

---

## The honest read on the screenshot

Five rounded pills with headshots and job titles. Chief of Staff, Content
Strategist, Talent Manager, Brand Partnerships Outreach, Email Marketing
Manager. It reads like an org chart.

It is not an org chart. Underneath, each of those is a text file with a job
description and a list of tools it is allowed to touch. The headshots are a
UI choice. They make the thing feel like staff, and that framing is genuinely
useful for deciding what each one owns, but nothing in the software cares
about the faces.

What makes a roster like this work is four things, and none of them is
personality:

1. **A narrow tool belt per agent.** The email agent can create a Gmail draft
   and cannot send one. That is not a prompt instruction it might forget. The
   send tool is not in its hands.
2. **Separate context per agent.** Each one starts fresh and only loads what
   its job needs. This is the real reason to split work across agents rather
   than doing it all in one long session.
3. **Shared context files** every agent reads, so "on brand" means the same
   thing to all seven.
4. **A gate before anything leaves the building.** Draft, human approves, then
   out. No exceptions, or the whole thing becomes a liability.

## One structural fact worth knowing up front

**Subagents cannot call other subagents.** Claude Code strips the Agent tool
from every subagent. So the Chief of Staff cannot dispatch to the Content
Strategist the way a real chief of staff would.

You are the dispatcher. Always.

That is why `chief-of-staff` returns a `ROUTE IT` block with lines written to
be pasted straight into a prompt. It reads everything, decides who should do
what, and hands you the instruction. You paste it. That is the loop. It is
less magical than the screenshot implies and considerably more predictable.

## Agents vs. skills

You already have around thirty skills. The distinction matters because
duplicating a skill inside an agent is the fastest way to make both worse.

- A **skill** is a procedure. How to turn a blog post into seven captions.
  It is knowledge, loaded on demand, available to anyone.
- An **agent** is a worker. Its own context window, its own tool
  restrictions, its own standing judgment about what good looks like.

Create an agent when you want one of four things: a clean context window, a
smaller tool belt, work running in parallel, or a different model. Otherwise
write a skill.

The seven agents here invoke your existing skills rather than restating them.
`content-strategist` calls `blog-to-social` and supervises the result. It does
not re-explain the seven steps.

---

## The roster

Seven files in `.claude/agents/`. Four map to the screenshot, three do not.

| Agent | Screenshot equivalent | Owns | Can it publish? |
|---|---|---|---|
| `chief-of-staff` | Chief of Staff | Reads inbox, calendar, Notion, Slack, GitHub. Produces one decision page and routes. | No. Read-only by design. |
| `content-strategist` | Content Strategist | The blog-to-social pipeline, the calendar, pillar balance, what performed. | No. Drafts and file paths. |
| `line-editor` | *none* | Every outbound word. Voice rules and AI-tell removal. | No tools for it. |
| `email-manager` | Email Marketing Manager | Sequences, broadcasts, the follow-ups that get dropped. | Creates Gmail drafts. Has no send tool. |
| `pipeline-manager` | Talent Manager | Inbound leads, consult prep, recaps, proposals, deals gone quiet. | No. Drafts only. |
| `partnerships-scout` | Brand Partnerships Outreach | Podcasts, orgs, speaking. Research, qualify, draft the pitch. | No. Lists and drafts. |
| `unfold-librarian` | *none* | The scripture vault. Schema, taxonomy, heading drift, the Notion bridge. | Edits the working tree. Does not commit. |

### The two additions, and why

**`line-editor` is the most valuable agent here.** Every other agent produces
words. Without a gate, seven agents means seven slightly different voices, all
drifting toward the same machine register. One gate, applied to everything,
is the only version of this that stays yours.

It is deliberately toolless. Read, Write, Edit, Skill. It cannot publish and
it cannot be talked into it.

It looks for `ABOUT ME/anti-ai-writing-style.md` and treats that as the
authority when it finds it. I could not read that file from this session, so
the fallback rules in `.claude/context/brand.md` are my inference from your
stated preferences. **Check them.** They are the one part of this I was
guessing at.

**`unfold-librarian` exists because this repo has real, unglamorous work in
it.** While writing it I measured the vault:

- 1,285 resource notes, 1,284 published
- `topics` is empty in all 1,285. `themes` is empty in all 1,285. The template
  promises a taxonomy that does not exist.
- 1,043 files have a `## Commentary` section. Around 240 do not.
- Heading drift: `## Cross Reference` (40), `## Cross References` (28),
  `## Cross Refernce` (1, misspelled)
- Two files have template boilerplate stuck in a heading

That is the kind of job an agent is actually good at, and the kind nobody
ever gets to.

---

## The three shared files

In `.claude/context/`. Every agent reads them.

- **`guardrails.md`** — six rules no agent may break. Nothing sends without a
  human. Everything outbound passes the editor. Say what you did not do. Do
  not invent facts about the business. Stay in your lane. Never write a
  credential anywhere.
- **`brand.md`** — voice rules, the three CTAs, the offers. **Has
  `[NEEDS FACT]` markers in it.** Audience and content pillars are blank
  because I did not have them.
- **`stack.md`** — which system owns which job, and the exact MCP server name
  each agent file uses.

Keep these short. They load on every run of every agent, so a paragraph here
costs you seven times over.

---

## Before you trust any of this: check your MCP server names

This is the one thing most likely to break silently.

Each agent file names MCP servers exactly, like `mcp__Gmail__create_draft`.
Those names come from the session I built this in. If your local Gmail server
is registered as `gmail` rather than `Gmail`, the agent does not error. It
just quietly has no Gmail, and then reports that it could not reach your inbox.

Run `/mcp` in Claude Code, compare against `.claude/context/stack.md`, and fix
the agent files to match.

Go High Level is not an MCP server in this session. The agents that need it go
through your `blog-to-social` and `instagram-carousel-system` skills instead.

---

## How to actually start

Do not turn on seven agents. You will not be able to tell which ones are
earning their keep.

**Week one, three agents.**

1. `line-editor`. Run it against something you already published and liked.
   If it tries to improve what was already good, its rules are too aggressive
   and you tune them now, before six other agents depend on it.
2. `unfold-librarian`. It works entirely inside this repo, needs no
   credentials, and has a measurable backlog. Ask it for the heading fixes
   first. Small, safe, verifiable.
3. `chief-of-staff`. Read-only, so the worst case is a bad brief. Run it three
   mornings. If the brief is not the first thing you read, the agent is wrong,
   not your habit.

**Week two**, add `content-strategist`, since it is the one with the most
existing skill support behind it.

**Week three or later**, `email-manager`, `pipeline-manager`,
`partnerships-scout`. These touch clients and money. They should go last and
you should read every draft for a while.

Delete any agent that has not produced something useful in a month. A roster
of three that you trust beats seven you have to double-check.

## What to watch for

- **An agent that always finds something.** If `line-editor` never says "this
  is clean," it is manufacturing edits. Tighten it.
- **Reports that read as complete when they are not.** Every agent here is
  told to end with what it could not do. If that section is always empty,
  the agent is not being honest and you should test it with a task you know
  it cannot finish.
- **Drift back to one voice.** Six weeks in, re-read a caption from week one
  next to one from week six.
- **Tool-belt creep.** The moment you give `email-manager` a send tool to save
  yourself a click, you have a different system with a different risk profile.

## Where the files are

```
.claude/
  agents/
    chief-of-staff.md
    content-strategist.md
    email-manager.md
    line-editor.md
    partnerships-scout.md
    pipeline-manager.md
    unfold-librarian.md
  context/
    README.md
    brand.md          <- has [NEEDS FACT] gaps to fill
    guardrails.md
    stack.md          <- verify server names against /mcp
```

These live in this repo, so they only load when you are working here. To use
them everywhere, copy `.claude/agents/` to `~/.claude/agents/`. The context
files would need a fixed path if you do that, since `.claude/context/` is
relative to wherever you are.
