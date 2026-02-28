const CONSENT_KEY = 'yu-law-cookie-consent'
const CONSENT_VERSION = '1.0'

export const getCookieConsent = () => {
  try {
    const consent = localStorage.getItem(CONSENT_KEY)
    return consent ? JSON.parse(consent) : null
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

export const setCookieConsent = (preferences) => {
  try {
    const consent = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: {
        necessary: true, // Always true
        analytics: preferences.analytics || false,
        functional: preferences.functional || false,
      },
      consentGiven: true
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
    return consent
  } catch (error) {
    console.error('Error saving cookie consent:', error)
    return null
  }
}

export const hasConsent = (category = 'analytics') => {
  const consent = getCookieConsent()
  if (!consent) return false
  return consent.preferences?.[category] === true
}

export const clearCookieConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch (error) {
    console.error('Error clearing cookie consent:', error)
  }
}

export const needsConsent = () => {
  const consent = getCookieConsent()
  return !consent || !consent.consentGiven
}
