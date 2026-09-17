# Marlow Auto Detail

A responsive car detailing website built with Next.js, React, TypeScript and GSAP. The latest redesign retains Marlow's graphite, ivory and copper palette with expressive typography, original stock photography and interactive treatments.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Checks

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run test:e2e`

The Playwright base URL can be set through PLAYWRIGHT_BASE_URL. It reuses an existing server when available. Captures are stored in .impeccable/review.

## Interactions

Five service tabs support Arrow keys, Home and End. Choosing a treatment preselects it in the detail planner. The planner downloads a vehicle/treatment brief as a genuine text file; no appointment-submission endpoint is configured. It does not claim to send an enquiry or confirm an appointment.

GSAP implements hero typography and photograph motion, scroll-linked image and stamp movement, a kinetic ribbon with pause control, service transitions, and section-specific motion. Reduced-motion preferences keep the surface static and legible.

## Assets

Photographs are sourced from Unsplash and stored locally with origin sidecars. Photographer credits are on /privacy. They are editorial imagery and are not claimed to be customer projects. Fonts are self-hosted Barlow Condensed and DM Sans. Existing SVG logos are retained.

PRODUCT.md and DESIGN.md describe the current implementation. Previous PRD and supplied copy predate the user's redesign request and are historical context.

