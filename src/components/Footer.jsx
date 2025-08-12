import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const practiceAreas = [
    'Family Law',
    'Immigration Law',
    'Personal Injury',
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="horizontal" color="white" className="mb-4" />
              <p className="text-brand-cream font-acherus leading-relaxed max-w-md">
                Empowering lives through compassionate legal advocacy. We are dedicated to defending 
                our clients' rights and providing unwavering support through every legal challenge.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-brand-cream font-acherus mb-2">
                <span className="font-medium">Phone:</span> 940-239-9837
              </p>
              <p className="text-brand-cream font-acherus mb-2">
                <span className="font-medium">Email:</span> info@yulawfirm.com
              </p>
              <p className="text-brand-cream font-acherus">
                <span className="font-medium">Address:</span> Texas, United States
              </p>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    to="/services"
                    className="text-brand-cream font-acherus hover:text-brand-red transition-colors duration-200"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-lancea text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-brand-cream font-acherus hover:text-brand-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="btn-primary inline-block"
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
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-brand-cream font-acherus text-sm hover:text-brand-red transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
