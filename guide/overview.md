# Yu Law Firm Website Overview

## Project Description

The Yu Law Firm website is a modern, professional React-based web application designed for a law firm specializing in Personal Injury, Family Law, and Estate Planning. The website features a sophisticated, brand-aligned design with smooth animations, responsive layout, and intuitive navigation to provide an exceptional user experience for potential clients seeking legal services.

## Technology Stack

- **Frontend Framework**: React (v19.1.1)
- **Routing**: React Router DOM (v7.8.0)
- **Styling**: Tailwind CSS (v3.4.17)
- **Animations**: Framer Motion (v12.23.12)
- **Internationalization**: i18next, react-i18next
- **Build Tool**: Vite (v7.1.0)
- **Code Quality**: ESLint (v9.32.0)
- **Post-Processing**: PostCSS (v8.5.6), Autoprefixer (v10.4.21)

## Project Structure

```
yu-law/
├── guide/                     # Project documentation
├── public/                    # Static assets
│   ├── images/                # Image assets
│   └── locales/               # Translation files
│       ├── en/                # English translations
│       ├── es/                # Spanish translations
│       ├── tl/                # Tagalog translations
│       └── ceb/               # Cebuano translations
├── src/                       # Source code
│   ├── assets/                # Internal assets
│   │   ├── fonts/             # Custom fonts
│   │   └── images/            # Internal images
│   ├── components/            # Reusable components
│   │   └── sections/          # Page sections
│   ├── contexts/              # React contexts
│   ├── pages/                 # Page components
│   ├── App.jsx                # Main application component
│   ├── i18n.js                # i18n configuration
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML entry
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration
```

## Key Features

### 1. Responsive Design
- Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- Mobile-friendly navigation with a hamburger menu for smaller screens
- Fluid typography and spacing system

### 2. Brand-Aligned UI Components
- Custom typography with Lancea Premium for headings and Acherus Grotesque for body text
- Consistent color scheme featuring brand red, black, cream, and gray
- Sophisticated animations and transitions for enhanced user experience

### 3. Key Pages
- **Home**: Feature-rich landing page with multiple sections showcasing the firm's services
- **About**: Information about the law firm, team members, and company history
- **Services**: Detailed information about legal services offered (Personal Injury, Family Law, Estate Planning)
- **Contact**: Contact form and information for client inquiries

### 4. Specialty Sections
- **Hero Section**: Bold introduction with call-to-action
- **Practice Areas**: Overview of legal services with elegant cards
- **Settlements**: Showcase of successful case settlements with marquee effect
- **Testimonials**: Client testimonials with staggered animation
- **FAQ Section**: Interactive frequently asked questions with accordion functionality
- **CTA Sections**: Strategically placed call-to-action elements to encourage client engagement

### 5. Interactive Elements
- Smooth page transitions
- Animated section reveals on scroll
- Interactive components with hover and active states
- Form validation for the contact form

### 6. Multi-Language Support
- Support for four languages: English, Spanish, Tagalog, and Cebuano
- Elegant language switcher with country flags in the header
- Language preference saved in browser's local storage
- Context-based language management throughout the app
- Structured translation files with namespaced organization

### 7. Performance Optimizations
- Lazy-loaded images and components
- Optimized build process with Vite
- Code-splitting for improved load times

## Sitemap

- **Home** (`/`)
  - Hero Section
  - Statistics
  - Purpose
  - Practice Areas
  - Settlements
  - Testimonials
  - Why Choose Us
  - CTA
  - FAQ

- **About** (`/about`)
  - About the Firm
  - Team Members
  - History
  - Values

- **Services** (`/services`)
  - Personal Injury
  - Family Law
  - Estate Planning

- **Contact** (`/contact`)
  - Contact Form
  - Office Location
  - Contact Information

## Development Workflow

1. Run development server: `npm run dev`
2. Build for production: `npm run build`
3. Preview production build: `npm run preview`
4. Lint code: `npm run lint`
