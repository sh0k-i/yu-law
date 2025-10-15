# Yu Law Firm - Global Development Rules

## Project Overview
Yu Law Firm is a professional law firm website specializing exclusively in **Personal Injury Law**. Built with React 19, Vite 7, and Tailwind CSS 3 with comprehensive multilingual support (English, Spanish, Tagalog, Cebuano).

---

## 1. BRAND IDENTITY & DESIGN SYSTEM

### Color Palette (STRICT - Never Deviate)
- **Primary Black**: `#000000` (`brand-black`) - Main text, headers
- **Accent Red**: `#AB1522` (`brand-red`) - CTAs, highlights, accents
- **Cream**: `#EDECE9` (`brand-cream`) - Backgrounds, soft sections
- **Gray**: `#9F9C8D` (`brand-gray`) - Secondary text, descriptions

**Rule**: Always use Tailwind custom color classes (`brand-black`, `brand-red`, `brand-cream`, `brand-gray`). Never use generic Tailwind colors for brand elements.

### Typography (STRICT)
- **Headers**: `font-lancea` (Lancea Premium serif) - All h1-h6, section titles
- **Body Text**: `font-acherus` (Acherus Grotesque Light) - Paragraphs, descriptions, UI
- **Fallback**: Inter (Google Fonts)

**Rule**: Never mix fonts. Headers must always use `font-lancea`, body text must always use `font-acherus`.

### Design Principles (MANDATORY)
1. **Sharp Edges**: NO rounded corners on cards, buttons, or containers
2. **Professional Aesthetic**: Clean, modern, authoritative
3. **Brand Tone**: Confident, strong, knowledgeable, dependable, compassionate, approachable
4. **Spacing**: Generous whitespace, clear visual hierarchy
5. **Accessibility**: WCAG compliant, proper focus states

**Rule**: Never add `rounded-*` classes to cards, buttons, or major UI elements. Sharp edges are a core brand identity.

---

## 2. COMPONENT ARCHITECTURE

### Section Component Standards
All section components must follow this structure:

```javascript
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SectionName = () => {
  const { t } = useTranslation()
  
  return (
    <section className="py-20 bg-[background-color]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('section.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg font-acherus text-brand-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('section.description')}
          </motion.p>
        </div>
        {/* Section content */}
      </div>
    </section>
  )
}
```

**Rules**:
- All sections must use `py-20` for vertical padding
- Container must use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section headers must follow the standard animation pattern
- Red underline accent (`w-24 h-1 bg-brand-red`) is mandatory for all section titles

### File Organization
```
src/
├── components/
│   ├── [Shared components: Header, Footer, Logo, etc.]
│   └── sections/
│       └── [All section components]
├── pages/
│   └── [Page components: Home, About, Services, Contact]
├── contexts/
│   └── [Context providers]
└── assets/
    └── fonts/
```

**Rule**: Section components go in `components/sections/`, page components in `pages/`. Never mix them.

---

## 3. ANIMATION STANDARDS (Framer Motion)

### Standard Animation Patterns (USE THESE)

#### Section Title Animation
```javascript
// Title
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Red underline
initial={{ width: 0 }}
whileInView={{ width: 96 }}
transition={{ duration: 0.8, delay: 0.2 }}

// Description
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
```

#### Staggered Container Animation
```javascript
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

#### Button Hover Effects
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

#### Card Hover Effects
```javascript
whileHover={{ y: -8 }}
transition={{ duration: 0.3, ease: "easeOut" }}
```

### Animation Timing Guidelines (STRICT)
- **Fast interactions**: 0.2-0.3s (hover, tap)
- **Standard animations**: 0.6-0.8s (fade in, slide)
- **Slow reveals**: 1.0-1.2s (complex animations)
- **Counters**: 2.0-3.0s (number animations)
- **Infinite loops**: 120s (marquee scrolls)

### Viewport Settings (MANDATORY)
- Always use `viewport={{ once: true }}` to prevent re-animation on scroll up
- Use `viewport={{ amount: 0.2-0.3 }}` for trigger threshold

**Rules**:
- All scroll-triggered animations must use `whileInView`
- Never animate layout properties (width, height, margin) - use transform and opacity only
- Stagger delays must be minimal (0.1-0.2s intervals)

---

## 4. INTERNATIONALIZATION (i18n)

### Translation Usage (MANDATORY)
```javascript
import { useTranslation } from 'react-i18next'

const Component = () => {
  const { t } = useTranslation()
  
  return (
    <div>
      {t('key.path', 'Fallback text')}
    </div>
  )
}
```

### Supported Languages
1. English (en) - Default
2. Spanish (es)
3. Tagalog (tl)
4. Cebuano (ceb)

### Translation File Structure
```
/public/locales/
├── en/translation.json
├── es/translation.json
├── tl/translation.json
└── ceb/translation.json
```

**Rules**:
- ALL user-facing text must use `t()` function
- Always provide fallback text as second parameter
- Use nested keys for organization (e.g., `hero.title`, `services.description`)
- Never hardcode text in components (except for development placeholders)
- Update ALL language files when adding new keys

---

## 5. RESPONSIVE DESIGN

### Breakpoints (Tailwind Defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach (MANDATORY)
```javascript
// Correct: Mobile first, then larger screens
className="text-base md:text-lg lg:text-xl"

