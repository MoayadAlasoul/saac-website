import { Link } from 'wouter';

/**
 * SAAC Footer Component
 * Professional corporate footer with company info, navigation, and contact
 * Design: Dark navy background, white text, organized layout
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/manus-storage/saac-logo_a11a40d1.png"
                alt="SAAC Logo"
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-bold text-lg">SAAC</h3>
                <p className="text-white/70 text-sm">Saif Abdul Aziz Allouh Contracting</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional contracting and construction solutions built on quality, reliability, and commitment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
                { label: 'Why SAAC', href: '/why-saac' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'General Contracting',
                'Construction Works',
                'Civil Works',
                'Finishing Works',
                'Maintenance & Renovation',
                'Project Management',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <span className="block font-medium text-white mb-1">Phone</span>
                <a href="tel:+962795864110" className="hover:text-accent transition-colors">
                  00962795864110
                </a>
              </li>
              <li>
                <span className="block font-medium text-white mb-1">Email</span>
                <a href="mailto:info@saac.site" className="hover:text-accent transition-colors">
                  info@saac.site
                </a>
              </li>
              <li>
                <span className="block font-medium text-white mb-1">Website</span>
                <a href="https://saac.site" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  saac.site
                </a>
              </li>
              <li>
                <span className="block font-medium text-white mb-1">Address</span>
                <span>Amman, Jordan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; {currentYear} SAAC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
