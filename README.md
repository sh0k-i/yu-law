# Yu Law Firm - Professional Law Firm Website

A modern, professional, and fully-featured website for Yu Law Firm, specializing exclusively in **Personal Injury Law**. Built with React 19, Vite, and Tailwind CSS with comprehensive multilingual support.

## 🎯 Overview

Yu Law Firm's website is a sophisticated single-page application featuring:
- **Exclusive Focus**: Personal Injury Law specialization
- **Multilingual**: Full support for English, Spanish, Tagalog, and Cebuano
- **Modern Stack**: React 19, Vite 7, Tailwind CSS 3
- **Professional Animations**: Framer Motion throughout
- **Responsive Design**: Mobile-first approach with elegant desktop layouts

## 🎨 Brand Guidelines

### Color Palette
- **Primary Black**: `#000000` (brand-black) - Main text, headers
- **Accent Red**: `#AB1522` (brand-red) - CTAs, highlights, accents
- **Cream**: `#EDECE9` (brand-cream) - Backgrounds, soft sections
- **Gray**: `#9F9C8D` (brand-gray) - Secondary text, descriptions

### Typography
- **Headers**: Lancea Premium (serif) - `font-lancea`
- **Body Text**: Acherus Grotesque Light (sans-serif) - `font-acherus`
- **Fallback**: Inter (Google Fonts)

### Design Principles
- **Sharp Edges**: No rounded corners on cards, buttons, or containers
- **Professional Aesthetic**: Clean, modern, authoritative
- **Brand Tone**: Confident, strong, knowledgeable, dependable, compassionate, approachable
- **Animation Style**: Smooth, subtle, professional (Framer Motion)

## 🚀 Tech Stack

### Core Technologies
- **React 19.1.1** - Latest React with hooks and concurrent features
- **Vite 7.1.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router DOM 7.8.0** - Client-side routing
- **Framer Motion 12.23.12** - Professional animations and transitions

### Internationalization
- **i18next 25.5.2** - Core i18n library
- **react-i18next 15.7.3** - React bindings
- **i18next-http-backend 3.0.2** - Load translations from JSON
- **i18next-browser-languagedetector 8.2.0** - Auto-detect user language

### Additional Libraries
- **react-fast-marquee 1.6.5** - Animated logo carousel
- **ESLint 9.32.0** - Code quality and consistency

## 📁 Project Structure

```
yu-law/
├── public/
│   ├── images/                    # All image assets
│   │   ├── Logo Black.svg         # Logo for light backgrounds
│   │   ├── Logo White.svg         # Logo for dark backgrounds
│   │   ├── favicon.svg            # Browser icon
│   │   ├── hero-photo.png         # Main hero image
│   │   ├── portrait.png           # Founder portrait
│   │   ├── media1.jpg, media2.jpg # Content images
│   │   └── team/                  # Team member photos
│   ├── locales/                   # Translation files
│   │   ├── en/translation.json    # English
│   │   ├── es/translation.json    # Spanish
│   │   ├── tl/translation.json    # Tagalog
│   │   └── ceb/translation.json   # Cebuano
│   └── _redirects                 # Netlify routing config
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Sticky navigation with language switcher
│   │   ├── Footer.jsx             # Footer with contact info
│   │   ├── Logo.jsx               # Reusable logo component
│   │   ├── ScrollToTop.jsx        # Scroll to top button
│   │   ├── LanguageSwitcher.jsx   # Language dropdown
│   │   ├── StaggerTestimonials.jsx # Interactive testimonial carousel
│   │   └── sections/              # 14 section components
│   │       ├── HeroSection.jsx
│   │       ├── PartnersSection.jsx
│   │       ├── OurApproachSection.jsx
│   │       ├── PracticeAreasSection.jsx
│   │       ├── SettlementsSection.jsx
│   │       ├── FAQSection.jsx
│   │       ├── CTASection.jsx
│   │       ├── WhyChooseUsSection.jsx
│   │       ├── OurTeamSection.jsx
│   │       ├── BrandStorySection.jsx
│   │       ├── CoreValuesSection.jsx
│   │       ├── StatisticsSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       └── PurposeSection.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx    # i18n context provider
│   ├── pages/
│   │   ├── Home.jsx               # Main landing page
│   │   ├── About.jsx              # About page with team
│   │   ├── Services.jsx           # Services overview
│   │   └── Contact.jsx            # Contact form and info
│   ├── assets/
│   │   └── fonts/                 # Custom fonts (Lancea, Acherus)
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # Entry point
│   ├── i18n.js                    # i18n configuration
│   ├── index.css                  # Global styles
│   └── App.css                    # Additional styles
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind customization
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint configuration
└── README.md                      # This file
```

## 🌟 Key Features

