# AI Radar Feeds

Generated daily and weekly feed files live under:

```text
feeds/YYYY/MM/YYYY-MM-DD-ai-paper-radar.md
```

Create a new feed:

```sh
npm run feed:weekly
```

Sync validated public-safe daily feeds from the private source repo:

```sh
npm run validate:daily
npm run sync:daily
```

Read the latest feed:

```sh
npm run --silent feed:latest
```
