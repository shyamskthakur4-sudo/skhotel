# Shri Kalyan Hotel & Restaurant — Website

Premium, multi-page hotel website for **Shri Kalyan Hotel & Restaurant**, Khatu Shyam Ji.
Built with **React + Vite + React Router + Framer Motion**. Dark "black & gold"
luxury theme with 3D scroll effects, parallax, pointer-tilt cards, page transitions
and a WhatsApp inquiry form.

## Pages
- **Home** — 3D parallax hero, scroll showcase, rooms preview, highlights, location, testimonials
- **Rooms** — Executive, Deluxe, Super Deluxe (with parallax detail rows)
- **Gallery** — masonry grid + lightbox (keyboard + swipe-friendly)
- **About** — story, stats, highlights
- **Contact** — WhatsApp inquiry form + live map

## Run it

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Make it yours (2 places)

| What | File |
|------|------|
| Name, address, phone, email, room details, highlights | `src/data/site.js` and `src/data/rooms.js` |
| Photos (swap stock for your Google Drive images) | `src/data/images.js` — see `public/images/README.txt` |

**WhatsApp number** lives in `src/data/site.js` (`phoneIntl: '919351111139'`).
The inquiry form opens WhatsApp with all the guest's details pre-filled.

**Logo** is recreated as a crisp, transparent SVG in `src/components/Logo.jsx`
(no background to remove) and `public/favicon.svg`.

## Notes
- Fully responsive (375 / 768 / 1024 / 1440px), keyboard-accessible, honors
  `prefers-reduced-motion`.
- Images use a shimmer skeleton and fall back gracefully if a URL is unavailable.
