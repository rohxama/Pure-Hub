# LUXE Design System

A comprehensive design system for a premium, minimal, elegant e-commerce brand.

---

## 1. Design Principles

| Principle | Description |
|---|---|
| **Minimal** | Every element earns its place. Remove before you add. |
| **Premium** | Subtle details, generous spacing, refined typography. |
| **Consistent** | Reuse patterns. Predictability builds trust. |
| **Accessible** | WCAG 2.1 AA minimum. Contrast ratios, focus states, semantic HTML. |
| **Responsive** | Mobile-first. Works beautifully at every breakpoint. |

---

## 2. Color Palette

### Primary — Warm Gold
Used for: brand identity, CTAs, highlights, active states.

| Token | Hex | Usage |
|---|---|---|
| `primary-50` | `#fdf8f3` | Light backgrounds, hover states |
| `primary-100` | `#f9eddf` | Badge backgrounds, tags |
| `primary-200` | `#f2d7b8` | Borders, dividers |
| `primary-300` | `#e9bc88` | Disabled states |
| `primary-400` | `#dfa058` | Secondary buttons |
| `primary-500` | `#d48a3a` | **Primary buttons, links** |
| `primary-600` | `#c0722f` | Button hover |
| `primary-700` | `#a05a28` | Button active |
| `primary-800` | `#824826` | Dark accents |
| `primary-900` | `#6b3c22` | Text on light backgrounds |
| `primary-950` | `#3a1e10` | Maximum contrast |

### Neutral — Stone Gray
Used for: body text, borders, backgrounds, UI chrome.

| Token | Hex | Usage |
|---|---|---|
| `neutral-50` | `#fafaf9` | Page background (secondary) |
| `neutral-100` | `#f5f5f4` | Card backgrounds, input backgrounds |
| `neutral-200` | `#e7e5e4` | Borders, dividers |
| `neutral-300` | `#d6d3d1` | Placeholder text, disabled |
| `neutral-400` | `#a8a29e` | Captions, metadata |
| `neutral-500` | `#78716c` | Secondary text |
| `neutral-600` | `#57534e` | Body text (muted) |
| `neutral-700` | `#44403c` | Body text |
| `neutral-800` | `#292524` | Headings |
| `neutral-900` | `#1c1917` | **Primary text, headings** |
| `neutral-950` | `#0c0a09` | Maximum contrast |

### Accent — Deep Indigo
Used for: links, interactive elements, focus rings.

| Token | Hex | Usage |
|---|---|---|
| `accent-50` | `#eef2ff` | Link hover background |
| `accent-100` | `#e0e7ff` | Tag backgrounds |
| `accent-500` | `#6366f1` | Links, focus rings |
| `accent-600` | `#4f46e5` | Link hover |
| `accent-700` | `#4338ca` | Link active |

### Status Colors

| Status | Primary | Light | Usage |
|---|---|---|---|
| **Success** | `#22c55e` | `#f0fdf4` | In stock, confirmed, completed |
| **Warning** | `#f59e0b` | `#fffbeb` | Low stock, pending, alerts |
| **Error** | `#ef4444` | `#fef2f2` | Out of stock, validation errors, destructive |
| **Info** | `#3b82f6` | `#eff6ff` | Informational messages |

---

## 3. Typography

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| **Headings** | Playfair Display | Georgia, serif |
| **Body** | Inter | system-ui, sans-serif |
| **Mono** | JetBrains Mono | monospace |

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `display-lg` | 72px / 4.5rem | 1.1 | 700 | Hero headlines |
| `display-md` | 60px / 3.75rem | 1.15 | 700 | Page titles |
| `display-sm` | 48px / 3rem | 1.15 | 600 | Section headers |
| `heading-1` | 36px / 2.25rem | 1.2 | 600 | Page H1 |
| `heading-2` | 30px / 1.875rem | 1.25 | 600 | Section H2 |
| `heading-3` | 24px / 1.5rem | 1.3 | 600 | Card titles, H3 |
| `heading-4` | 20px / 1.25rem | 1.35 | 600 | Subsection H4 |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `body-md` | 16px / 1rem | 1.5 | 400 | **Default body** |
| `body-sm` | 14px / 0.875rem | 1.5 | 400 | Secondary text |
| `caption` | 12px / 0.75rem | 1.5 | 500 | Labels, metadata |
| `overline` | 12px / 0.75rem | 1.5 | 600 | Uppercase labels |

