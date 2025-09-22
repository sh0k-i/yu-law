# Yu Law Style Guide

## Brand Colors

The Yu Law website uses a sophisticated, professional color palette:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `brand-black` | `#000000` | Primary text, backgrounds, borders |
| `brand-red` | `#AB1522` | Accent color, buttons, highlights |
| `brand-cream` | `#EDECE9` | Secondary backgrounds, light text |
| `brand-gray` | `#9F9C8D` | Tertiary text, subtle accents |

These colors are configured in the Tailwind configuration:

```javascript
// tailwind.config.js
colors: {
  'brand-black': '#000000',
  'brand-red': '#AB1522',
  'brand-cream': '#EDECE9',
  'brand-gray': '#9F9C8D',
}
```

## Typography

### Font Families

The Yu Law website uses two custom fonts:

1. **Lancea Premium** (`font-lancea`)
   - Used for headings and display text
   - Adds elegance and sophistication
   - Applied to all `h1`, `h2`, `h3`, `h4`, `h5`, `h6` elements

2. **Acherus Grotesque** (`font-acherus`)
   - Used for body text, buttons, and navigation
   - Modern and highly readable
   - Default body font with `font-weight: 300`

Font configuration in Tailwind:

```javascript
// tailwind.config.js
fontFamily: {
  'lancea': ['Lancea Premium', 'serif'],
  'acherus': ['Acherus Grotesque', 'sans-serif'],
}
```

### Font Weights

```javascript
// tailwind.config.js
fontWeight: {
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
}
```

### Typographic Scale

- **Headings**:
  - `h1`: `text-5xl md:text-6xl lg:text-7xl font-lancea`
  - `h2`: `text-4xl md:text-5xl font-lancea`
  - `h3`: `text-3xl md:text-4xl font-lancea`
  - `h4`: `text-2xl md:text-3xl font-lancea`
  - `h5`: `text-xl md:text-2xl font-lancea`
  - `h6`: `text-lg md:text-xl font-lancea`

- **Body Text**:
  - Regular: `text-base font-acherus font-light`
  - Large: `text-lg font-acherus font-light`
  - Small: `text-sm font-acherus font-light`

## Layout Guidelines

### Containers

- **Maximum Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Used for main content containers to maintain consistent width
  - Responsive padding on different screen sizes

### Section Spacing

- **Vertical Padding**: `py-20` (5rem top and bottom)
- **Between Components**: `mb-16` or `gap-8`
- **Section Dividers**: `border-t border-brand-gray mt-8 pt-8`

### Grid System

- **Standard Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Two-Column Layout**: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Four-Column Layout**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`

### Responsive Breakpoints

Following Tailwind CSS defaults:
- **sm**: 640px and above
- **md**: 768px and above
- **lg**: 1024px and above
- **xl**: 1280px and above
- **2xl**: 1536px and above

## Component Styles

### Buttons

Two primary button styles are used throughout the site:

1. **Primary Button** (`.btn-primary`):
```css
.btn-primary {
  @apply bg-brand-red text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2;
}
```

2. **Secondary Button** (`.btn-secondary`):
```css
.btn-secondary {
  @apply border-2 border-brand-black text-brand-black px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-black hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2;
}
```

### Cards

Card styling patterns:

1. **Standard Card**:
```
bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col
```

2. **Hover Effect** (`.card-hover`):
```css
.card-hover {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
}
```

3. **Featured Card**:
```
relative bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col border-t-4 border-brand-red
```

### Section Headers

Consistent pattern for section headers:

```jsx
<div className="text-center mb-16">
  <motion.h2 
    className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    SECTION TITLE
  </motion.h2>
  <motion.div 
    className="w-24 h-1 bg-brand-red mx-auto mb-8"
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  ></motion.div>
  <motion.p 
    className="text-lg font-acherus text-brand-gray max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    Section description goes here.
  </motion.p>
</div>
```

## Multi-Language Support

### Language Context Provider
- Global state management for language selection
- Provides translated content throughout the application
- Persists language preference in localStorage
- Supports English, Spanish, Tagalog, and Cebuano

### Translation Structure
- JSON files organized by language code in `/public/locales/`
- Nested namespaces for different sections of the site
- Default English fallback for missing translations
- Structured with consistent key naming conventions

### Implementation Pattern
```jsx
// Using translations in components
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  
  return (
    <h2>{t('section.title')}</h2>
    <p>{t('section.description')}</p>
  );
}
```

## Animation Guidelines

### Framer Motion Patterns

1. **Fade In & Slide Up** (common for section elements):
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

2. **Staggered Children** (for lists/grids):
```jsx
// Parent container
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}

// Where containerVariants is:
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

// And each child has:
variants={childVariants}

// Where childVariants is:
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}
```

3. **Hover Effects**:
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### CSS Animation Utilities

1. **Fade In** (`.fade-in`):
```css
.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

2. **Slide Up** (`.slide-up`):
```css
.slide-up {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Background Styles

### Gradient Backgrounds

```jsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
```

### Image Backgrounds with Overlay

```jsx
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)'
  }}
></div>
<div className="absolute inset-0 bg-black bg-opacity-60"></div>
```

### Special Effect: Ethereal Shadows

Used for creating subtle, dynamic background effects:

```jsx
<div className="absolute inset-0 z-5">
  <EtherealShadows
    color="rgba(128, 128, 128, 1)"
    animation={{ scale: 100, speed: 90 }}
    noise={{ opacity: 1, scale: 1.2 }}
    sizing="fill"
    className="w-full h-full"
  />
</div>
```

## Responsive Design Principles

1. **Mobile-First Approach**
   - Base styles apply to mobile
   - Media queries enhance for larger screens
   - Example: `text-base md:text-lg lg:text-xl`

2. **Stack to Single Column on Mobile**
   - Example: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

3. **Hide/Show Elements by Breakpoint**
   - Hide on mobile: `hidden md:block`
   - Show only on mobile: `block md:hidden`

4. **Adaptive Spacing**
   - Example: `px-4 sm:px-6 lg:px-8`
   - Example: `py-12 md:py-16 lg:py-20`

5. **Mobile Navigation**
   - Hamburger menu on small screens
   - Full nav on desktop

## Accessibility Guidelines

1. **Contrast Ratios**
   - Maintain WCAG AA standard (4.5:1) for text and background colors
   - Use brand-black text on light backgrounds
   - Use white or cream text on dark backgrounds

2. **Focus States**
   - All interactive elements have visible focus states
   - Example: `focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2`

3. **Screen Reader Support**
   - Include `aria-` attributes where needed
   - Use `sr-only` class for screen-reader-only text

## Component-Specific Styling

### Header
- Sticky positioning with transparent-to-brand-red transition on scroll
- White logo and navigation links
- Hover effects on navigation items
- CTA button changes styles based on scroll position

### Footer
- Brand-black background with white/cream text
- Multi-column layout with logo, contact info, links
- Red accents on interactive elements

### FAQ Section
- Two-column layout on desktop
- Accordion-style questions with smooth expand/collapse animation
- Plus icon that rotates to X when expanded
- Hover states with brand-red color

### Testimonials
- Staggered animation for cards
- Clean, card-based design with client photo
- Subtle hover effects

### Practice Areas
- Card-based grid layout
- Consistent hover animations
- Descriptive content structure with title, summary, and service list

### Language Switcher
- Elegant dropdown design with country flags
- Smooth animation using Framer Motion
- Visually indicates current language selection
- Adapts to header color scheme based on scroll position
- Mobile-friendly implementation in the navigation menu
