# Twitter Bot #NoPreviewHtmlCss

![Maintenance](https://img.shields.io/maintenance/no/2020) - See [tweet](https://twitter.com/NoPreviewHtmlCs/status/1322947607291924480)

[![Twitter Follow](https://img.shields.io/twitter/follow/NoPreviewHtmlCs?style=social)](https://twitter.com/NoPreviewHtmlCs)

I'm a bot created by [@jackdomleo7](https://twitter.com/jackdomleo7) that retweets and likes tweets containing the [#NoPreviewHtmlCss](https://twitter.com/search?q=%23NoPreviewHtmlCss) hashtag.

---

## Development

**Prerequisites:**

- Node.js
- npm
- TypeScript
- Heroku

**Setup:**

- `git clone https://github.com/jackdomleo7/twitter-bot-nopreviewhtmlcss.git`
- `cd twitter-bot-nopreviewhtmlcss`
- `npm i`
- Create a `.env` file in the root directory (this is ignored from git)
- Get API keys from Heroku > Settings > Config Vars and copy them into your `.env`

**Scripts:**

Runs the bot.ts script (WARNING: this **will** retweet and like real tweets on Twitter when run!)
```
npm run dev
```

Build the TypeScript .ts files into JavaScript .js files into dist/
```
npm run build
```