### Multilingual Support (i18n)
- **4 Languages**: English, Spanish, Tagalog, Cebuano
- **Auto-Detection**: Detects user's browser language
- **Persistent**: Saves language preference to localStorage
- **Complete Coverage**: All user-facing text translated
- **Easy Switching**: Dropdown in header with flag emojis

### Home Page Sections
1. **HeroSection** - Hero with attorney photo, animated stats (200+ cases, $1M+ recovered), CTAs
2. **PartnersSection** - Animated logo marquee (red background)
3. **OurApproachSection** - 3-step legal process with animations
4. **PracticeAreasSection** - 6 Personal Injury types with detailed descriptions
5. **SettlementsSection** - Infinite scroll of real settlement amounts
6. **Testimonials** - Interactive staggered testimonial cards (9 clients)
7. **CTASection** - Final call-to-action with phone number
8. **FAQSection** - 6 common questions with accordion

### Additional Pages
- **About**: Mission, Vision, Team (9 members), Brand positioning
- **Services**: Personal Injury focus with 10 service types
- **Contact**: Form, contact info, office details, map placeholder

### Advanced Animations
- **Scroll-triggered**: Sections animate on scroll into view
- **Staggered**: Cards and lists animate in sequence
- **Counters**: Animated number counting (stats)
- **Hover Effects**: Scale, lift, rotate on interaction
- **Infinite Scroll**: Seamless marquee animations
- **Spring Physics**: Bouncy, natural motion

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Large tap targets, mobile menu
- **Performance**: Optimized images, lazy loading ready

## 🛠 Development

### Prerequisites
- Node.js v16 or higher
- npm (comes with Node.js)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd yu-law

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
- Starts Vite dev server (typically http://localhost:5173)
- Hot Module Replacement (HMR) enabled
- Fast refresh for React components

### Build for Production
```bash
npm run build
```
- Creates optimized bundle in `/dist` directory
- Minifies JavaScript and CSS
- Optimizes assets and images
- Tree-shaking for unused code

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Test before deployment

### Lint Code
```bash
npm run lint
```
- Runs ESLint with React plugins
- Checks for code quality issues

## 📝 Configuration Files

### Vite (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Tailwind (tailwind.config.js)
- Custom brand colors
- Custom fonts (Lancea, Acherus)
- Custom font weights
- Scans all JSX/TSX files

### i18n (src/i18n.js)
- Loads translations from `/public/locales/{lng}/translation.json`
- Auto-detects language from browser or localStorage
- Fallback to English

## 🎨 Customization

### Adding/Updating Translations
1. Edit JSON files in `/public/locales/{language}/translation.json`
2. Use nested keys for organization
3. Add fallback text in components: `t('key.path', 'Fallback text')`

### Updating Team Members
1. Add photos to `/public/images/team/`
2. Update `OurTeamSection.jsx` with member details
3. Component handles missing photos with gradient placeholders

### Changing Brand Colors
1. Update `tailwind.config.js` theme colors
2. Colors automatically apply throughout site
3. Maintain contrast ratios for accessibility

### Adding New Sections
1. Create component in `/src/components/sections/`
2. Import and add to page (e.g., `Home.jsx`)
3. Follow existing animation patterns
4. Use i18n for all text content

## 📦 Deployment

### Netlify (Recommended)
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `_redirects` file handles client-side routing

### Build Checklist
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Verify all routes work
- [ ] Check language switching
- [ ] Test responsive design
- [ ] Verify all images load
- [ ] Test form submissions
- [ ] Check animation performance

## 🎯 Business Information

**Firm Name**: Yu Law Firm  
**Specialization**: Personal Injury Law  
**Phone**: (940) 239-9840  
**Email**: info@yulawfirm.com  
**Address**: 2201 Midway Road, Suite 102, Carrollton, Texas 75006  
**Hours**: Monday - Friday, 9:00 AM - 5:00 PM

### Team Members
1. Liezyl Yu Masinag - Owner | Attorney
2. Carla Cano Cantu - Case Manager
3. Kaye Brier - Paralegal
4. Caren Marie Montelibano - Discovery Clerk
5. Arian Loyd Yu Hinayon - Intake Specialist
6. Leila Trono - Medical Clerk
7. Tanya Almendarez - Compliance Officer
8. Marilyn Sario - Closing Coordinator
9. Bear - Barketing Manager 🐕

## 🔧 Troubleshooting

### Fonts Not Loading
- Verify font files exist in `/src/assets/fonts/`
- Check @font-face declarations in `index.css`
- Clear browser cache

### Translations Not Working
- Verify JSON files in `/public/locales/`
- Check browser console for loading errors
- Ensure translation keys match

### Build Errors
- Delete `node_modules` and run `npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version (v16+)

## 📄 License

© 2024 Yu Law Firm. All rights reserved.

---

**Built with ❤️ for Yu Law Firm** - Where compassionate advocacy meets confident expertise.
