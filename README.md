# Boldo — Design Implementation Test

**Screen implemented:** `Hero / Landing - Desktop (Frame 48:377)`  
**Figma link (screen):** https://www.figma.com/file/vTw2aaaGHreAGbtvV3rQoO/Boldo---Edgar-Allan-(Community)?node-id=48%3A377  
**Figma project source:** https://www.figma.com/community/file/1081611224529759785

**Live demo:** https://ttt-design-test.vercel.app
**Source code:** https://github.com/alameenbalogun/ttt-design-test.git

---

## Summary

I implemented the **Boldo-Edgar Allan- HomePage V2** screen from the Figma file. The implementation focuses on pixel-accurate layout for desktop and a mobile-first responsive design using Tailwind CSS. I prioritized accessibility (semantic HTML, keyboard navigable), responsive behavior, and readable component structure.

---

## What I built

- Fully responsive implementation of the chosen screen: desktop, tablet, and mobile views.
- Reusable components: `NavBar`, `Hero`, `Partners`, `Services`, `BlogCard`, `Footer`.
- Configured for Next.js (or React) with image optimization and proper meta tags.

---

## Folder structure

/src
/components
NavBar.tsx
HeroSection.tsx
Partners.tsx
Services.tsx
BlogCard.tsx
Footer.tsx
/pages or /app
index.tsx
/styles
globals.css
README.md
package.json

---

## Key components & reasoning

- **NavBar**: semantic `<nav>` with collapsible mobile menu. Kept markup minimal to ensure keyboard navigation.
- **HeroSection**: split into text and image; responsive stacking using `flex` and `grid` breakpoints. Buttons implemented as `<button>` with focus styles.
- **BlogCard**: small, reusable card component used in a grid.
- **Footer**: multi-column layout that collapses to a single-column on small screens.

---

## Responsive approach

- Use mobile-first CSS breakpoints: `sm`, `md`, `lg`.
- Images use `w-full h-auto object-cover` so they scale naturally.
- Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Buttons and interactive elements have adequate tap targets (≥40px).

---

## Accessibility

- All images have `alt` text.
- Buttons and links are focusable with visible outlines.
- Semantic HTML: headings (`h1` → `hN`) used in order.
- Color contrast checked for primary text and buttons (aimed for WCAG AA).

---

## State & data

- Static data is stored in small arrays under `components` (e.g. `const services = [...]`) so components stay pure and easily testable.
- No heavy state libraries used. For interactive parts (mobile menu), `useState` handles toggle state locally.

---

## Tradeoffs & assumptions

- I prioritized layout and responsiveness over pixel-perfect typography — typography scales fluidly using rems and Tailwind utilities.
- I used static assets instead of dynamic CMS integrations because the task only asked for UI implementation.
- Intersection animations and complex transitions were left out to keep the deliverable small and focused; they can be added later.

---

## How to run locally

```bash
git clone https://github.com/alameenbalogun/ttt-design-test.git
cd ttt-design-test
npm install
# Next.js
npm run dev
# or React Vite
npm run dev
```
