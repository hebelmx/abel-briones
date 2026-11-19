---
name: Abel Briones Engineering Portfolio
colors:
  paper: "#f6f5f0"
  surface: "#ffffff"
  alternate: "#eeede7"
  ink: "#22282b"
  secondary: "#4b565b"
  muted: "#596368"
  rule: "#d2d4cd"
  steel: "#285772"
  steelStrong: "#1c455e"
  darkPaper: "#161c20"
  darkSurface: "#222c32"
  darkInk: "#edf1f1"
  darkSteel: "#9bc8e0"
---

# Design System for the Abel Briones Engineering Portfolio

## 1. Visual Theme & Atmosphere

The site is a static engineering portfolio. The existing shared stylesheet uses cool dark surfaces, mint and blue accents, rounded cards, soft shadows and radial gradients. Its strongest structural patterns are left-aligned headings, a shared content width and a compact navigation bar.

The updated visual language follows an engineering monograph. Warm paper, graphite type and one signal steel-blue accent let the technical evidence lead. Fine rules show where one section ends and another begins. The existing theme control offers a low-glare graphite reading mode using the same hierarchy.

## 2. Color Palette & Roles

- Warm paper provides the default reading canvas. White and warm mineral gray distinguish figures and secondary sections.
- Graphite ink carries body text and titles. Slate and muted graphite carry secondary and supporting text.
- Signal steel marks links, diagrams, status outlines and focus. Deep signal steel supports emphasized interactive states.
- Hairline gray separates components. Delivery status appears as explicit text with a shared outline treatment.
- The optional dark palette uses graphite paper, charcoal surfaces, pale text and light steel for interactive content.

## 3. Typography Rules

Use a system sans-serif stack for reliable rendering. Set H1 in a compact, bold display scale from roughly 2.4 to 4.5 rem. Use 1.6 to 2.2 rem for H2, 1.1 to 1.4 rem for H3 and 1 rem for H4. Body text is 1 rem with a relaxed line height around 1.6. Monospaced labels identify project scope, status and diagram steps where they help scanning. Keep prose near 68 characters per line.

## 4. Component Stylings

Use solid steel for the primary button and outline treatments for secondary actions. Use crisp corners, visible keyboard focus and ample hit areas. Project indexes and case sections use hairline borders and flat surfaces. Preserve the existing project filters, with a clear selected state.

Use a solid sticky navigation bar and a labeled menu on narrow screens. Use simple inline SVG schematics with text equivalents, accessible titles, restrained connector lines and descriptive node labels. Use color sparingly so the workflow remains legible in either theme.

## 5. Layout Principles

Keep content inside the existing 1120px grid with 24px desktop gutters and 16px narrow-screen gutters. Place the executive summary before credentials and cases. Give the anchor cases their own reading view with a linked index and consistent section hierarchy. Stack the index and case text in a single column on mobile. Existing responsive grids continue to collapse at narrow widths. Space major sections generously and align content to the same left grid line.

## 6. Design System Notes for Stitch Generation

For the homepage, lead with industrial automation and OT architecture. Place operating scope in a ruled evidence strip, then lead readers to the anchor cases. For the case studies, place explicit status near each title, show six predictable sections, and use a schematic only where it clarifies an engineering decision. Preserve static navigation, URLs and lightweight rendering.
