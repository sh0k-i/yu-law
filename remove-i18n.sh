#!/bin/bash

# Script to remove i18n imports from all remaining components
# This will be run after manual verification

echo "Removing i18n from remaining components..."

# Note: This is a reference script. 
# The actual updates will be done through the IDE tools.
# This documents what needs to be done.

echo "Components to update:"
echo "- src/components/sections/PracticeAreasSection.jsx"
echo "- src/components/sections/CTASection.jsx"
echo "- src/components/sections/FAQSection.jsx"
echo "- src/components/sections/StatisticsSection.jsx"
echo "- src/components/sections/PurposeSection.jsx"
echo "- src/components/sections/WhyChooseUsSection.jsx"
echo "- src/components/sections/SettlementsSection.jsx"
echo "- src/components/sections/OurApproachSection.jsx"
echo "- src/components/sections/PartnersSection.jsx"
echo "- src/components/StaggerTestimonials.jsx"
echo "- src/pages/Services.jsx"
echo "- src/pages/Reviews.jsx"
echo "- src/pages/Contact.jsx"

echo ""
echo "After component updates, cleanup:"
echo "1. Remove i18n dependencies from package.json"
echo "2. Delete public/locales folder"
echo "3. Delete src/i18n.js"
echo "4. Delete src/contexts/LanguageContext.jsx"
echo "5. Delete src/components/LanguageSwitcher.jsx"
echo "6. Run npm install to clean up"
