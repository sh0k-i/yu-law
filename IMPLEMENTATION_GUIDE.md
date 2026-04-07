# Re-implementation Guide

## 1. Install Dependencies
```bash
npm install react-icons
```

## 2. Footer.jsx - Social Media Links

**Import statement (line 2):**
```javascript
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
```

**Add socialLinks array (after resources array, ~line 21):**
```javascript
const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/attorneyyu', icon: FaFacebook },
  { name: 'Instagram', href: 'https://www.instagram.com/yulawfirm', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/yu-law-firm-pllc', icon: FaLinkedin },
  { name: 'TikTok', href: 'https://www.tiktok.com/@yu.law.firm', icon: FaTiktok },
]
```

**Modify Column 1 paragraph (line 35):**
- Change `text-sm` to `text-sm mb-6`

**Add after Column 1 paragraph (line 39-56):**
```javascript
{/* Social Media Links */}
<div className="flex gap-4">
  {socialLinks.map((social) => {
    const IconComponent = social.icon
    return (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-cream hover:text-brand-red transition-all duration-200 hover:scale-110"
        aria-label={social.name}
      >
        <IconComponent className="w-5 h-5" />
      </a>
    )
  })}
</div>
```

## 3. PartnersSection.jsx - Add Hispanic Chambers

**Add to partnerLogos array (after Dallas Bar Association, ~line 28):**
```javascript
{
  name: 'Greater Dallas Hispanic Chamber of Commerce',
  logo: '/images/GDH.png',
  whiteOverlay: false
},
{
  name: 'Greater Manor Hispanic Chamber of Commerce',
  logo: '/images/GMH.png',
  whiteOverlay: false
},
```

**Required image files:**
- `/public/images/GDH.png`
- `/public/images/GMH.png`

## 4. OurTeamSection.jsx - Add Marcel Medley

**Add to teamMembers array (after Liezyl Yu Masinag, ~line 11):**
```javascript
{
  name: 'Marcel Medley',
  title: 'Oklahoma Attorney',
  description: 'Experienced Oklahoma attorney providing expert legal representation and counsel. Dedicated to delivering exceptional legal services and advocating for clients with integrity and professionalism.',
  image: '/images/team/marcel.png'
},
```

**Required image file:**
- `/public/images/team/marcel.png`

## 5. StaggerTestimonials.jsx - Fix Card Spacing

**Update transform style (line 92-97):**
```javascript
transform: `
  translate(-50%, -50%) 
  translateX(${(cardSize * 0.75) * position}px)
  translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
  rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
`,
```

Key change: `translateX` uses `(cardSize * 0.75) * position` instead of other values.
