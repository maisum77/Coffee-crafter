# CoffeeCraft — Website Design Brief
### For: Google Stitch / Design Implementation
### Brand: coffeecraft.world | DHA Lahore, Pakistan
### Positioning: Ultra-Premium Specialty Coffee Experience

---

## 01. BRAND ESSENCE & DESIGN PHILOSOPHY

CoffeeCraft is not a coffee shop. It is a ritual. Every detail — from the first grain of a roast to the last drop in a cup — is obsessed over. The website must feel the same way. No detail is decorative noise; every pixel serves a purpose.

**Core Brand Feeling:** The quiet confidence of a Rolls Royce showroom. The warmth of a heritage whiskey distillery. The precision of a Swiss watch atelier. Applied to coffee.

**Design DNA:**
- **Exclusivity through restraint** — not loud, but impossible to ignore
- **Craft as religion** — the process is the product
- **Dark luxury** — deep, rich, atmospheric. Not sterile white-box minimalism
- **Slow, intentional motion** — animations that breathe, never rush
- **Obsessive micro-detail** — things users notice only on their third visit

**The ONE unforgettable thing:** A website that feels like walking into a candlelit room where someone who truly loves coffee is about to show you something extraordinary.

---

## 02. COLOR SYSTEM

### Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `--cc-void` | `#0A0805` | Primary background — near-black with warm brown undertone |
| `--cc-espresso` | `#1C1410` | Card backgrounds, elevated surfaces |
| `--cc-roast` | `#2E1F12` | Section dividers, secondary surfaces |
| `--cc-mahogany` | `#6B3A2A` | Mid-tone accent, inactive states |
| `--cc-copper` | `#C47830` | Primary brand accent — warm metallic copper |
| `--cc-gold` | `#E8B84B` | Highlight accent, hover states, star ratings |
| `--cc-cream` | `#F5EDDC` | Primary text on dark |
| `--cc-parchment` | `#E8D9C0` | Secondary text, body copy |
| `--cc-fog` | `#8A7A6A` | Muted text, labels, captions |

### Special Effects
- **Gradient A (Hero):** radial-gradient from `#3D2010` at center → `#0A0805` at edges
- **Gradient B (Cards):** linear-gradient `#1C1410` → `#0E0C09` at 145deg
- **Copper shimmer:** `linear-gradient(90deg, transparent, rgba(196,120,48,0.3), transparent)` — used for animated underlines and border glows
- **Grain overlay:** SVG noise texture at 4% opacity over all surfaces for tactile depth
- **Vignette:** radial-gradient overlay on all hero/fullscreen images to focus center

---

## 03. TYPOGRAPHY SYSTEM

### Font Stack

| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display / Hero** | `Cormorant Garamond` | 300, 400, 700 | Elegant serifs for headlines. Load from Google Fonts |
| **Sub-Display** | `Cormorant SC` (Small Caps) | 400, 600 | Section labels, eyebrow text |
| **Body** | `Jost` | 300, 400 | Clean, modern grotesque for readability |
| **Mono / Detail** | `DM Mono` | 400 | Prices, timestamps, coordinates, technical detail |
| **Accent / Script** | `Pinyon Script` | 400 | Decorative flourishes only — section dividers, pullquotes |

### Type Scale (Desktop)

```
Hero H1:        clamp(64px, 9vw, 140px) / Cormorant Garamond 300 / letter-spacing: -0.02em
H2 Section:     clamp(42px, 6vw, 88px)  / Cormorant Garamond 400
H3 Card Title:  28px–36px               / Cormorant Garamond 400
Eyebrow Label:  11px / ALL CAPS / Cormorant SC 600 / letter-spacing: 0.25em
Body:           17px / Jost 300 / line-height: 1.75
Small/Caption:  13px / Jost 400 / color: var(--cc-fog)
Price/Mono:     15px / DM Mono 400
```

