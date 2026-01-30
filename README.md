# Unfold Resources Repository

This repository contains scripture resources (verse-specific notes and videos) and teachings (sermons, essays, Q&A) that sync to the Unfold Bible reading app.

## Repository Structure

```
unfold-resources/
├── README.md
├── resources/           # Verse-specific scripture resources
│   ├── Matthew_13.57.md
│   ├── Mark_4.33.md
│   └── Exodus_14.14.md
└── teachings/           # Broader teaching content for Scribe AI
    ├── sermons/
    │   └── the-heart-of-worship.md
    ├── essays/
    │   └── understanding-grace.md
    ├── qa/
    │   └── questions-about-faith.md
    └── transcripts/
        └── podcast-episode-1.md
```

## How Syncing Works

1. Add or edit markdown files in this repository
2. Push changes to GitHub
3. Go to **Admin → Sync from GitHub** in the Unfold app
4. Resources appear in the app immediately

---

## Scripture Resources

Scripture resources are **verse-specific** and appear in the slide-up panel when users are reading that passage.

### File Naming Convention

Use this format: `BookName_Chapter.Verse.md`

Examples:
- `Matthew_13.57.md` → Matthew 13:57
- `Mark_4.33.md` → Mark 4:33
- `Exodus_14.14.md` → Exodus 14:14
- `1_Corinthians_13.4.md` → 1 Corinthians 13:4
- `Psalms_23.1.md` → Psalm 23:1

### Template: Video Resource

```markdown
---
book_id: MAT
chapter: 13
verse: 57
resource_type: video
title: "When Jesus Can't Be Himself"
video_url: https://youtu.be/hBad5NV5PfY
video_duration: 89
topics:
  - unbelief
  - offense
is_published: true
---
```

### Template: Note Resource

```markdown
---
book_id: MRK
chapter: 4
verse: 33
resource_type: note
title: "The Ability to Hear"
topics:
  - blessing
  - righteousness
themes:
  - Prayer
is_published: true
---

## Commentary

"...as they were able to hear it." The Greek word that we translate "able" is *edynanto* - the inherent capacity in someone to carry something out.

The Greek word for "hear" is *akouein*. This word doesn't just mean to hear something audibly. It also embraces the idea of apprehending the thing heard with the mind and responding in conformity to it.

## Application

Don't just hear the words of Jesus, respond in obedience to what He is saying.
```

### Book ID Reference

Use these 3-letter codes for `book_id`:

| Book | Code | Book | Code |
|------|------|------|------|
| Genesis | GEN | Matthew | MAT |
| Exodus | EXO | Mark | MRK |
| Leviticus | LEV | Luke | LUK |
| Numbers | NUM | John | JHN |
| Deuteronomy | DEU | Acts | ACT |
| Joshua | JOS | Romans | ROM |
| Judges | JDG | 1 Corinthians | 1CO |
| Ruth | RUT | 2 Corinthians | 2CO |
| 1 Samuel | 1SA | Galatians | GAL |
| 2 Samuel | 2SA | Ephesians | EPH |
| 1 Kings | 1KI | Philippians | PHP |
| 2 Kings | 2KI | Colossians | COL |
| 1 Chronicles | 1CH | 1 Thessalonians | 1TH |
| 2 Chronicles | 2CH | 2 Thessalonians | 2TH |
| Ezra | EZR | 1 Timothy | 1TI |
| Nehemiah | NEH | 2 Timothy | 2TI |
| Esther | EST | Titus | TIT |
| Job | JOB | Philemon | PHM |
| Psalms | PSA | Hebrews | HEB |
| Proverbs | PRO | James | JAS |
| Ecclesiastes | ECC | 1 Peter | 1PE |
| Song of Solomon | SNG | 2 Peter | 2PE |
| Isaiah | ISA | 1 John | 1JN |
| Jeremiah | JER | 2 John | 2JN |
| Lamentations | LAM | 3 John | 3JN |
| Ezekiel | EZK | Jude | JUD |
| Daniel | DAN | Revelation | REV |
| Hosea | HOS | | |
| Joel | JOL | | |
| Amos | AMO | | |
| Obadiah | OBA | | |
| Jonah | JON | | |
| Micah | MIC | | |
| Nahum | NAM | | |
| Habakkuk | HAB | | |
| Zephaniah | ZEP | | |
| Haggai | HAG | | |
| Zechariah | ZEC | | |
| Malachi | MAL | | |

---

## Teachings

Teachings are broader content (sermons, essays, Q&A) that Scribe AI uses to answer user questions. They are NOT tied to specific verses.

