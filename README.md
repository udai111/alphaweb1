## Fonder-inspired ecommerce experience

This project recreates the atmospheric single-page experience from [fonder.studio](https://www.fonder.studio/) using the Next.js App Router. It ships with:

- A motion-rich homepage (`app/page.tsx`) that mirrors the reference layout—toolbar, hero, marquee, capsule spotlight, carousel, services, studio consultation, and more.
- Custom theme tokens and layered gradients defined in `app/globals.css` and `app/styles/home.css` to deliver the soft pink palette, ambient grain, and bespoke interactions.
- Production-ready configuration (`next.config.ts`) that allows loading remote media without depending on external font downloads, ensuring reproducible builds.

## Getting started locally

Install dependencies and spin up the development server:

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) to browse the site. Any edits to files inside `app/` will hot-reload in place.

### Previewing exactly what will ship

If you want to review the production build locally before sharing it with others, run:

```bash
npm run build
npm run start
```

The first command compiles and optimizes the app. The second command serves the compiled output at [http://localhost:3000](http://localhost:3000), matching what Vercel or any Node host will deliver.

To validate before shipping, generate a production build:

```bash
npm run build
```

The command runs the Turbopack optimizer, type checks, and produces static assets in the `.next` directory.

## Deployment playbook

There are two primary deployment paths depending on where you host code.

### 1. Deploy from GitHub (recommended)

1. Commit and push the project to your GitHub repository (`trg121` in your case).
2. Create a new site on [Vercel](https://vercel.com/) and import the repository.
3. Accept the detected framework preset (Next.js). No extra environment variables are required.
4. Trigger a production deploy. Vercel will install dependencies, run `npm run build`, and host the generated output globally.

### 2. Deploy manually with the Vercel CLI

If you prefer to deploy directly from your machine:

```bash
npm install -g vercel
vercel login           # authenticate once
npm run build          # optional but recommended to verify locally
vercel --prod          # deploy the current branch
```

The CLI automatically uploads the optimized build and returns the live URL.

### Need to target another platform?

The generated `.next` directory can also be exported to any Node-compatible hosting provider. Follow the official [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
