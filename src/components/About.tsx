import { useEffect, useRef, useState } from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Staying ahead with AI and emerging technologies',
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Data-driven approach focused on ROI',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium service and attention to detail',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="/imgs/team-about.png"
              alt="Shlomo Holdings Team"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div
            className={`transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              About Shlomo Holdings LLC
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              We are a leading marketing agency specializing in SEO and AI-powered solutions. Since our founding, we've helped hundreds of businesses achieve unprecedented growth through innovative digital strategies.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Our mission is to empower businesses with cutting-edge marketing technology and data-driven strategies that deliver measurable results.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Core Values</h3>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{value.title}</div>
                      <div className="text-sm text-neutral-600">{value.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
