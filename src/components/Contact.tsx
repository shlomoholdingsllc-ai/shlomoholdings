import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!formData.message) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@shlomoholdings.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            Ready to transform your digital presence? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Email</div>
                    <a
                      href="mailto:contact@shlomoholdings.com"
                      className="text-neutral-600 hover:text-primary-500 transition-colors"
                    >
                      contact@shlomoholdings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Phone</div>
                    <a
                      href="tel:+19547437632"
                      className="text-neutral-600 hover:text-primary-500 transition-colors"
                    >
                      954-743-7632
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Address</div>
                    <div className="text-neutral-600">
                      609 North 46th Avenue<br />
                      Hollywood, FL 33021
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Business Hours</h4>
              <div className="text-neutral-600 space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-card">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">Thank you! Your message has been sent.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  className={`w-full h-12 px-4 bg-white border-2 rounded-lg text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all ${
                    errors.name ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  className={`w-full h-12 px-4 bg-white border-2 rounded-lg text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all ${
                    errors.email ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onBlur={(e) => handleBlur('phone', e.target.value)}
                  className={`w-full h-12 px-4 bg-white border-2 rounded-lg text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg text-base text-neutral-800 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full md:w-auto min-w-[200px] px-8 py-3 bg-primary-500 text-white font-semibold text-base rounded-lg shadow-sm hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-card active:scale-98 transition-all duration-250"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