### Type Rules
- Headlines **never** use font-weight above 400 unless for single-word emphasis
- All body text uses `Jost 300` — lighter than expected, creating elegance
- Eyebrow labels always appear 12–16px above section headings with a 1px `--cc-copper` line to their left
- Kerning on hero text: `font-feature-settings: "kern" 1, "liga" 1, "calt" 1`

---

## 04. SITE STRUCTURE — PAGE MAP

```
/ (Home)
├── /menu
│   ├── /menu#espresso
│   ├── /menu#pour-over
│   ├── /menu#cold
│   └── /menu#food
├── /craft        ← "Our Process" / About page
├── /reserve      ← Table reservation
├── /journal      ← Blog / Coffee education
│   └── /journal/[slug]
└── /find-us      ← Location, hours, contact
```

**Total: 5 main pages + dynamic journal posts**

---

## 05. GLOBAL UI COMPONENTS

### 5.1 — Navigation Bar

**Structure:** Fixed top. Full width. Height: 72px desktop / 56px mobile.

**Layout:** Logo (left) · Nav links (center, hidden on mobile) · CTA + Hamburger (right)

**Visual:**
- Background: `rgba(10, 8, 5, 0)` on load → transitions to `rgba(10, 8, 5, 0.95)` + `backdrop-filter: blur(24px)` after 60px scroll
- Bottom border: `1px solid rgba(196, 120, 48, 0.15)` appears on scroll
- Logo: Wordmark "COFFEECRAFT" in `Cormorant SC` 600, 18px, copper color. With a small "·" glyph in Pinyon Script between "COFFEE" and "CRAFT"
- Nav links: `Jost 400` 13px, `--cc-fog` color → `--cc-cream` on hover. Underline on hover: 1px `--cc-copper` line that slides in from left (width 0 → 100%, transition 0.3s ease)
- CTA button: "Reserve a Table" — outlined button, `1px solid --cc-copper`, `--cc-copper` text, 12px / Cormorant SC uppercase. On hover: fills with `--cc-copper`, text goes `--cc-void`. Transition: 0.4s ease

**Micro-animation on scroll:**
- Logo shrinks from 18px → 14px as user scrolls (smooth `font-size` transition)
- Nav links fade from 0 → 1 opacity staggered on page load (delay: 0.8s, 1.0s, 1.2s, 1.4s)

### 5.2 — Cursor

**Custom cursor** (desktop only):
- Default: 10px circle, `border: 1px solid rgba(196, 120, 48, 0.6)`, transparent fill
- On links/buttons: expands to 48px, fills with `rgba(196, 120, 48, 0.15)`, border thickens to 1.5px
- On images: cursor changes to crosshair with text "VIEW" in DM Mono 11px appears below it
- Cursor lags slightly behind mouse (spring physics, tension: 150, friction: 28)
- On click: brief pulse — scale 0.8 → 1.2 → 1.0 in 300ms

### 5.3 — Page Transitions

- Route changes: Current page fades out with `--cc-espresso` overlay sweeping from bottom-right corner (clip-path reveal), then new page fades in
- Duration: 600ms out, 400ms in
- Easing: `cubic-bezier(0.76, 0, 0.24, 1)`

### 5.4 — Footer

**Layout:** 3 columns + full-width bottom bar
- Col 1: Logo + brand tagline in Pinyon Script italic "Where craft meets cup."
- Col 2: Navigation links in Cormorant SC small caps
- Col 3: Instagram feed thumbnails (3×2 grid of latest posts, hover = slight zoom + copper border)
- Bottom bar: Copyright · DH A Lahore · coordinates in DM Mono `31.4697° N, 74.4022° E`
- Background: `--cc-void` with very subtle grain texture
- Top border: 1px `--cc-copper` at 30% opacity

---

## 06. PAGE DESIGNS

---

### PAGE 1: HOME `/`

#### 6.1.1 — Hero Section (Full Viewport)

