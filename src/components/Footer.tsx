import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shlomo Holdings</h3>
            <p className="text-primary-100 text-sm leading-relaxed mb-4">
              SEO & AI Marketing Excellence
            </p>
            <div className="space-y-2 text-sm text-primary-100">
              <div>
                <a href="mailto:contact@shlomoholdingsservicesllc.com" className="hover:text-white transition-colors">
                  contact@shlomoholdingsservicesllc.com
                </a>
              </div>
              <div>
                <a href="tel:+19547437632" className="hover:text-white transition-colors">
                  954-743-7632
                </a>
              </div>
              <div className="leading-relaxed">
                609 North 46th Avenue<br />
                Hollywood, FL 33021
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-primary-100">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  AI Marketing
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Analytics & Insights
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-primary-100 text-sm mb-4">
              Stay updated with marketing insights
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/25 hover:scale-115 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/25 hover:scale-115 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/25 hover:scale-115 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/25 hover:scale-115 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-md text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700/50 pt-8">
          <p className="text-primary-100 text-xs text-center">
            &copy; {currentYear} Shlomo Holdings LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
