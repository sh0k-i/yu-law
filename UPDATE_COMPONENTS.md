# Components Remaining to Update

The following components still need their `useTranslation` hooks removed and text hardcoded in English.
Google Translate will automatically translate all English text on the page.

## Components to Update:

1. ✅ Header.jsx - DONE
2. ✅ Footer.jsx - DONE  
3. ✅ HeroSection.jsx - DONE
4. ⏳ PracticeAreasSection.jsx
5. ⏳ Services.jsx (page)
6. ⏳ CTASection.jsx
7. ⏳ FAQSection.jsx
8. ⏳ StatisticsSection.jsx
9. ⏳ PurposeSection.jsx
10. ⏳ WhyChooseUsSection.jsx
11. ⏳ SettlementsSection.jsx
12. ⏳ OurApproachSection.jsx
13. ⏳ StaggerTestimonials.jsx
14. ⏳ Reviews.jsx (page)
15. ⏳ Home.jsx (page)
16. ⏳ PartnersSection.jsx
17. ⏳ Contact.jsx (page)

## Pattern for Updates:

1. Remove: `import { useTranslation } from 'react-i18next'`
2. Remove: `const { t } = useTranslation()`
3. Replace all `t('key')` with hardcoded English text from TRANSLATION_MAPPING.md

## After All Updates:

1. Remove i18n dependencies from package.json
2. Delete /public/locales folder
3. Delete src/i18n.js
4. Delete src/contexts/LanguageContext.jsx
5. Delete src/components/LanguageSwitcher.jsx
6. Test Google Translate functionality