**Layout:** Full-screen, 100vh minimum. Content centered with a slight upward bias (60% from top)

**Background:**
- Darkened, high-quality photograph of a coffee being poured (close-up, steam visible)
- `filter: brightness(0.35) saturate(1.2)` applied to image
- Radial gradient overlay: center warm (`#3D2010` at 30% opacity) → edges deep black
- Grain texture SVG overlay at 5% opacity
- Subtle parallax: image scrolls at 0.6× speed of content

**Content (center-aligned):**
```
[Eyebrow: "DHA LAHORE · EST. 2024"]

[H1, massive, Cormorant Garamond 300:]
"Crafted for
Those Who Know
the Difference."

[Body, Jost 300, --cc-parchment, 18px, max-width 520px, center:]
"Specialty coffee sourced from single origins,
brewed with ritual precision."

[Two CTAs:]
[Primary] "Explore the Menu" — copper fill button
[Secondary] "Our Story" — ghost/text link with arrow →
```

**Hero Animations:**
1. On load: H1 words appear letter by letter (not character — word by word), staggered fade-up. Each word: `translateY(30px) → translateY(0)`, opacity 0 → 1. Duration 0.8s per word. Delay between words: 150ms
2. Eyebrow label: slides in from left (translateX -20px → 0) at 0.3s
3. Body text: fades in at delay 1.2s
4. CTAs: fade up at delay 1.6s
5. Scroll indicator (thin vertical line that pulses downward, copper color) at bottom center

**Scroll Animation:**
- As user scrolls down, hero text parallax-fades upward and out
- A thin copper horizontal line "grows" from center as transition to next section

---

#### 6.1.2 — "Statement" Section

**Layout:** Full width. 50vh height. Dark background `--cc-espresso`.

**Content:** A single quote, large, centered, Cormorant Garamond 300 italic, `--cc-cream`:

> *"Coffee is not a drink. It is a language  
> spoken between craft and patience."*
> — CoffeeCraft

**Animation:** Quote reveals word-by-word as section enters viewport (Intersection Observer). Each word: fade + scale 0.95 → 1. Very slow (1.5s total duration).

Flanking decorative element: thin 40px horizontal copper lines on left and right of the quote block.

---

#### 6.1.3 — Featured Categories (Horizontal Scroll or Grid)

**Layout:** 3-column grid on desktop, horizontal scroll on mobile. Each card: ~380px wide, aspect ratio 3:4.

**Cards for:**
- Espresso Creations
- Pour-Over Rituals  
- Cold Craft Series

**Card Anatomy:**
- Full-bleed background image (very dark, moody photography)
- On card: category number `01`, `02`, `03` in DM Mono top-right (copper, 11px)
- Bottom: category name in Cormorant Garamond, cream
- Sub-text: Jost 300, fog color "7 expressions"
- Bottom border: 0px → 2px copper on hover (slides in from left)
- Corner detail: a 16px copper `L` bracket in top-left corner of each card

**Hover State (per card):**
- Image: `scale(1.04)` + brightness lifts slightly
- Text slides up 6px
- Copper bracket appears (opacity 0 → 1)
- Duration: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Scroll Animation:** Cards stagger into view. Card 1 at 0ms, Card 2 at 150ms, Card 3 at 300ms. Each: `translateY(40px) → 0`, opacity 0 → 1.

---

#### 6.1.4 — "The Craft" Feature Section

**Layout:** Full-width. Left: large text block. Right: image with floating badge.

**Left:**
- Eyebrow: "THE PROCESS"
- H2: "From origin to  
cup — nothing  
is accidental."
- Body: 2–3 sentences about sourcing, roasting philosophy
- CTA: "Discover Our Process →" text link, copper

**Right:**
- Tall portrait-format image (barista at work, moody)
- Floating badge: circular, `--cc-espresso` background, copper border 1px. Text: "Single Origin" / "100% Specialty Grade" in Cormorant SC tiny caps. Badge rotates slowly (360deg, 20s linear infinite)