### Letter Spacing

| Token | Value | Usage |
|---|---|---|
| `tracking-tighter` | -0.05em | Large display text |
| `tracking-tight` | -0.025em | Headings |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.025em | Small caps, buttons |
| `tracking-wider` | 0.05em | Overlines |
| `tracking-widest` | 0.1em | Uppercase labels |

---

## 4. Spacing System

Base unit: **4px**. All spacing is a multiple of 4.

| Token | Value | Common Usage |
|---|---|---|
| `space-0.5` | 2px | Tight inner padding |
| `space-1` | 4px | Icon gaps, inline spacing |
| `space-1.5` | 6px | Compact list gaps |
| `space-2` | 8px | Small gaps, input padding |
| `space-3` | 12px | Card inner padding |
| `space-4` | 16px | Standard gaps, button padding |
| `space-5` | 20px | Medium gaps |
| `space-6` | 24px | Section inner spacing |
| `space-8` | 32px | Large gaps |
| `space-10` | 40px | Section spacing |
| `space-12` | 48px | Large section spacing |
| `space-16` | 64px | Major section spacing |
| `space-20` | 80px | Page section spacing |
| `space-24` | 96px | Hero section spacing |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0 | No radius |
| `radius-sm` | 4px | Subtle rounding (tags, badges) |
| `radius-md` | 8px | Small elements (buttons, inputs) |
| `radius-lg` | 12px | Cards, dropdowns |
| `radius-xl` | 16px | Modals, large cards |
| `radius-2xl` | 20px | Hero elements |
| `radius-3xl` | 24px | Featured cards |
| `radius-full` | 9999px | Pills, avatars, circular |

---

## 6. Shadow System

Layered shadows for depth hierarchy. All shadows use warm neutral tones.

