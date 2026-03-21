import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Key Changes', href: '#changes' },
    { name: 'Landlords', href: '#landlord-obligations' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      // Offset for navbar height (approx 80px)
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'top-0' : 'top-0 sm:top-[36px]'
        } ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, '#')}
              className={`flex items-center gap-2 font-serif font-bold text-xl transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'
              }`}
            >
              <Home className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? 'text-blue-600' : 'text-blue-400'}`} />
              <span>RRA Guide</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#ask-ai"
                onClick={(e) => scrollToSection(e, '#ask-ai')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Ask AI
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-slate-600' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-y-auto absolute top-full left-0 right-0 shadow-lg max-h-[calc(100vh-70px)]"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-slate-700 font-medium hover:text-blue-600 py-4 px-4 border-b border-slate-100 last:border-0 rounded-xl hover:bg-slate-50 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#ask-ai"
                  onClick={(e) => scrollToSection(e, '#ask-ai')}
                  className="block bg-blue-600 text-white text-center px-5 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors mt-4 shadow-sm text-base"
                >
                  Ask AI Assistant
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