**Scroll Animation:**
- Left block: slides in from left (translateX -60px → 0) on viewport entry
- Right image: slides in from right (translateX 60px → 0) with slight delay
- Floating badge: has a subtle bob animation (translateY 0 → -8px → 0, 3s ease-in-out infinite)

---

#### 6.1.5 — Menu Teaser (Horizontal Scroller)

**Layout:** Full-width section. Title above. Below: a horizontally-scrollable track of menu item cards.

**Each item card (280px wide):**
- Dark `--cc-espresso` background
- Product name: Cormorant Garamond 24px
- Brief descriptor: Jost 300 13px, fog color
- Price: DM Mono, copper
- A very minimal illustration or icon (line-art coffee vessel, 48px)
- On hover: card lifts (`box-shadow: 0 24px 60px rgba(0,0,0,0.5)`), copper underline appears under name

**Section header:** "A Selection of the Craft" in Cormorant Garamond H2 + drag hint "Drag to explore →" in DM Mono 11px fog

**Animation:** On load into viewport — cards slide in from right sequentially. Scroll track itself has `scroll-snap-type: x mandatory` and `scroll-behavior: smooth`.

---

#### 6.1.6 — Atmosphere / Gallery Strip

**Layout:** Full-width photo strip. 5 images in a row, each slightly different height (creating a staggered skyline effect). Images overlap by 12px. No gap except the overlap.

**Hover:** Individual image lifts (z-index boost), `scale(1.03)`, and a copper frame appears around it.

**Scroll Animation:** Strip scrolls in a slow horizontal drift (automatic, no user interaction needed — parallax scroll tied to vertical scroll position at 0.2× ratio).

---

#### 6.1.7 — Social Proof / Reviews

**Layout:** Dark section. Centered. One review at a time in a crossfade carousel.

**Each Review Card:**
- Stars: 5× gold "★" glyphs in DM Mono
- Quote in Cormorant Garamond italic, large (28px), max-width 680px
- Reviewer name + "Google Review" in Jost 300 12px fog
- Auto-advances every 6s with 0.8s crossfade
- Dot indicators below: small circles, active = copper filled, inactive = 1px copper border

---

#### 6.1.8 — Newsletter / Loyalty Sign-Up

**Layout:** Split. Left: large copper-tinted background with text. Right: email input.

**Text:** "Be the first to know. Single origin drops. Seasonal menus. Private events."

**Input style:** Underline-only input (no box border). Placeholder: "your@email.com" in Jost 300 fog. Submit: copper text "JOIN →" that appears as user types.

**Micro-animation:** On focus, a copper underline slides from left to right under the input field (0.4s ease).

---

### PAGE 2: MENU `/menu`

#### Header

Full-width hero. Shorter (50vh). Moody overhead shot of a full espresso spread. Same parallax treatment as home.

Text: "The Menu" in H1 Cormorant Garamond 300 + eyebrow "Curated. Crafted. Considered."

#### Category Navigation (Sticky Tab Bar)

Below hero: sticky tab bar with 4 tabs:
- Espresso · Pour-Over · Cold Craft · Food & Pairings

Active tab: copper underline 2px, cream text. Inactive: fog text.
On click: smooth scroll to section + tab underline slides across (not jump).

#### Menu Item Layout

Each menu section uses a **table-inspired layout**, not cards:

```
[Section Eyebrow: "ESPRESSO EXPRESSIONS"]
[H3: "01 — Classic Espresso"]

[Two columns:]
Left (70%):                    Right (30%):
Item Name + Descriptor         Price in DM Mono
────────────────────────────────────────────────
Espresso                       PKR 350
The purest expression.
Single origin, 18g dose.

Cortado                        PKR 420
Equal parts espresso and
steamed milk. No compromise.
```

**Hover on row:** Entire row gets a left border `4px solid --cc-copper` + very faint `--cc-roast` background. Text slides right 6px. Duration: 0.25s.