| Token | CSS | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle lift |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | Cards at rest |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.06)` | Cards on hover, dropdowns |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.06)` | Modals, floating elements |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.06)` | Hero floating cards |
| `shadow-2xl` | `0 25px 50px rgba(0,0,0,0.15)` | Maximum elevation |
| `shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.04)` | Inset inputs, pressed states |

---

## 7. Button Styles

### Primary Button
```
bg: neutral-900
text: white
padding: 12px 24px (py-3 px-6)
radius: radius-lg (12px)
font: 14px / 600 / tracking-wide
hover: neutral-800
active: neutral-700
shadow: shadow-sm → shadow-md on hover
```

### Secondary Button
```
bg: transparent
border: 1px solid neutral-200
text: neutral-900
padding: 12px 24px
radius: radius-lg
font: 14px / 600
hover: bg neutral-50, border neutral-300
active: bg neutral-100
```

### Ghost Button
```
bg: transparent
text: neutral-700
padding: 8px 16px
radius: radius-md
font: 14px / 500
hover: bg neutral-100
active: bg neutral-200
```

### Accent Button (CTA)
```
bg: primary-500
text: white
padding: 14px 28px
radius: radius-lg
font: 14px / 600
hover: primary-600
active: primary-700
shadow: shadow-md → shadow-lg on hover
```

### Icon Button
```
size: 40px × 40px
radius: radius-full (circle)
bg: transparent
hover: neutral-100
active: neutral-200
```

### Button Sizes

| Size | Padding | Font | Height |
|---|---|---|---|
| `xs` | 6px 12px | 12px / 500 | 28px |
| `sm` | 8px 16px | 13px / 500 | 32px |
| `md` | 12px 24px | 14px / 600 | 40px |
| `lg` | 14px 28px | 15px / 600 | 48px |
| `xl` | 16px 32px | 16px / 600 | 56px |

---

## 8. Input Field Styles

### Default Input
```
bg: neutral-50 (rest) / white (focus)
border: 1px solid neutral-200
radius: radius-xl (16px)
padding: 12px 16px
font: 14px / 400
placeholder: neutral-400
hover: border neutral-300
focus: border accent-500, ring 3px accent-100
error: border error-500, ring 3px error-100
```

### Search Input
```
bg: neutral-50
border: none
radius: radius-full
padding: 12px 16px 12px 44px
icon: neutral-400 (left)
```

### Select Input
Same as default input with custom chevron icon.

### Textarea
Same as default input with min-height 120px, resizable vertical.

---

## 9. Card Styles

### Product Card
```
bg: white
radius: radius-2xl (20px)
overflow: hidden
shadow: shadow-sm
hover: shadow-xl, translateY(-4px)
transition: all 300ms ease
image: aspect-ratio 3/4, object-cover
```

### Content Card
```
bg: white
border: 1px solid neutral-100
radius: radius-2xl
padding: 32px
hover: border neutral-200, shadow-md
```

### Feature Card
```
bg: transparent
border: 1px solid neutral-200
radius: radius-xl
padding: 32px
hover: border neutral-300, shadow-lg
```

### Stats Card
```
bg: neutral-900
color: white
radius: radius-2xl
padding: 40px
text-align: center
```

---

## 10. Icon Recommendations

**Library**: Lucide React (already installed)

| Category | Icons | Style |
|---|---|---|
| Navigation | ChevronRight, ArrowRight, ArrowLeft, Menu, X | 20-24px, stroke-width 1.5-2 |
| Actions | ShoppingBag, Heart, Search, Filter, Plus, Minus | 16-20px, stroke-width 2 |
| Status | Check, AlertCircle, Info, Star, Truck, Shield | 16-20px, stroke-width 2 |
| Social | Globe, MessageCircle, Share2 | 16-20px, stroke-width 2 |
| Forms | Mail, Phone, MapPin, Clock, Lock, CreditCard | 16-20px, stroke-width 2 |

**Guidelines**:
- Use consistent stroke width (1.5 for decorative, 2 for functional)
- Always pair icons with text when conveying meaning
- Minimum touch target: 40px × 40px
- Use `currentColor` for icon color inheritance

---

## 11. Image Recommendations

| Context | Aspect Ratio | Treatment |
|---|---|---|
| Product thumbnail | 1:1 | Rounded-xl, bg neutral-50 |
| Product card | 3:4 | Rounded-2xl, object-cover |
| Product detail | 1:1 | Rounded-3xl, object-cover |
| Hero banner | 16:9 | Full-width, object-cover |
| Category card | 3:4 | Rounded-2xl, gradient overlay |
| Avatar | 1:1 | Rounded-full, object-cover |
| About/brand | 4:5 | Rounded-3xl, object-cover |

**Guidelines**:
- Always provide meaningful `alt` text
- Use Unsplash for placeholders: `?w=800&q=80`
- Lazy load below-fold images
- Consider `loading="lazy"` for performance

---

## 12. Animation Guidelines

### Principles
1. **Purposeful**: Every animation communicates something
2. **Subtle**: Enhance, don't distract
3. **Fast**: 150-400ms for most interactions
4. **Consistent**: Same element = same animation

### Timing

| Token | Duration | Usage |
|---|---|---|
| `fast` | 150ms | Hover states, toggles |
| `normal` | 250ms | Button presses, color changes |
| `slow` | 400ms | Page transitions, modals |
| `slower` | 600ms | Scroll reveals, hero animations |

### Easing

| Token | Curve | Usage |
|---|---|---|
| `ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving |
| `ease-spring` | `cubic-bezier(0.22, 1, 0.36, 1)` | Bouncy, playful |

### Common Patterns

