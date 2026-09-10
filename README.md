# Something Something Labs website

A static landing-page mock-up for Something Something Labs, built with Astro, Svelte and TypeScript.

Live at [somethingsomethinglabs.com](https://somethingsomethinglabs.com/).

## Run it locally

The development server uses port `4367` so it does not compete with the other Astro projects on this machine.

```sh
npm install
npm run dev
```

Open `http://localhost:4367`.

`npm run dev` listens on all local interfaces and always requests port `4367`. If another process takes that port, Astro will stop instead of silently choosing a different one.

## Colour palettes

The page has five colour-only variants. Typography, spacing, images and interactions stay the same.

- `http://localhost:4367/?palette=1` uses the original plum, tomato and apricot palette.
- `http://localhost:4367/?palette=2` uses deep eucalyptus, clay and field sage.
- `http://localhost:4367/?palette=3` uses Atlantic blue, ochre and coastal sky.
- `http://localhost:4367/?palette=4` uses berry, teal and soft mint.
- `http://localhost:4367/?palette=5` uses graphite, electric violet and lilac.

A missing or unsupported `palette` value falls back to palette 1.

## Checks

```sh
npm run check
npm run build
npm run test:sites
```

The enquiry form validates required fields and opens a ready-to-send email in the visitor's email app. It does not store submissions on the website.

## Deployment

Pushing `main` to `somethingsomethinglabs/somethingsomethinglabs.github.io` runs the GitHub Pages workflow in `.github/workflows/deploy.yml`. The workflow builds the static Astro output from `dist/client` and publishes it to `https://somethingsomethinglabs.com/`.

## Project structure

- `src/pages/index.astro` contains the landing page.
- `src/components/` contains the Svelte navigation and enquiry interaction.
- `src/styles/global.css` contains the visual system and responsive layout.
- `public/images/` contains the real project imagery used in the page.