**Between sections:** A divider made of: `<hr>` styled as a thin copper line with a small coffee bean icon (SVG, 16px) centered on it.

#### Seasonal Spotlight

Full-width dark card (not full bleed). Inside: an "Editor's Pick" badge (copper). Featured item name in huge type. Limited availability note. Image on right.

---

### PAGE 3: CRAFT `/craft` (Our Story / Process)

This page is an **immersive scroll experience**. Think editorial magazine meets documentary.

#### Section A — Origin Story

**Layout:** Full-screen section. Left: large number "01" in Cormorant Garamond, 200px, copper, very faint (opacity 0.15). Right: text block.

**Content:** Brand founding story. Why CoffeeCraft. The obsession with craft.

**Animation:** Number `01` fades in and scales from 1.5× → 1.0× on viewport entry (slow, 1.5s). Text slides in from right.

#### Section B — Sourcing

Full-width image (coffee farm, airy and bright — contrast to the dark site). `mix-blend-mode: luminosity` applied. Overlaid text in cream: "We source from 3 origins. Each chosen once a year."

Below: 3 origin "cards" (Ethiopia Yirgacheffe, Colombia Huila, Guatemala Antigua). Each card: country name in H3, altitude, flavor notes, farm name. Flanked by a very minimal topographic map line-art SVG.

**Animation:** Cards use a cascading entrance — each one delayed by 200ms, appearing with a "reveal" effect (clip-path: `inset(100% 0 0 0) → inset(0% 0 0 0)`).

#### Section C — The Roast

**Interactive element:** A horizontal timeline of the roast profile.

A horizontal track with nodes for: Green Bean → First Crack → Development → Drop. User can hover each node to see a tooltip with temperature, time, flavor impact. Nodes pulse with a copper glow when hovered. The line connecting them has a slow traveling light animation (copper dot moving along the path, looping).

#### Section D — The Brew Methods

**Layout:** Alternating left/right for each method (Espresso, Pour-Over, AeroPress, Syphon).

Each: large number, method name in H2, a single paragraph of philosophy, and a minimal line-art illustration of the equipment (SVG, cream on dark).

**Micro-detail:** The SVG illustrations draw themselves in as the section enters viewport (`stroke-dashoffset` animation).

#### Section E — The Baristas

**Layout:** 3 team cards. Each: portrait photo (circular, slight grayscale — desaturated 40%), name in Cormorant Garamond, title in Cormorant SC small caps, a one-line philosophy quote in Pinyon Script italic.

**Hover:** Photo goes to full color. A copper ring rotates around the circle (border animation, 2s linear). 

---

### PAGE 4: RESERVE `/reserve`

**Purpose:** Table reservation. Clean, focused, premium.

#### Layout

Left half: Full-height atmospheric image (evening shot of the interior, warm ambient lighting). Copper vignette overlay.

Right half: Reservation form on `--cc-espresso` background.

#### Form Design

All inputs are **underline-only** (no box borders). 1px `--cc-mahogany` base color → `--cc-copper` on focus.

Fields:
- Full Name
- Contact Number
- Date (custom date picker — no browser defaults)
- Time (select: Morning / Afternoon / Evening — presented as 3 visual chips, not a dropdown)
- Party Size (1–8, presented as clickable number chips: `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5+ ]`)
- Special Requests (textarea, minimal)

**Submit button:** Full-width, `--cc-copper` fill, `--cc-void` text, `Cormorant SC` uppercase "CONFIRM YOUR TABLE". On hover: button background shifts to `--cc-gold`. On click: subtle haptic-like pulse animation.

**Success state:** Form fades away. Replaced by: a small coffee cup line-art SVG (draws itself) + "Your table has been reserved. We'll see you soon." in Cormorant Garamond italic.

**Date Picker:** Custom built. Month view. Days are `DM Mono` numbers. Selected day: copper circle background. Today: underline dot. Past dates: 30% opacity.

