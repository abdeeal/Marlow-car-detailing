---
name: Marlow Auto Detail
description: Expressive automotive editorial with a copper signature
colors:
  ink: "#202322"
  paper: "#F5F2EB"
  copper: "#9A5637"
  copper-soft: "#C38B69"
  muted: "#666A64"
  line: "#D8DAD6"
  control-white: "white"
  error: "#b42318"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(78px, 8.4vw, 122px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 60px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
rounded:
  square: "0px"
  pill: "30px"
  circle: "50%"
spacing:
  compact: "8px"
  inline: "16px"
  field: "20px"
  control: "24px"
  group: "32px"
  composition: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.control-white}"
    rounded: "{rounded.square}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.copper}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 24px"
  button-light-hover:
    backgroundColor: "{colors.copper-soft}"
  input:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "14px 16px"
  topic-tag:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  service-tab:
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "16px 18px"
  service-tab-selected:
    backgroundColor: "{colors.copper-soft}"
    textColor: "{colors.ink}"
  service-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
---

# Design System: Marlow Auto Detail

## Overview

**Creative North Star: "The First-Drive Poster"**

Marlow pairs the confidence of an automotive campaign with the clarity of an editorial service guide. Condensed display lettering, authentic car photographs and copper graphic fields give it an expressive, playful character. Graphite and ivory retain the established brand identity.

Density changes deliberately: expansive photographic compositions give way to a focused service stage, ruled information and compact controls. GSAP animates type, photography and authored geometric marks; the static composition stays legible with reduced motion. Existing SVG logos, British English and authentic photographic evidence remain brand commitments.

**Key Characteristics:**

- Oversized condensed display type paired with calm sans-serif information.
- Graphite, ivory and copper fields with soft copper emphasis on dark surfaces.
- Square photographic stages, thin rules and selective circular accents.
- Purposeful motion with visible controls for continuous movement.

## Colors

Warm copper combines with quiet, slightly warm neutrals. Frontmatter values are normative.

### Primary

- **Copper:** Graphic ribbons, expressive closing surfaces, light-surface emphasis and action hover.
- **Soft Copper:** Heading emphasis and selected tabs against graphite; also the global focus outline.

### Neutral

- **Graphite Ink:** Dark stages, action fills, footer and text on ivory.
- **Ivory Paper:** Main canvas, light service panel, photographic captions and text on graphite.
- **Muted:** Supporting copy on ivory.
- **Line:** Light-surface dividers, topic-tag outlines and note borders.
- **Control White:** Text on graphite primary buttons and selected text.

Error is a semantic exception reserved for validation feedback and invalid-field borders.

**The Surface Contrast Rule.** Use soft copper for emphasis on graphite and copper for emphasis on ivory. Readable copy over photography needs a dark scrim or an opaque caption field.

## Typography

**Display Font:** Self-hosted Barlow Condensed, with sans-serif fallback.
**Body Font:** Self-hosted DM Sans, with sans-serif fallback. Regular and semibold assets are served locally; heavier heading weights are declared in CSS.

**Character:** Compressed display lettering supplies poster energy. DM Sans keeps section headings, service descriptions, prices, navigation and forms straightforward.

### Hierarchy

- **Display:** Frontmatter records the desktop hero role. On phones it uses `clamp(65px, 17.5vw, 102px)` with line height (0.92). Display type also supports ribbon text, process numbers, closing poster and decorative footer word at composition-specific scales.
- **Headline:** Fluid section headings; contextual variants run approximately 34–66px with balanced wrapping and deliberate line breaks.
- **Body:** Base text is 16px; supporting copy uses 13–15px with comfortable leading. Answers cap at 65ch; most introductions stay around 42–52ch.
- **Label:** Semibold controls and information. Navigation uses 13px, main buttons 14px and compact metadata 10–12px. Tracked uppercase text belongs to factual metadata and photographic captions.

**The Two Voices Rule.** Use Barlow Condensed for expressive display moments and DM Sans for information, controls and section headings.

## Layout

The centred container caps at 1400px. Gutters are 60px above 1100px, 36px through tablet widths and 22px at 600px and below. The hero has a separate photographic frame: 20px desktop, 12px tablet and 8px phone; above 1600px it caps at 1600px.

Editorial compositions use unequal columns and generous gaps. The service stage pairs photography with a light information panel. Process steps use four columns on desktop and two at 820px and below. At 600px and below, the service panel, detail story, visit section, FAQ and brief form stack. Preserve room for recognisable photographic subjects when compositions rearrange.

