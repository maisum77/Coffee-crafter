# Design System Strategy: The Obsessive Alchemist

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Obsessive Alchemist."** 

This is not a generic e-commerce experience; it is a digital sanctuary for the coffee purist. The aesthetic rejects the "flatness" of modern SaaS in favor of a dark, candlelit atmosphere that feels tactile and high-stakes. We achieve a premium, editorial feel by breaking the standard container-based grid. Elements should breathe through intentional asymmetry—large typographic statements balanced by microscopic mono-spaced details. We treat the screen not as a UI, but as a physical workspace where light and shadow define the journey.

## 2. Colors & Atmospheric Depth
Our palette is rooted in the "void"—the deep, near-black of a perfect extraction.

### The "No-Line" Rule
To maintain the "Obsessive Alchemist" luxury, **1px solid borders are strictly prohibited for sectioning.** 
Structural separation is achieved exclusively through background shifts. A `surface-container-low` section (espresso) should sit directly against a `background` (void) to create a soft, natural horizon. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers stacked in a dimly lit room:
- **Level 0 (Base):** `background` (#16130F) - The deep void.
- **Level 1 (Sectioning):** `surface-container-low` (#1E1B17) - Subtle elevation for large content blocks.
- **Level 2 (Interaction):** `surface-container-high` (#2D2A25) - Highlighting active cards or focus areas.
- **Level 3 (Pop-overs):** `surface-bright` (#3C3934) - Used sparingly for high-contrast modals.

### The "Glass & Soul" Rule
- **Glassmorphism:** For floating navigation or product overlays, use `surface` with a 60% opacity and a `20px` backdrop-blur. This simulates the condensation and depth of high-end glassware.
- **Visual Soul:** Primary CTAs must use a linear gradient from `primary` (#FFB77B) to `primary-container` (#CC7E36) at a 135-degree angle. This mimics the metallic sheen of polished copper under candlelight.
- **Texture:** Apply a global 4% SVG grain texture overlay across the entire viewport to kill digital "flatness."

## 3. Typography: Editorial Authority
Our type system balances the romanticism of high-end print with the precision of a laboratory.

- **Display (Cormorant Garamond):** Use Light weights (300) with generous tracking (-0.02em). This is our "Voice of Luxury."
- **Sub-Display (Cormorant SC):** Used for section headers. The small caps provide a sense of archived, historical importance.
- **Body (Jost):** Use Light (300) for all long-form text. It provides a clean, modern contrast to the serif headings, ensuring maximum readability.
- **Mono (DM Mono):** Used for "The Details"—brew ratios, temperatures, and coordinates. This represents the "Obsessive" nature of the brand.
- **Script (Pinyon Script):** Decorative only. Use for signatures or single-word "asides" overlapping imagery to break the grid.

## 4. Elevation & Depth
We reject the "Material" drop-shadow. Depth must feel ambient and organic.

- **Tonal Layering:** Instead of shadows, place a `surface-container-lowest` card (#100E0A) on a `surface-container-low` (#1E1B17) background to create a "recessed" effect.
- **The Ghost Border:** If a boundary is required for accessibility, use a "Ghost Border": `outline-variant` (#534438) at 15% opacity.
- **Ambient Glow:** Floating primary elements (like a selected coffee bean bag) should use a `primary` tinted glow: `box-shadow: 0 20px 40px rgba(196, 120, 48, 0.08)`.

## 5. Components & Primitive Styling

### Buttons (The Precision Actuators)
- **Primary:** Gradient fill (`primary` to `primary-container`), `2px` radius. Text is `on-primary` (All-caps Jost, 1px tracking).
- **Secondary:** Transparent with a `Ghost Border` and a subtle copper animated underline on hover.
- **Interaction:** On hover, buttons should emit a microscopic `0 0 12px` outer glow in `primary`.

### Cards & Collections
- **Rule:** Forbid all divider lines.
- **Spacing:** Use `spacing-8` (2.75rem) to separate vertical content.
- **Visual:** Cards use `surface-container-low` with a `4px` radius. Use high-contrast, moody photography that bleeds to the edges.

### Inputs & Selection
- **Text Fields:** Minimalist. Only a bottom border using `outline-variant` at 30%. On focus, the border transitions to `primary` (copper) with a subtle `2px` blur.
- **Chips:** `surface-container-highest` background, `2px` radius. Use `DM Mono` for the label to emphasize the technical nature of the coffee selection (e.g., "WASHED", "1800MASL").

### Signature Component: The "Origin Legend"
A bespoke component for CoffeeCraft: A mono-spaced data table (`DM Mono`) paired with a `Pinyon Script` tasting note, overlapping a desaturated hero image. This breaks the grid and reinforces the "Editorial" feel.

## 6. Do’s and Don'ts

### Do
- **Do** use intentional asymmetry. Place a small mono-text detail far to the right of a centered serif headline.
- **Do** use "Parchment" (`secondary-text`) for body copy to reduce the harshness of pure white on dark backgrounds.
- **Do** treat white space as a luxury material.

### Don't
- **Don't** use pure black (#000) or pure white (#FFF). It breaks the "candlelit" immersion.
- **Don't** use standard 8px or 16px border radii. This system is about "Precision" (2px and 4px only).
- **Don't** use bouncy or "playful" animations. All transitions must be ease-in-out, slow, and cinematic (300ms–500ms).