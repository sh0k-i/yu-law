import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { usePostHog } from '@posthog/react'
import { trackPhoneClick, trackEmailClick, trackCTAClick, trackNavigationClick } from '../utils/analytics'

const Footer = () => {
  const posthog = usePostHog()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ]

  const resources = [
    { name: 'Our Team', href: '/about' },
    { name: 'Client Reviews', href: '/reviews' },
    { name: 'Free Consultation', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/attorneyyu', icon: FaFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/yulawfirm', icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/yu-law-firm-pllc', icon: FaLinkedin },
    { name: 'TikTok', href: 'https://www.tiktok.com/@yu.law.firm', icon: FaTiktok },
  ]

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Brand Section */}
          <div>
            <Logo variant="horizontal" color="white" className="mb-4" />
            <p className="text-brand-cream font-acherus leading-relaxed text-sm mb-6">
              Specializing in Personal Injury Law. Empowering lives through compassionate legal advocacy and unwavering support.
            </p>
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
                    onClick={() => trackNavigationClick(posthog, { 
                      navItem: social.name, 
                      destination: social.href, 
                      isMobile: false 
                    })}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">Phone:</span><br />
                <a 
                  href="tel:940-239-9840"
                  className="hover:text-brand-red transition-colors"
                  onClick={() => trackPhoneClick(posthog, { location: 'footer_contact_info' })}
                >
                  (940) 239-9840
                </a>
              </p>
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">Email:</span><br />
                <a 
                  href="mailto:eservice@attorneyyu.com"
                  className="hover:text-brand-red transition-colors"
                  onClick={() => trackEmailClick(posthog, { location: 'footer_contact_info' })}
                >
                  eservice@attorneyyu.com
                </a>
              </p>
              <div className="text-brand-cream font-acherus text-sm leading-relaxed">
                <span className="font-medium">Address:</span>
                <div className="mt-2 space-y-2">
                  <div>
                    <p className="font-medium text-white text-xs mb-1">Carrollton Office</p>
                    <p className="text-brand-cream/90">
                      2201 Midway Road, Suite 102,<br />
                      Carrollton, Texas 75006
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-white text-xs mb-1">Austin Office</p>
                    <p className="text-brand-cream/90">
                      5900 Balcones Drive # 12813<br />
                      Austin, TX 78731
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">Hours:</span><br />
                Mon-Fri 9AM-5PM
              </p>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
                    onClick={() => trackNavigationClick(posthog, { 
                      navItem: link.name, 
                      destination: link.href, 
                      isMobile: false 
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources & CTA */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-brand-cream font-acherus text-xs mb-3">
                Ready to discuss your case?
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-block w-full text-center text-sm py-3"
                onClick={() => trackCTAClick(posthog, { 
                  ctaText: 'Get Started Now', 
                  location: 'footer' 
                })}
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-cream font-acherus text-sm">
              © {currentYear} Yu Law Firm. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
                onClick={() => trackNavigationClick(posthog, { 
                  navItem: 'Privacy Policy', 
                  destination: '/privacy', 
                  isMobile: false 
                })}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
