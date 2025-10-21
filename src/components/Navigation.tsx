import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-glass shadow-md border-b border-neutral-200/30'
          : 'bg-white/25 backdrop-blur-glass border-b border-white/30'
      }`}
      style={{ backdropFilter: 'saturate(180%) blur(16px)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-[80px] flex items-center justify-between">
        <div className="text-2xl font-bold text-neutral-900">
          Shlomo Holdings
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-glass border-t border-neutral-200/30 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-base font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-primary text-white font-semibold rounded-md shadow-lg transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
