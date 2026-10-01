# ByteSpace New

Online learning platform front end built from the ByteSpace Figma design (1440px desktop, responsive down to mobile).

## Live demo

https://YOUR-PROJECT.vercel.app  <!-- replace after deploying to Vercel -->

## Tech stack

* React 19
* Vite 6
* React Router 7
* Plain CSS (per-page stylesheets + global styles)

## Getting started

```bash
git clone https://github.com/Showri08/bytespace-new.git
cd bytespace-new
npm install
npm run dev
```

Open http://localhost:5173

Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Routes

|Path|Page|
|-|-|
|`/`|Landing page|
|`/login`|Login (bonus)|
|`/register`|Sign up (bonus)|
|`/search`|Course search|
|`/course/:slug`|Course details: About|
|`/course/:slug/lessons`|Course details: Lessons|
|`/course/:slug/reviews`|Course details: Reviews|
|`/creator`|Creator profile|
|`\*`|404|

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, CourseCard, Logo, Layout
  data/         Course data
  pages/        Route pages and their CSS
  styles/       Global styles
public/assets/  Images and shapes
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so React Router works on direct links and refreshes.

