/**
 * Analytics Tracking Utilities for Yu Law Firm
 * Centralized event tracking functions using PostHog
 */

// Event name constants
export const EVENTS = {
  // Conversion Events
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  PHONE_CLICKED: 'phone_clicked',
  EMAIL_CLICKED: 'email_clicked',
  CTA_CLICKED: 'cta_clicked',
  
  // Engagement Events
  NAVIGATION_CLICKED: 'navigation_clicked',
  MOBILE_MENU_TOGGLED: 'mobile_menu_toggled',
  REVIEW_FILTER_CHANGED: 'review_filter_changed',
  REVIEW_CARD_CLICKED: 'review_card_clicked',
  REVIEW_MODAL_OPENED: 'review_modal_opened',
  FAQ_TOGGLED: 'faq_toggled',
  PRACTICE_AREA_VIEWED: 'practice_area_viewed',
  TESTIMONIAL_NAVIGATION_CLICKED: 'testimonial_navigation_clicked',
  TESTIMONIAL_REVIEW_LINK_CLICKED: 'testimonial_review_link_clicked',
  
  // User Behavior Events
  OFFICE_LOCATION_SELECTED: 'office_location_selected',
  LANGUAGE_CHANGED: 'language_changed',
  COOKIE_CONSENT_ACCEPTED: 'cookie_consent_accepted',
}

/**
 * Track contact form submission with user identification
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Form submission data
 */
export const trackContactFormSubmit = (posthog, data) => {
  try {
    posthog.capture(EVENTS.CONTACT_FORM_SUBMITTED, {
      form_location: data.location,
      submission_status: data.status,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message_length: data.message?.length || 0,
      error_message: data.error || null,
      timestamp: new Date().toISOString()
    })
    
    // Identify user on successful submission
    if (data.status === 'success' && data.email) {
      posthog.identify(data.email, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        first_contact_date: new Date().toISOString(),
        contact_method: 'form',
        preferred_office: data.preferredOffice || null
      })
    }
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track phone number clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Click data
 */
export const trackPhoneClick = (posthog, data) => {
  try {
    posthog.capture(EVENTS.PHONE_CLICKED, {
      click_location: data.location,
      phone_number: data.phoneNumber || '940-239-9840',
      page_url: window.location.pathname,
      device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track email clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Click data
 */
export const trackEmailClick = (posthog, data) => {
  try {
    posthog.capture(EVENTS.EMAIL_CLICKED, {
      click_location: data.location,
      email: data.email || 'eservice@attorneyyu.com',
      page_url: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track CTA button clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - CTA data
 */
export const trackCTAClick = (posthog, data) => {
  try {
    posthog.capture(EVENTS.CTA_CLICKED, {
      cta_text: data.ctaText,
      cta_location: data.location,
      destination: data.destination || '/contact',
      page_url: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track navigation clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Navigation data
 */
export const trackNavigationClick = (posthog, data) => {
  try {
    posthog.capture(EVENTS.NAVIGATION_CLICKED, {
      nav_item: data.navItem,
      destination: data.destination,
      is_mobile: data.isMobile || false,
      previous_page: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track mobile menu toggle
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Menu data
 */
export const trackMobileMenuToggle = (posthog, data) => {
  try {
    posthog.capture(EVENTS.MOBILE_MENU_TOGGLED, {
      action: data.action,
      page_url: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track review filter changes
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Filter data
 */
export const trackReviewFilterChange = (posthog, data) => {
  try {
    posthog.capture(EVENTS.REVIEW_FILTER_CHANGED, {
      filter_type: data.filterType,
      reviews_count: data.reviewsCount,
      previous_filter: data.previousFilter || null,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track review card clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Review data
 */
export const trackReviewCardClick = (posthog, data) => {
  try {
    posthog.capture(EVENTS.REVIEW_CARD_CLICKED, {
      review_id: data.reviewId,
      case_type: data.caseType,
      rating: data.rating,
      position_in_list: data.position,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track review modal opens
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Review data
 */
export const trackReviewModalOpen = (posthog, data) => {
  try {
    posthog.capture(EVENTS.REVIEW_MODAL_OPENED, {
      review_id: data.reviewId,
      case_type: data.caseType,
      rating: data.rating,
      source: data.source || 'review_page',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track FAQ toggle
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - FAQ data
 */
export const trackFAQToggle = (posthog, data) => {
  try {
    posthog.capture(EVENTS.FAQ_TOGGLED, {
      question: data.question,
      action: data.action,
      faq_index: data.faqIndex,
      page_location: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track practice area views
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Practice area data
 */
export const trackPracticeAreaView = (posthog, data) => {
  try {
    posthog.capture(EVENTS.PRACTICE_AREA_VIEWED, {
      injury_type: data.injuryType,
      card_position: data.position,
      page_location: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track testimonial carousel navigation
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Navigation data
 */
export const trackTestimonialNavigation = (posthog, data) => {
  try {
    posthog.capture(EVENTS.TESTIMONIAL_NAVIGATION_CLICKED, {
      direction: data.direction,
      current_testimonial_id: data.currentTestimonialId || null,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track testimonial review link clicks
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Link data
 */
export const trackTestimonialReviewLink = (posthog, data) => {
  try {
    posthog.capture(EVENTS.TESTIMONIAL_REVIEW_LINK_CLICKED, {
      review_id: data.reviewId,
      testimonial_position: data.position || null,
      source: 'homepage_carousel',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track office location selection
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Location data
 */
export const trackOfficeLocationSelect = (posthog, data) => {
  try {
    posthog.capture(EVENTS.OFFICE_LOCATION_SELECTED, {
      location: data.location,
      previous_location: data.previousLocation || null,
      page_url: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track language changes
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Language data
 */
export const trackLanguageChange = (posthog, data) => {
  try {
    posthog.capture(EVENTS.LANGUAGE_CHANGED, {
      from_language: data.fromLanguage || 'en',
      to_language: data.toLanguage,
      device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

/**
 * Track cookie consent acceptance
 * @param {Object} posthog - PostHog instance
 * @param {Object} data - Consent data
 */
export const trackCookieConsent = (posthog, data) => {
  try {
    posthog.capture(EVENTS.COOKIE_CONSENT_ACCEPTED, {
      analytics: data.analytics || true,
      functional: data.functional || true,
      time_to_accept: data.timeToAccept || null,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}