| Pattern | Animation | Library |
|---|---|---|
| Page load | Fade up + scale from 0.98 | Framer Motion |
| Scroll reveal | Fade up 20px, opacity 0→1 | Framer Motion |
| Hover lift | translateY(-4px), shadow increase | CSS transition |
| Button press | scale(0.98) | CSS transition |
| Modal open | Backdrop fade, content scale from 0.95 | Framer Motion |
| Cart badge | scale(0)→scale(1) with spring | Framer Motion |
| Nav slide | translateX(100%)→0 | Framer Motion spring |

---

## 13. Responsive Breakpoints

| Breakpoint | Width | Target |
|---|---|---|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Wide desktop |

### Layout Grid

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Mobile | 4 | 16px | 16px |
| Tablet | 8 | 24px | 32px |
| Desktop | 12 | 32px | auto (max-w-7xl) |

### Component Behavior

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navbar | Hamburger menu | Hamburger | Full nav links |
| Product grid | 2 columns | 3 columns | 4 columns |
| Product detail | Stacked | Stacked | 2-column |
| Cart | Stacked | Stacked | 3-column (2+1) |
| Footer | Stacked | 2 columns | 4 columns |
| Hero | Stacked | Stacked | 2-column |

---

## 14. Tailwind CSS Configuration

This project uses **Tailwind CSS v4** with the `@tailwindcss/vite` plugin. All theme tokens are defined in `src/styles/index.css` using the `@theme` directive.

### Key Configuration Notes

- **No `tailwind.config.js`** — v4 uses CSS-native configuration
- **Alias**: `@` maps to `/src` (configured in `vite.config.js`)
- **Fonts**: Google Fonts loaded via `<link>` in `index.html`
- **Custom colors**: Defined as CSS custom properties in `@theme`

### Usage Examples

```jsx
// Colors
<div className="bg-primary-500 text-white">
<div className="text-neutral-900 bg-neutral-50">
<div className="border border-neutral-200">

// Typography
<h1 className="font-serif text-4xl font-semibold tracking-tight">
<p className="text-base text-neutral-600 leading-relaxed">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">

// Spacing
<div className="p-6 gap-4">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

// Radius
<div className="rounded-2xl">
<button className="rounded-xl">
<img className="rounded-full">

// Shadows
<div className="shadow-sm hover:shadow-xl">

// Transitions
<button className="transition-all duration-300 ease-out">
```

---

## 15. Design Token Reference Card

```
┌─────────────────────────────────────────────────────────┐
│                    LUXE DESIGN SYSTEM                   │
├─────────────────────────────────────────────────────────┤
│  COLORS                                                 │
│  Primary:   #d48a3a (gold-500)                         │
│  Neutral:   #1c1917 (stone-900)                        │
│  Accent:    #6366f1 (indigo-500)                       │
│  Success:   #22c55e    Warning: #f59e0b    Error: #ef4444│
├─────────────────────────────────────────────────────────┤
│  TYPOGRAPHY                                             │
│  Display:  Playfair Display 700   48-72px              │
│  Heading:  Playfair Display 600   20-36px              │
│  Body:     Inter 400              14-18px              │
│  Caption:  Inter 500              12px                 │
├─────────────────────────────────────────────────────────┤
│  SPACING (4px base)                                     │
│  xs:4  sm:8  md:16  lg:24  xl:32  2xl:48  3xl:64      │
├─────────────────────────────────────────────────────────┤
│  RADIUS                                                 │
│  sm:4  md:8  lg:12  xl:16  2xl:20  3xl:24  full:9999  │
├─────────────────────────────────────────────────────────┤
│  SHADOWS                                                │
│  xs → sm → md → lg → xl → 2xl                          │
├─────────────────────────────────────────────────────────┤
│  BREAKPOINTS                                            │
│  sm:640  md:768  lg:1024  xl:1280  2xl:1536            │
├─────────────────────────────────────────────────────────┤
│  ANIMATION                                              │
│  fast:150ms  normal:250ms  slow:400ms  slower:600ms    │
└─────────────────────────────────────────────────────────┘
```