### Content Types

- `sermon` - Full sermon transcripts or notes
- `essay` - Written articles or blog posts
- `qa` - Q&A sessions or FAQ content
- `teaching` - General teaching content
- `transcript` - Podcast or video transcripts

### Template: Sermon

```markdown
---
title: "The Heart of Worship"
content_type: sermon
author: Neil
summary: "Exploring what it truly means to worship God in spirit and truth."
topics:
  - worship
  - heart
  - authenticity
themes:
  - Spiritual Growth
  - Prayer
scripture_refs:
  - John 4:23-24
  - Psalm 51:17
source_url: https://youtube.com/watch?v=abc123
recorded_date: 2025-01-15
is_published: true
---

## Introduction

What does it mean to worship God? Many people think worship is about singing songs...

## Main Points

### 1. Worship is About the Heart

True worship begins with the posture of our heart...

### 2. Spirit and Truth

Jesus told the woman at the well that the Father seeks those who worship in spirit and truth...

## Conclusion

Let's examine our hearts today...
```

### Template: Essay

```markdown
---
title: "Understanding Grace"
content_type: essay
author: Neil
summary: "A deep dive into the biblical concept of grace and how it transforms us."
topics:
  - grace
  - salvation
  - transformation
themes:
  - Theology
  - Christian Living
scripture_refs:
  - Ephesians 2:8-9
  - Romans 5:8
is_published: true
---

Grace is one of the most misunderstood concepts in Christianity...

## What Grace Is Not

First, let's clarify what grace is not...

## What Grace Is

Grace is God's unmerited favor...

## Living in Grace

How do we practically live in the reality of grace?
```

### Template: Q&A

```markdown
---
title: "Questions About Faith and Doubt"
content_type: qa
author: Neil
summary: "Answers to common questions about dealing with doubt in the Christian life."
topics:
  - faith
  - doubt
  - questions
themes:
  - Apologetics
is_published: true
---

## Is it okay to have doubts?

Absolutely. Doubt is not the opposite of faith...

## How do I deal with unanswered questions?

The Bible doesn't answer every question we have...

## What if I'm struggling to believe?

First, know that you're not alone...
```

### Template: Transcript

```markdown
---
title: "Podcast Episode 12: Walking with God"
content_type: transcript
author: Neil
summary: "Transcript from podcast episode about daily communion with God."
topics:
  - daily walk
  - communion
  - relationship
source_url: https://podcast.example.com/episode-12
recorded_date: 2025-01-20
is_published: true
---

**Neil:** Welcome back to another episode...

**Guest:** Thanks for having me...

[Continue transcript...]
```

---

## Field Reference

### Scripture Resource Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `book_id` | Yes | string | 3-letter book code (MAT, MRK, etc.) |
| `chapter` | Yes | number | Chapter number |
| `verse` | No | number | Verse number (optional for chapter-level) |
| `resource_type` | Yes | string | `note` or `video` |
| `title` | Yes | string | Title shown in the app |
| `content` | No | string | Markdown content (for notes) |
| `video_url` | No | string | YouTube/Vimeo URL (for videos) |
| `video_duration` | No | number | Duration in seconds |
| `topics` | No | array | List of topic tags |
| `themes` | No | array | List of theme tags |
| `is_published` | No | boolean | Default: false |

### Teaching Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | Yes | string | Title of the teaching |
| `content_type` | Yes | string | `sermon`, `essay`, `qa`, `teaching`, `transcript` |
| `author` | No | string | Author name (default: "Neil") |
| `summary` | No | string | Brief summary for AI context |
| `topics` | No | array | List of topic tags |
| `themes` | No | array | List of theme tags |
| `scripture_refs` | No | array | Related scripture references |
| `source_url` | No | string | Original source URL |
| `recorded_date` | No | date | Date recorded (YYYY-MM-DD) |
| `is_published` | No | boolean | Default: false |

---

## Tips

1. **Use `is_published: true`** - Content won't appear in the app unless published
2. **Markdown is supported** - Use headers, bold, italics, lists in content
3. **Keep summaries concise** - Scribe AI uses these for quick context
4. **Tag liberally** - More topics/themes = better AI search matching
5. **Scripture refs help** - Adding `scripture_refs` helps Scribe connect teachings to verses

---

## Syncing with Obsidian

If you use Obsidian for writing:

1. Install the **Obsidian Git** community plugin
2. Point it to this repository
3. Write your content in Obsidian
4. Commit and push when ready
5. Sync from the Unfold Admin panel

Your vault structure can match the repository structure exactly.