// Wrong: Desktop first
className="text-xl lg:text-lg md:text-base"
```

### Grid Patterns
```javascript
// Standard card grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// 2-column layout
className="grid grid-cols-1 lg:grid-cols-2 gap-16"
```

**Rules**:
- Always design mobile-first, then add larger breakpoints
- Test all components at mobile (375px), tablet (768px), and desktop (1280px)
- Use responsive padding: `px-4 sm:px-6 lg:px-8`
- Ensure touch targets are at least 44x44px on mobile

---

## 6. BUTTON & CTA STANDARDS

### Primary Button (Red CTA)
```javascript
className="btn-primary"
// or manually:
className="bg-brand-red text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
```

### Secondary Button (Black Outline)
```javascript
className="btn-secondary"
// or manually:
className="border-2 border-brand-black text-brand-black px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-black hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2"
```

### With Framer Motion
```javascript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link to="/contact" className="btn-primary">
    {t('header.getStarted')}
  </Link>
</motion.div>
```

**Rules**:
- Primary buttons (red) for main CTAs
- Secondary buttons (black outline) for alternative actions
- Always wrap buttons in motion.div for hover/tap animations
- NO rounded corners on buttons
- Always include focus states for accessibility

---

## 7. IMAGE & ASSET MANAGEMENT

### Image Locations
```
/public/images/
├── Logo Black.svg          # Light backgrounds
├── Logo White.svg          # Dark backgrounds, header
├── favicon.svg             # Browser icon
├── hero-photo.png          # Main hero image
├── portrait.png            # Founder portrait
├── media1.jpg, media2.jpg  # Content images
└── team/                   # Team member photos
```

### Logo Usage
```javascript
import Logo from './Logo'

// For light backgrounds
<Logo variant="horizontal" color="black" />

// For dark backgrounds (header)
<Logo variant="horizontal" color="white" />
```

### Image Optimization Guidelines
- Large images (>1MB) should be optimized
- Consider WebP format for better compression
- Implement lazy loading for below-fold images
- Always provide alt text for accessibility

**Rules**:
- Use Logo component, never hardcode logo paths
- All images must have descriptive alt text
- Team photos go in `/public/images/team/`
- Handle missing images gracefully with placeholders

---

## 8. FORM STANDARDS

### Contact Form Pattern
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Handle submission
}
```

### Input Styling
```javascript
className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent font-acherus"
```

**Rules**:
- All forms must use controlled components (useState)
- Required fields must be marked with asterisk (*)
- Focus states must use brand-red ring
- Form validation must be client-side before submission
- Always use font-acherus for form inputs

---

## 9. GRADIENT BACKGROUNDS

### Page Header Gradient (About, Services, Contact)
```javascript
<section className="bg-brand-black text-white pt-32 pb-24 -mt-20 relative overflow-hidden">
  {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800" />
  
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20" />
  
  {/* Accent gradients (position varies per page) */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent" />
  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-900/10 to-transparent" />
  
  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Page content */}
  </div>
</section>
```

**Rules**:
- Use layered gradient system (base + overlay + accents)
- Accent positions vary per page for uniqueness
- Always set content container to `relative z-10`
- Maintain brand-consistent colors (brand-black, brand-red, blue accents)

---

## 10. DEVELOPMENT WORKFLOW

### Commands
```bash
npm run dev      # Development server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Before Committing
1. Run `npm run lint` - Fix all errors
2. Test all routes work
3. Verify language switching
4. Check responsive design (mobile, tablet, desktop)
5. Test animations performance

### Before Deployment
1. Run `npm run build` successfully
2. Test with `npm run preview`
3. Verify all routes work
4. Check language switching
5. Test responsive design
6. Verify all images load
7. Test form submissions
8. Check animation performance

**Rules**:
- Never commit code with ESLint errors
- Always test on multiple screen sizes before committing
- Test all language variants before deployment
- Verify production build before pushing to main branch

---

## 11. PERFORMANCE STANDARDS

### Animation Performance
- Only animate `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `margin`, `padding`
- Use `will-change` sparingly (Framer Motion handles this)
- Keep stagger delays minimal (0.1-0.2s)

### Image Optimization
- Compress images before adding to project
- Use WebP format where possible
- Implement lazy loading for below-fold images
- Optimize large images (hero-photo.png: 4.6MB → optimize)

### Code Splitting
- Vite handles automatic code splitting
- Keep component files focused and modular
- Avoid importing entire libraries when only using specific functions

