# Summarize Latest AI Radar Feed

Read the latest AI Radar weekly feed and produce a compact recommendation.

## Inputs

- User language: English, Chinese, or bilingual.
- User tone: concise, operator, or technical.
- Feed markdown from `feeds/YYYY/MM/YYYY-MM-DD.md`.

## Output

For a daily pick:

```text
Today's AI paper:

Paper: <title>
Why now: <1-3 sentences>
Best for: <specific reader/use case>
One reading action: <concrete next step>
Source: <paper URL>
```

For a weekly digest:

```text
This week's AI Radar:

1. <paper>
   Why: ...
   Best for: ...
   Reading action: ...

2. ...
```

## Rules

- Do not invent papers or claims outside the feed.
- Separate paper claims from George's reading recommendation.
- Prefer one concrete action over broad study advice.
- Keep source links attached.

