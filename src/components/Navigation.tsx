import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-neutral-900">
          Shlomo Holdings
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-card transition-all duration-250"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-base text-neutral-600 hover:text-primary-500 transition-colors duration-250"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg shadow-sm hover:bg-primary-700 transition-colors duration-250"
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
