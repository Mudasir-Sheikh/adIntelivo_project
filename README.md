# AdIntelivo — marketing site + product demo (frontend only)

React + Vite. No backend, no database, no API calls. Every number and business
name in the app is sample data in `src/data/demo.js`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — hero rank board, value prop, sample competitor ads |
| `/features` | Feature grid |
| `/how-it-works` | Five-step process |
| `/demo` | Interactive product demo: portfolio, competitor ads, rank comparison, keyword gaps, alerts |
| `/pricing` | Starter / Growth / Agency plans |
| `/about` | Company and business model |
| `/contact` | Contact form (client-side only, sends nothing) |
| `/privacy` | Privacy policy |
| `/data-usage` | Data usage & API — Google Ads API intended use, limits, retention |
| `/terms` | Terms of service |

## Run locally

```bash
npm install
npm run dev
```

## Push to GitHub

```bash
git init
git add .
git commit -m "AdIntelivo marketing site and product demo"
git branch -M main
git remote add origin https://github.com/Mudasir-Sheikh/adIntelivo_project.git
git push -u origin main
```

## Deploy on Vercel

1. vercel.com → Add New → Project → import `adIntelivo_project`.
2. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
3. Deploy.

`vercel.json` already contains the SPA rewrite, so deep links like
`/data-usage` resolve correctly on refresh.

### If you deploy to GitHub Pages instead

GitHub Pages has no SPA rewrite. Either switch `BrowserRouter` to `HashRouter`
in `src/main.jsx`, or add a `404.html` that copies `index.html`. Vercel is the
easier path.

## Before you resubmit the Google Ads API form

- Deploy first and submit the **live domain**, not the GitHub repo URL. The
  rejection was because a repository page has no site content on it.
- Point the application at `https://your-domain/data-usage` for the API use case
  and `https://your-domain/privacy` for data handling.
- Use a role-based developer contact address (`api@adintelivo.com` or
  `google-ads-api@adintelivo.com`), as the rejection email asked.
- Replace the placeholder email addresses in `Privacy.jsx`, `DataUsage.jsx`,
  `Terms.jsx` and `Marketing.jsx` with addresses that actually receive mail.
- Ideally point `adintelivo.com` at the Vercel deployment rather than submitting
  a `*.vercel.app` subdomain.

The legal pages are drafted to describe this product accurately, but they are
not legal advice. Have a lawyer review them before they go live.
"# adIntelivo_project" 
