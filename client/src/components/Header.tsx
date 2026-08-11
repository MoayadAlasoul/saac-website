import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

/**
 * SAAC Header Component
 * Premium sticky header with navigation and CTA
 * Design: Dark navy background, white text, gold accent on active nav items
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why SAAC', href: '#why-saac' },
    { label: 'Contact Us', href: '#contact' },
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
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/manus-storage/saac-logo_a11a40d1.png"
            alt="SAAC Logo"
            className="h-12 w-12"
          />
          <span className="text-white font-bold text-lg hidden sm:inline">SAAC</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 transition-all duration-200"
          size="sm"
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
}
