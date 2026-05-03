# Project Images — Required Extractions from PDF

Place project images in this directory (`src/assets/img/projects/`) after extracting them from the source PDF (`DESIGN-SENSE.pdf`).

The build currently uses **rust-tinted placeholder blocks** (`cover: 'placeholder'` in `projects.ts`). Replace each entry's `cover` value with `import` syntax once images are added.

---

## Required Files (by project slug)

| Slug | PDF Pages | Filename(s) to create | Notes |
|---|---|---|---|
| `begwani-residence` | P.11–P.15 | `begwani-residence-cover.jpg`, (optionally) `begwani-residence-02.jpg`…`05.jpg` | Spiral staircase foyer, multi-room |
| `pioneer-araya` | P.9–P.10 | `pioneer-araya-cover.jpg`, `pioneer-araya-02.jpg` | Dramatic ceilings, marble floors |
| `nimesh-arora-residence` | P.32 | `nimesh-arora-cover.jpg` | 450 yd residence Delhi |
| `dr-gautam-yadav-farmhouse` | P.6–P.7 | `dr-gautam-farmhouse-cover.jpg`, `dr-gautam-farmhouse-plan.jpg` | Floor plan + render |
| `anup-shokeen-residence` | P.8 | `anup-shokeen-cover.jpg` | Dark contemporary interior |
| `jain-residence` | P.20 | `jain-residence-cover.jpg` | Pitampura 3000 sqft |
| `veer-nagar-jain-colony` | P.21–P.22 | `veer-nagar-cover.jpg`, `veer-nagar-dining.jpg` | Drawing room + dining |
| `vallab-vihar-apartment` | P.26 | `vallab-vihar-cover.jpg` | Living and dining |
| `varun-verma-little-unicorns` | P.11 | `little-unicorns-cover.jpg` | Playschool commercial |
| `parasvnath-developers` | P.35 | `parasvnath-cover.jpg` | Lobby + clubhouse |

---

## Before/After Images (Home page)

These are needed for the `BeforeAfter.astro` component:

| Filename | Content | PDF Page |
|---|---|---|
| `before-after-render.jpg` | 3D render of a space | P.38 |
| `before-after-photo.jpg` | Site photo of the completed same space | P.38 |

---

## Hero Image (optional — currently uses rust solid bg)

| Filename | Content |
|---|---|
| `hero-cover.jpg` | Full-bleed hero image (any flagship project render) |

---

## How to Replace Placeholders

Once images are placed, update `src/data/projects.ts`:

```ts
// Change this:
cover: 'placeholder',

// To (in the .astro file that imports it, use dynamic import or static import at top):
// In ProjectGrid.astro or FeaturedProjects.astro:
import begwaniCover from '../assets/img/projects/begwani-residence-cover.jpg';
// Then reference: cover: begwaniCover
```

Or simply reference `/img/projects/begwani-residence-cover.jpg` if images are placed in `public/img/projects/`.

---

*Compiled: 2026-04-17 | Source: DESIGN-SENSE.pdf (43 pages)*