Navigation switches at 820px. Service tabs wrap into three-plus-two there, then two-plus-two-plus-one on phones. Repeated small spacing uses the frontmatter scale; major sections use approximately 64–122px of vertical space according to composition. Main clips decorative horizontal overflow so the rotated ribbon does not create page scrolling. Responsive photographs provide 768px and 1920px sources.

## Elevation & Depth

There is no decorative box-shadow vocabulary. Depth comes from photography, contrasting fields, thin rules, overlap and controlled rotation. Scrims protect readable text; captions and location metadata use opaque fields. The overlapping detail note is an ivory bordered sheet.

**The Material Depth Rule.** Establish depth with photographic composition, contrast and overlap; keep buttons, controls and information surfaces flat.

## Shapes

Square controls and rectangular photo stages establish the baseline. Topic tags are compact pills. Circles distinguish the detail stamp, directional affordance and closing action. Thin borders structure information. An authored eight-ray SVG spark supplies the recurring geometric mark. Decorative outline type is confined to the large closing poster word.

## Components

### Buttons

Confident rectangular actions pair semibold text with an inline SVG arrow.

- Primary uses graphite and white, a minimum height of 54px, 14px text and frontmatter padding. Compact placements reduce size deliberately.
- Hover changes the fill to copper and moves the button upward (2px); the arrow moves right (4px). Light buttons change from ivory to soft copper.
- Focus uses a soft-copper outline (3px) with offset (5px).
- Text links use a current-colour bottom rule (1px), arrow gap (30px) and semibold text (14px).
- The closing circle reverses to ivory on hover and rotates slightly.

### Chips

Non-interactive topic tags use a Line border, semibold text (10px), frontmatter padding and a wrapping gap (8px).

### Cards / Containers

The signature service stage is a square, flat ivory panel within graphite. Image and information columns share a continuous surface. Information padding is 42px by 44px on desktop and 28px by 24px on phones. The photographic label uses an opaque graphite strip. Keep price, duration, included work and a direct action together.

### Inputs / Fields

Square outlined controls use a field stroke (1px), minimum height (50px), transparent background and 14px text; the select has an ivory fill. At 600px and below, text increases to 16px and padding becomes 13px.

Explicit semibold labels sit above fields. Muted placeholders stay fully opaque. Invalid vehicle fields and validation messages use Error; an alert announces the message and focus moves to the relevant field. The textarea resizes vertically. Global focus remains visible.

The planner collects vehicle, treatment and optional notes, then saves a real local text brief. Its status describes the download. Future appointment confirmations require an actual submission service.

### Navigation

The ivory header retains the supplied dark SVG logo, compact semibold links and a copper underline on hover. Desktop height is 100px; at 820px it becomes an 82px header with a labelled menu trigger, reducing to 76px on phones. Mobile destinations use full-width ruled rows. Escape closes the menu and restores trigger focus; selection closes it.

### Service Selection

Five keyboard-operable tabs share a labelled panel. Active tabs use soft copper with graphite text; inactive tabs remain graphite with ivory text and thin rules. Hover adds a faint ivory wash to inactive tabs. Arrow keys, Home and End change selection; the active tab is the single tab stop. Choosing a treatment preselects it in the planner.

### FAQ and Motion

FAQ uses native details and summary with thin rules and an authored CSS plus/minus mark.

GSAP distinguishes display arrival, photograph movement, sequential steps and service changes. The ribbon has a visible pause/play control. Contexts revert on cleanup; reduced motion bypasses decorative animation and scroll transforms while content remains usable.

## Do's and Don'ts

### Do:

- **Do** preserve the confirmed graphite, ivory, copper and soft-copper palette.
- **Do** use authentic photographs with truthful alt text and provenance.
- **Do** pair expressive display composition with clear service and action text.
- **Do** preserve visible focus, native disclosures, keyboard selection and reduced-motion handling.
- **Do** keep photographic subjects recognisable and captions readable.

### Don't:

- **Don't** use fabricated reviews, customer-project evidence, generated photography or simulated comparisons.
- **Don't** invent operational contacts or claim an appointment was submitted without an actual submission service.
- **Don't** turn every surface into the same card composition or replace material depth with decorative shadows.
- **Don't** place essential information in outlined display lettering or uncontrolled continuous motion.

