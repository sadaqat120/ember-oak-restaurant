# Ember & Oak — Restaurant Website Frontend Concept

An original, premium restaurant website concept built for **Williams** as an initial
working demo. The design was inspired by the quality and structure of the two
reference sites he shared (an Italian restaurant template and a general
restaurant template) but is **not** a copy — original branding ("Ember & Oak"),
original copy, an original color/type system, and original page layouts.

> **This is a concept/demo project**, built with realistic placeholder content
> so it can be reviewed and approved before final content, photography, and a
> real backend are connected. See "Current Demo Limitations" below.

---

## Pages

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Hero, story, signature dishes, banquet & catering previews, gallery preview, hours, testimonial |
| About Us | `/about` | Story, philosophy, team |
| Menu | `/menu` | Full categorized menu with sticky category navigation |
| Banquet Facility | `/banquet` | Rooms, event types, amenities, packages, inquiry form |
| Catering | `/catering` | Services, process, packages, menu highlights, inquiry form |
| Gallery | `/gallery` | Filterable grid with a full lightbox (keyboard + touch support) |
| Contact Us | `/contact` | Contact info, embedded map, contact form |
| Visiting Hours | `/hours` | Weekly hours + holiday/special hours |
| Online Booking | `/booking` | Reservation request form with full validation |
| Menu Kit | `/menu-kit` | Downloadable sample menu PDF |
| Hosting | `/hosting` | Private/semi-private dining & restaurant buyout options |

## Features

- Fully original visual identity: warm parchment/charcoal/rust/brass palette,
  Fraunces (display serif) + Inter (body), editorial (non-templated) layout
- Responsive from 375px through large desktop, with a real mobile navigation
  experience (not just a shrunk desktop layout)
- Reusable component library (Navbar, Footer, forms, gallery, menu, etc.) —
  see `src/components/`
- All editable restaurant content (name, hours, address, menu, gallery,
  banquet/catering/hosting details) lives in **one file**: `src/data/site.js`
- Client-side form validation, loading states, success states, and error
  states on all three forms (Contact, Booking, Catering/Banquet inquiry)
- Accessible: semantic HTML, labeled form fields, keyboard-operable gallery
  lightbox and mobile menu, visible focus states, `prefers-reduced-motion`
  respected
- Basic SEO: per-page titles/meta descriptions, Open Graph tags, descriptive
  alt text
- A real sample menu PDF generated for the Menu Kit page
  (`public/ember-oak-sample-menu.pdf`)

## Tech Stack

- React 19 + Vite
- React Router (client-side routing)
- Tailwind CSS (utility-first styling, custom design tokens in
  `tailwind.config.js`)
- Framer Motion (subtle, purposeful motion only)
- lucide-react (icons)

## Project Structure

```
ember-oak/
├── public/
│   └── ember-oak-sample-menu.pdf     # sample menu PDF (Menu Kit page)
├── scripts/
│   └── make_menu_pdf.py              # regenerates the sample PDF
├── src/
│   ├── components/                   # reusable UI components
│   ├── data/site.js                  # ALL editable restaurant content
│   ├── hooks/usePageMeta.js          # per-page <title>/meta description
│   ├── pages/                        # one file per route
│   ├── App.jsx                       # route definitions
│   ├── main.jsx                      # app entry point
│   └── index.css                     # Tailwind + global styles
├── index.html
├── tailwind.config.js
├── vercel.json                       # SPA rewrite rule for Vercel
└── package.json
```

## Local Setup

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output is written to `dist/`. To preview the production build locally:

```bash
npm run preview
```

### Environment Variables

None are required for this demo. If a booking/catering/contact backend or
a mapping/analytics service is added later, its keys would go in a `.env`
file (already excluded from git via `.gitignore`).

---

## Current Demo Limitations (Frontend-Only)

This project is intentionally **frontend-only**, per the project scope. The
following are realistic, working *frontend* experiences, but are **not**
connected to a real backend yet:

- **Online Booking form** — validates input and shows a demo confirmation,
  but does not actually hold a table. Built to plug into a booking API,
  Calendly, OpenTable, or a custom backend.
- **Catering / Banquet inquiry forms** — validate input and show a demo
  confirmation, but do not send to a real inbox or CRM yet.
- **Contact form** — validates input and shows a demo confirmation; no email
  is actually sent yet.
- **Menu Kit PDF** — a real, generated sample PDF with placeholder dishes and
  pricing, to be replaced with the client's final menu.
- **All photography** — sourced from royalty-free stock (Unsplash) as
  placeholders, centralized in `src/data/site.js` under `images` so they can
  be swapped for the client's real photography in one place.
- **All restaurant details** — name, address, phone, hours, menu, event
  packages, etc. are realistic placeholder content, not the real restaurant's
  information (see the list below).

## Future Backend Integration

The three forms (`BookingForm.jsx`, `CateringForm.jsx`, `ContactForm.jsx`)
already produce a clean, validated JavaScript object on submit. Connecting a
real backend means replacing the `setTimeout` demo call in each form's
`handleSubmit` with a real request — for example:

```js
await fetch('/api/reservations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
});
```

No other UI changes are required — loading, success, and error states are
already wired up.

---

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project** and import the repository.
3. Framework preset: **Vite** (auto-detected).
   - Build command: `npm run build`
   - Output directory: `dist`
4. No environment variables are required for this demo.
5. Deploy. `vercel.json` is already included so client-side routes (e.g.
   `/menu`, `/booking`) resolve correctly instead of 404ing on refresh.

## Information Needed From the Client to Finalize

To turn this from a concept into the production site, the following real
information is needed to replace the placeholders in `src/data/site.js`:

- Real restaurant name, tagline, and short description
- Real address, phone number, and email
- Real social media links
- Final weekly hours and any holiday/special hours
- Real, final menu (dish names, descriptions, prices, dietary notes)
- Professional photography (hero, dishes, interior, events) — or approval to
  license additional stock images
- Real banquet room names, capacities, and pricing
- Real catering packages and pricing
- Preferred booking/reservation system (custom backend, OpenTable, Resy,
  Calendly, etc.) so the Online Booking form can be connected
- A destination inbox or CRM for the contact and catering inquiry forms
- Final logo/wordmark, if different from the text-based logo used here

---

*Prepared as an initial concept for review — not the restaurant's final
production website.*
