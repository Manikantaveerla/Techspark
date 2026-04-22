import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Zap } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Placement', href: '#placement' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center text-brand-primary">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                Master<span className="text-brand-accent">DEAI</span>
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919848760585"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full accent-gradient text-brand-primary font-bold text-sm hover:scale-105 transition-transform"
            >
              <Phone size={16} />
              9848760585
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-white/80 hover:text-brand-accent hover:bg-white/5 rounded-md transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://wa.me/919848760585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl accent-gradient text-brand-primary font-bold transition-all"
                >
                  <Phone size={18} />
                  Call Now: 9848760585
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
