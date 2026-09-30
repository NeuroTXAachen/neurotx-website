# NeuroTX Website

The NeuroTX Aachen website is a React application for the team's projects, learning resources, team members, alumni, and contact information.

## Requirements

- Node.js 18 or newer
- npm

## Local development

```bash
npm install
npm start
```

The development server opens at `http://localhost:3000`. If that port is busy, Create React App will offer the next available port.

## Validation

```bash
npm run build
```

The production bundle is written to `build/`.

## Deployment

The live site is deployed through Vercel from the repository's production branch. The configured production URL is:

<https://neurotx-website.vercel.app>

The `homepage` field in `package.json` matches this URL so that production asset paths resolve correctly.

## Main routes

- `/` or `/home` - Home
- `/learn` - Learning resources
- `/projects` - Current and previous projects
- `/team` - Current team and alumni
- `/join-us` - Open positions
- `/contact` - Contact form and location
- `/policy` - Impressum and policy information

## Branch safety

Keep development work on a feature branch and merge it into the production branch through a reviewed pull request. Do not force-push over `main`; existing production history should remain available in Git.