#### Micro-animations
- Labels float up when input is focused (classic float label pattern) — label in Cormorant SC 10px small caps, copper
- A subtle copper underline "traces" from left to right on input focus
- Error state: input shakes horizontally 4px × 3 times (150ms total), label turns to a warm red

---

### PAGE 5: JOURNAL `/journal`

**Purpose:** Coffee education, origin stories, brewing guides, seasonal announcements.

#### Index Layout

Masonry-inspired grid. Cards in two columns (desktop), one column (mobile).

**Card anatomy:**
- Full-bleed image (4:3 ratio)
- Category tag (Cormorant SC, copper, tiny) — e.g. "ORIGIN STORIES"
- Title (Cormorant Garamond H3, cream)
- Reading time in DM Mono (fog)
- No author avatars — cleaner

**Hover:** Image scale 1.04. A copper `[→]` icon appears in bottom-right of card, sliding in from right.

#### Article Page

- Full-width hero image (article-specific)
- Reading progress bar: thin, fixed to top of viewport. Copper color. Fills as user scrolls.
- Body typography: Jost 300 at 18px, `line-height: 1.85`, max-width 680px centered
- Pull quotes: Left-bordered (4px copper), Cormorant Garamond italic 24px, padded
- Images: Full-width within article, with caption in DM Mono 12px fog below
- At end: "Next Article" block with full-width teaser image

---

### PAGE 6: FIND US `/find-us`

**Layout:** Two halves. Left: information. Right: embedded Google Map (dark map style — custom map JSON using dark/monochrome tiles to match brand).

**Left block:**
- "Find Us" in H1 Cormorant Garamond
- Address in Jost 400, with a copper "📍" replaced by a custom SVG pin icon
- Hours table:  

```
Monday – Friday    8:00 AM – 11:00 PM
Saturday           9:00 AM – 12:00 AM
Sunday             10:00 AM – 10:00 PM
```
(Table styled with `DM Mono` for times, `Jost 300` for day labels. Alternating row: subtle 5% lighter background)

- Instagram: "@coffeecraft.world" as a copper link
- Phone: styled in DM Mono

**Map:**
- Custom dark map style (use Google Maps `styles` JSON: roads in `#2E1F12`, labels in `#C47830`, water in `#0A0805`, land in `#1C1410`)
- Custom map pin: coffee cup icon in copper SVG

---

## 07. MICRO-ANIMATIONS CATALOG

This is a comprehensive reference for all micro-animations across the site.

| # | Element | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|---|
| 1 | Nav links | Hover | Copper underline slides in left→right | 300ms | ease |
| 2 | CTA buttons | Hover | Background fill sweeps in from left | 400ms | cubic-bezier(0.76, 0, 0.24, 1) |
| 3 | Custom cursor | Move | Follows with spring lag | — | Spring(150, 28) |
| 4 | Custom cursor | Hover link | Scale 10px → 48px | 300ms | ease-out |
| 5 | Hero H1 words | Page load | Fade + translateY(30px→0), staggered | 800ms/word | ease-out |
| 6 | Section headings | Viewport entry | Clip-path reveal bottom→top | 700ms | cubic-bezier(0.76, 0, 0.24, 1) |
| 7 | Cards | Viewport entry | translateY(40px→0) + opacity, staggered | 600ms | ease-out |
| 8 | Menu rows | Hover | Left border slides in + text shifts 6px | 250ms | ease |
| 9 | Team portraits | Hover | Grayscale→color + rotating copper ring | 500ms | ease |
| 10 | Blog card | Hover | Image scale + arrow slides in | 400ms | ease |
| 11 | Form input | Focus | Copper underline traces left→right | 400ms | ease |
| 12 | Form label | Focus | Float up (translateY + scale 0.85) | 300ms | ease-out |
| 13 | Instagram badge | Idle | Slow rotation 360deg | 20s | linear infinite |
| 14 | Scroll indicator | Idle | Line pulses downward | 1.5s | ease-in-out infinite |
| 15 | SVG illustrations | Viewport entry | Stroke draws itself (dashoffset) | 2s | ease-in-out |
| 16 | Roast timeline dot | Idle | Copper dot travels path | 3s | linear infinite |
| 17 | Page transition | Route change | Dark overlay sweeps corner to corner | 600ms | cubic-bezier(0.76, 0, 0.24, 1) |
| 18 | Reading progress | Scroll | Copper bar fills 0→100% | — | real-time |
| 19 | Gallery strip | Vertical scroll | Horizontal parallax drift | — | real-time 0.2× ratio |
| 20 | Floating badge | Idle | Bob translateY 0→-8px→0 | 3s | ease-in-out infinite |
| 21 | Quote carousel | Auto | Crossfade between reviews | 800ms | ease |
| 22 | Newsletter input | Type | "JOIN →" CTA fades in | 400ms | ease |
| 23 | Hero image | Scroll | Parallax at 0.6× vertical speed | — | real-time |
| 24 | Date picker day | Hover/Select | Copper circle scales in | 200ms | ease-out |
| 25 | Form success | Submit | Form fades, SVG draws, text reveals | 1.2s | sequential |

