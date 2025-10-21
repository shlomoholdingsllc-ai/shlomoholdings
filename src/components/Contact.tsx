import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[\d\s()+-]+$/;
    return phone.length >= 10 && re.test(phone);
  };

  const handleBlur = (field: string, value: string) => {
    const newErrors = { ...errors };
    
    if (field === 'email' && value && !validateEmail(value)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (field === 'email') {
      delete newErrors.email;
    }
    
    if (field === 'phone' && value && !validatePhone(value)) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (field === 'phone') {
      delete newErrors.phone;
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const subject = encodeURIComponent(`Contact Form: ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@shlomoholdings.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/contact-background.png')`,
          transform: `translateY(${(scrollY - 3000) * 0.6}px)`,
        }}
      />
      <div className="absolute inset-0 bg-neutral-800/60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Ready to transform your digital presence? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className="bg-white/25 backdrop-blur-glass rounded-xl p-8 md:p-12 border border-white/40 shadow-2xl"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50/90 backdrop-blur-sm border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">Thank you! Your message has been sent.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={(e) => handleBlur('name', e.target.value)}
                    className={`w-full h-14 px-4 bg-white/90 backdrop-blur-sm border-2 rounded-md text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all ${
                      errors.name ? 'border-red-500' : 'border-neutral-200'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-200">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                    className={`w-full h-14 px-4 bg-white/90 backdrop-blur-sm border-2 rounded-md text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all ${
                      errors.email ? 'border-red-500' : 'border-neutral-200'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-200">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onBlur={(e) => handleBlur('phone', e.target.value)}
                  className={`w-full h-14 px-4 bg-white/90 backdrop-blur-sm border-2 rounded-md text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="954-743-7632"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-200">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-14 px-4 bg-white/90 backdrop-blur-sm border-2 border-neutral-200 rounded-md text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="SEO Marketing">SEO Marketing</option>
                  <option value="AI Marketing">AI Marketing</option>
                  <option value="Both Services">Both Services</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 rounded-md text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-200">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary text-white font-semibold text-base rounded-md shadow-lg hover:scale-102 hover:shadow-xl hover:brightness-110 active:scale-98 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/25 backdrop-blur-glass p-8 rounded-xl border border-white/40 shadow-lg" style={{ backdropFilter: 'blur(16px)' }}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <a
                      href="mailto:contact@shlomoholdings.com"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      contact@shlomoholdings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <a
                      href="tel:+19547437632"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      954-743-7632
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Address</div>
                    <div className="text-white/80">
                      609 North 46th Avenue<br />
                      Hollywood, FL 33021
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/25 backdrop-blur-glass p-8 rounded-xl border border-white/40 shadow-lg" style={{ backdropFilter: 'blur(16px)' }}>
              <h4 className="font-semibold text-white mb-3">Business Hours</h4>
              <div className="text-white/80 space-y-1 text-sm">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