**Rules**:
- Monitor bundle size after adding dependencies
- Profile animations if performance issues arise
- Optimize images before committing
- Keep components under 300 lines when possible

---

## 12. ACCESSIBILITY (WCAG Compliance)

### Focus States (MANDATORY)
```javascript
className="focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<nav>` for navigation
- Use `<section>` for sections
- Use `<article>` for independent content

### Alt Text
- All images must have descriptive alt text
- Decorative images should have empty alt (`alt=""`)
- Logo alt text: "Yu Law Firm"

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order must be logical
- Focus indicators must be visible

**Rules**:
- Test keyboard navigation on all pages
- Verify focus states are visible
- Ensure color contrast meets WCAG AA standards
- Provide alt text for all meaningful images

---

## 13. CONTACT INFORMATION (NEVER CHANGE)

**Firm Name**: Yu Law Firm  
**Specialization**: Personal Injury Law (Exclusive)  
**Phone**: (940) 239-9840  
**Email**: info@yulawfirm.com  
**Address**: 2201 Midway Road, Suite 102, Carrollton, Texas 75006  
**Hours**: Monday - Friday, 9:00 AM - 5:00 PM

### Team Members (9 Total)
1. Liezyl Yu Masinag - Owner | Attorney
2. Carla Cano Cantu - Case Manager
3. Kaye Brier - Paralegal
4. Caren Marie Montelibano - Discovery Clerk
5. Arian Loyd Yu Hinayon - Intake Specialist
6. Leila Trono - Medical Clerk
7. Tanya Almendarez - Compliance Officer
8. Marilyn Sario - Closing Coordinator
9. Bear - Barketing Manager 🐕

**Rule**: Contact information is hardcoded in multiple places. When updating, check Header, Footer, Contact page, and translation files.

---

## 14. COMMON PITFALLS TO AVOID

### ❌ DON'T
- Add rounded corners to cards, buttons, or major UI elements
- Mix fonts (headers must be Lancea, body must be Acherus)
- Use generic Tailwind colors for brand elements
- Hardcode text without i18n
- Animate layout properties (width, height, margin)
- Skip mobile testing
- Commit code with ESLint errors
- Add dependencies without considering bundle size

### ✅ DO
- Use sharp edges (no rounded corners)
- Follow brand color palette strictly
- Use i18n for all user-facing text
- Test on mobile, tablet, and desktop
- Use standard animation patterns
- Follow component structure guidelines
- Optimize images before committing
- Test all language variants

---

## 15. CODE STYLE GUIDELINES

### Import Order
```javascript
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// 3. Local components
import Logo from './Logo'
import Header from './Header'

// 4. Contexts
import { useLanguage } from '../contexts/LanguageContext'
```

### Component Structure
```javascript
const ComponentName = () => {
  // 1. Hooks
  const { t } = useTranslation()
  const [state, setState] = useState()
  
  // 2. Animation variants
  const containerVariants = { ... }
  const itemVariants = { ... }
  
  // 3. Event handlers
  const handleClick = () => { ... }
  
  // 4. Return JSX
  return (
    <section>
      {/* Component content */}
    </section>
  )
}

export default ComponentName
```

### Naming Conventions
- Components: PascalCase (`HeroSection`, `ContactForm`)
- Functions: camelCase (`handleSubmit`, `formatMoney`)
- Constants: UPPER_SNAKE_CASE (`TARGET_CASES`, `ANIMATION_DURATION`)
- Files: Match component name (`HeroSection.jsx`)

**Rules**:
- Keep component files focused (one component per file)
- Extract reusable logic into custom hooks
- Use descriptive variable names
- Comment complex logic
- Follow ESLint rules

---

## 16. DEPLOYMENT CONFIGURATION

### Netlify Setup
- Build command: `npm run build`
- Publish directory: `dist`
- `_redirects` file: `/* /index.html 200` (enables client-side routing)

### Environment Requirements
- Node.js: v16 or higher
- Package Manager: npm
- Browser Support: Modern browsers (ES6+)

**Rules**:
- Test production build locally before deploying
- Verify all routes work after deployment
- Check language switching in production
- Monitor bundle size

---

## SUMMARY: GOLDEN RULES

1. **Sharp Edges Always** - No rounded corners on major UI elements
2. **Brand Colors Only** - Use brand-black, brand-red, brand-cream, brand-gray
3. **Font Consistency** - Lancea for headers, Acherus for body
4. **i18n Everything** - All user-facing text must use translation keys
5. **Mobile First** - Design for mobile, then scale up
6. **Standard Animations** - Follow established Framer Motion patterns
7. **Accessibility First** - WCAG compliant focus states and semantic HTML
8. **Performance Matters** - Only animate transform/opacity, optimize images
9. **Test Before Commit** - Lint, test routes, check responsive design
10. **Document Changes** - Update README and memories for major changes

---

**Last Updated**: October 15, 2025  
**Project Version**: 1.0.0  
**Maintained By**: Development Team