---

## 08. SCROLL ANIMATION RULES

Use **Intersection Observer API** (or equivalent in the chosen framework) for all scroll-triggered animations.

### Thresholds
- **Text blocks:** Trigger at 20% viewport visibility
- **Cards/Grid items:** Trigger at 15% visibility
- **Full-width sections:** Trigger at 5% visibility

### Global Animation Defaults
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger Groups
When multiple elements animate together (e.g., 3 cards), delay increments:
- Child 1: `transition-delay: 0ms`
- Child 2: `transition-delay: 120ms`
- Child 3: `transition-delay: 240ms`

### Parallax Layers
| Layer | Scroll Speed | Direction |
|---|---|---|
| Hero background image | 0.6× | Downward |
| Hero text | 0.85× | Upward |
| Gallery strip | 0.2× | Horizontal drift |
| Floating badge | 0.9× (subtle) | Upward |

---

## 09. RESPONSIVE BEHAVIOR

### Breakpoints
| Name | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, collapsed nav |
| Tablet | 640–1024px | 2 columns, adjusted type scale |
| Desktop | 1025–1440px | Full layout |
| Wide | > 1440px | Max content width 1400px, centered |

### Mobile-Specific Rules
- Custom cursor: **disabled** on touch devices
- Horizontal scroll sections: `scroll-snap-type: x mandatory`
- Hero H1: `clamp(42px, 12vw, 64px)` — still large, commanding
- Nav: Hamburger menu opens a **full-screen overlay** (dark, `--cc-void`), links in large Cormorant Garamond, center-aligned. Opens with a clip-path reveal from top-right corner
- Parallax: **reduced** on mobile (0.3× instead of 0.6×) for performance
- Gallery strip: single-column stacked on mobile
- Reserve page: single column (form below image)
- Menu page: tabs become a horizontal scroll (no overflow, `scroll-snap`)

---

## 10. IMAGERY ART DIRECTION

All photography must follow this direction:

| Setting | Requirements |
|---|---|
| Lighting | Warm, low-key, directional. Heavy shadow. Like candlelight or golden hour |
| Color grading | Desaturated slightly + warm orange/brown grade. Filmic look |
| Subject matter | Coffee close-ups, steam, pour shots, barista hands, cafe interiors at dusk |
| Avoid | Bright white kitchens, flat lay with colourful props, stock smiling people |
| Texture | Visible grain. Surfaces: dark wood, aged copper, linen, matte ceramic |
| Composition | Negative space. Off-center. Dramatic. Never perfectly symmetrical |

