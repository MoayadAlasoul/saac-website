import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

/**
 * SAAC Header Component
 * Premium sticky header with navigation and mobile menu
 * Design: Dark navy background, white text, gold accent on active nav items
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Why SAAC', href: '/why-saac' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg'
          : 'bg-primary'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/manus-storage/saac-logo_a11a40d1.png"
            alt="SAAC Logo"
            className="h-12 w-12"
          />
          <span className="text-white font-bold text-lg hidden sm:inline">SAAC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-accent font-semibold' : 'text-white/80 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 transition-all duration-200"
              size="sm"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium py-2 transition-colors duration-200 ${
                  isActive ? 'text-accent font-semibold' : 'text-white/80 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
