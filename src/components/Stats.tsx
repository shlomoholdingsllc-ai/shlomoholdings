import { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, CheckCircle, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  number: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Users, number: 500, suffix: '+', label: 'Happy Clients' },
  { icon: TrendingUp, number: 95, suffix: '%', label: 'Success Rate' },
  { icon: CheckCircle, number: 2000, suffix: '+', label: 'Projects Completed' },
  { icon: Award, number: 15, suffix: '', label: 'Years Experience' },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.round(increment * currentStep), stat.number);
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-subtle"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-primary-500" />
                </div>
                <div
                  className="text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-primary bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-lg font-medium text-neutral-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
