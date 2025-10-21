const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shlomo Holdings LLC</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              Leading the future of digital marketing with AI-powered solutions and proven SEO strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-100 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <a
                  href="mailto:contact@shlomoholdings.com"
                  className="hover:text-white transition-colors"
                >
                  contact@shlomoholdings.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19547437632"
                  className="hover:text-white transition-colors"
                >
                  954-743-7632
                </a>
              </li>
              <li className="leading-relaxed">
                609 North 46th Avenue<br />
                Hollywood, FL 33021
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-8 text-center">
          <p className="text-primary-100 text-sm">
            &copy; {currentYear} Shlomo Holdings LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
