import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const quickLinks = [
    { name: t('footer.aboutUs'), href: '/about' },
    { name: t('header.services'), href: '/services' },
    { name: t('header.reviews'), href: '/reviews' },
    { name: t('header.contact'), href: '/contact' },
  ]

  const resources = [
    { name: 'Our Team', href: '/about' },
    { name: 'Client Reviews', href: '/reviews' },
    { name: 'Free Consultation', href: '/contact' },
  ]

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Brand Section */}
          <div>
            <Logo variant="horizontal" color="white" className="mb-4" />
            <p className="text-brand-cream font-acherus leading-relaxed text-sm">
              Specializing in Personal Injury Law. Empowering lives through compassionate legal advocacy and unwavering support.
            </p>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Contact Information</h4>
            <div className="space-y-2">
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">{t('footer.contact.phone')}</span><br />
                (940) 239-9840
              </p>
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">{t('footer.contact.email')}</span><br />
                info@yulawfirm.com
              </p>
              <p className="text-brand-cream font-acherus text-sm leading-relaxed">
                <span className="font-medium">{t('footer.contact.address')}</span><br />
                2201 Midway Road, Suite 102,<br />
                Carrollton, Texas 75006
              </p>
              <p className="text-brand-cream font-acherus text-sm">
                <span className="font-medium">Hours:</span><br />
                Mon-Fri 9AM-5PM
              </p>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
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
              >
                {t('header.getStarted')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-cream font-acherus text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
