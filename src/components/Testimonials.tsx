import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Shlomo Holdings transformed our online presence. Their SEO expertise increased our organic traffic by 300% in just 6 months. The ROI has been incredible.",
    author: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The AI marketing automation they implemented saved us countless hours while improving our conversion rates by 45%. Truly a game-changer for our business.",
    author: "Michael Chen",
    title: "Marketing Director, GrowthCo",
    rating: 5,
  },
  {
    quote: "Professional, results-driven, and always ahead of the curve. Shlomo Holdings doesn't just meet expectations—they exceed them consistently.",
    author: "Emily Rodriguez",
    title: "Founder, Digital Innovations",
    rating: 5,
  },
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
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
    <section className="py-24 md:py-32 bg-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            Success stories from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white p-12 rounded-lg shadow-md border-l-4 border-primary-500 relative ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transition: 'all 0.4s ease-out' }}
            >
              <Quote className="w-10 h-10 text-primary-100 mb-4" />
              <p className="text-lg text-neutral-800 leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <div className="font-semibold text-base text-neutral-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-600 mb-3">
                  {testimonial.title}
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