**Image overlays on dark backgrounds:**
- Always apply: `filter: brightness(0.35–0.55) saturate(1.1–1.3)`
- Always layer: grain texture SVG at 4–6% opacity

---

## 11. INTERACTION SOUND DESIGN (OPTIONAL ENHANCEMENT)

If sound is enabled (user opt-in only, muted by default):
- Navigation click: subtle soft click (like a mechanical keyboard, very quiet)
- CTA hover: faint paper rustle
- Form success: a soft single chime

Sound toggle: small icon in nav (muted by default). Never auto-play.

---

## 12. PERFORMANCE NOTES

- All animations: prefer `transform` and `opacity` only (GPU-accelerated). No `width`, `height`, `top`, `left` animations.
- Images: WebP format. Lazy-load all below-the-fold. Hero image preloaded.
- Fonts: Self-hosted or `font-display: swap`. Preconnect to Google Fonts.
- Grain texture: SVG-based (not PNG), ~200 bytes.
- Parallax: Use `will-change: transform` on parallax elements.
- Intersection Observer: Use single shared observer instance, not per-element.
- Page transition: Use `View Transitions API` if available, with JS fallback.

---

## 13. DESIGN TOKENS SUMMARY (FOR STITCH)

```json
{
  "brand": "CoffeeCraft",
  "tagline": "Where craft meets cup.",
  "location": "DHA Lahore, Pakistan",
  "positioning": "Ultra-premium specialty coffee",
  "theme": "dark-luxury",
  "primary_bg": "#0A0805",
  "primary_accent": "#C47830",
  "secondary_accent": "#E8B84B",
  "primary_text": "#F5EDDC",
  "font_display": "Cormorant Garamond",
  "font_body": "Jost",
  "font_mono": "DM Mono",
  "font_accent": "Pinyon Script",
  "border_radius_cards": "4px",
  "border_radius_buttons": "2px",
  "animation_speed_fast": "250ms",
  "animation_speed_normal": "400ms",
  "animation_speed_slow": "700ms",
  "easing_primary": "cubic-bezier(0.76, 0, 0.24, 1)",
  "grain_texture": true,
  "custom_cursor": true,
  "parallax": true,
  "pages": ["home", "menu", "craft", "reserve", "journal", "find-us"]
}
```

---

## 14. GOOGLE STITCH PROMPT (COPY-PASTE READY)

> Design a luxury specialty coffee shop website for **CoffeeCraft**, located in DHA Lahore. The visual identity is dark luxury — near-black backgrounds (`#0A0805`), warm copper accents (`#C47830`), and cream text (`#F5EDDC`). Typography: display headlines in **Cormorant Garamond 300** (elegant, thin serifs), body in **Jost 300**, prices and technical details in **DM Mono**. Decorative flourishes in **Pinyon Script**.
>
> The site has 5 pages: Home, Menu, Craft (our story), Reserve (table booking), Journal (blog), and Find Us. Every section uses scroll-triggered animations: fade-up with stagger on cards, clip-path reveal on headings, parallax on hero images. A custom copper cursor replaces the default. Micro-animations on every interactive element: nav links have copper underlines that slide in, buttons fill with color from left, form inputs reveal a copper underline on focus. Hero text animates word-by-word on load.
>
> Texture: an SVG grain overlay at 4% opacity on all surfaces for tactile depth. The aesthetic is: candlelit, obsessive, precise. Like a high-end watchmaker decided to make coffee. No generic coffee-shop templates — this should feel as premium as Aesop, Bottega Veneta, or a Michelin-starred restaurant site.
>
> Include: horizontal-scrolling menu teaser, alternating text/image sections on the Craft page, a custom dark-themed Google Map on Find Us, a floating "single origin" badge with slow rotation, and a crossfade review carousel. All motion: GPU-accelerated transforms only. Mobile-first responsive.

---

*Document version: 1.0 | Prepared for Google Stitch implementation | CoffeeCraft © 2024*
