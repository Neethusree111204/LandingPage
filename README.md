# Aurelia — Watch Landing Page

A product landing page for a fictional luxury watch brand. Built with HTML, CSS, and React (loaded via CDN — no build step, no npm install).

## Files
```
index.html    the page structure, loads the CDN scripts + the two files below
styles.css    all styling
app.js        the React app (components, product data, cart/auth/checkout logic)
README.md     this file
```

All three files must stay in the same folder — `index.html` references the other two by relative path.

## What's inside
- **Catalog** — 21 watches across 7 collections (Chronograph, Dress, Vintage, Minimalist, Field, Sport, Automatic), with filter chips
- **Hero** — auto-rotating carousel of trending pieces, plus a background watch video
- **Product detail view** — click any watch for a gallery, star rating, and description
- **Cart** — add/remove items, quantity steppers, live total
- **Checkout** — Razorpay-ready (add a key to go live; otherwise runs in demo mode)
- **Sign in / sign up** — real Clerk authentication (custom-built form, not Clerk's hosted widget)
- **Theme picker** — floating button, bottom-left, changes the site's accent color live

## Running it locally

This **must** be served over `http://`, not opened directly as a file — sign-in and payments need a real address to work. From this folder:

```bash
python -m http.server 8000
```
or
```bash
npx serve
```

Then open the `http://localhost` link it prints.

## Configuration

- **Clerk publishable key** — set in `index.html`, in the `<script data-clerk-publishable-key="...">` tag near the top of `<head>`
- **Razorpay key** — set the `RAZORPAY_KEY_ID` constant near the top of `app.js`. Empty by default (checkout runs in demo mode until a key is added)

## Deploying

Any static host works — GitHub Pages, Netlify, Vercel — since it's just one HTML file with no server-side code.

## Notes

- Product photography is from Pexels (free stock, not exclusive to this project)
- Product detail "different angles" are crops of the same single photo per item, not real multi-angle photography
- This is a demo/portfolio project — the newsletter signup, Company/Support footer links, and order history are UI only, not wired to real backends
