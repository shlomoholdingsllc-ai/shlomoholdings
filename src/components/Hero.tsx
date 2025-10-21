import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '700px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/hero-background.png')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-32 text-center">
        <div className="inline-block px-6 py-2 bg-primary-100/90 backdrop-blur-sm rounded-full mb-6">
          <span className="text-sm font-semibold text-primary-900">SEO & AI Marketing Excellence</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6 animate-fade-in-up">
          Transform Your Business
          <br />
          with Cutting-Edge Marketing
        </h1>

        <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Harness the power of AI and SEO to dominate your market and drive unprecedented growth
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={scrollToContact}
            className="px-12 py-4 bg-gradient-primary text-white font-semibold text-base rounded-md shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-110 active:scale-98 transition-all duration-300 min-w-[240px]"
          >
            Get Free Consultation
          </button>
          <button
            onClick={scrollToServices}
            className="px-12 py-4 border-2 border-white text-white font-semibold text-base rounded-md hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[240px]"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
