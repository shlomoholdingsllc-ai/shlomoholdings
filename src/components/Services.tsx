import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    image: '/imgs/seo-service.png',
    icon: Search,
    title: 'SEO Marketing',
    description: 'Dominate search rankings with data-driven SEO strategies. Our proven methodology combines technical optimization, content excellence, and authoritative link building to deliver sustainable organic growth.',
    features: [
      'Technical SEO audits & optimization',
      'Keyword research & content strategy',
      'Link building & authority development',
      'Performance tracking & reporting',
    ],
  },
  {
    image: '/imgs/ai-marketing-service.png',
    icon: Sparkles,
    title: 'AI Marketing',
    description: 'Leverage artificial intelligence to automate campaigns, predict customer behavior, and optimize marketing ROI. Our AI-powered solutions deliver personalized experiences at scale.',
    features: [
      'Predictive analytics & customer insights',
      'Automated campaign optimization',
      'Personalization at scale',
      'AI-powered content generation',
    ],
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 100);
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Cutting-edge solutions for unprecedented growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`bg-white rounded-lg border border-neutral-200 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-102 transition-all duration-400 overflow-hidden ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transition: 'all 0.4s ease-out' }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute bottom-0 left-8 transform translate-y-1/2">
                    <div className="w-16 h-16 bg-primary-100 rounded-md flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                  </div>
                </div>

                <div className="p-12 pt-10">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-600">
                        <span className="text-primary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center text-base font-semibold text-primary-500 hover:text-primary-600 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
