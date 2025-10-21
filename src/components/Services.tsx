import { Search, Brain, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search rankings with proven SEO strategies. We optimize your website to increase organic traffic and improve visibility on search engines.'
  },
  {
    icon: Brain,
    title: 'AI Marketing',
    description: 'Harness the power of artificial intelligence to automate and enhance your marketing campaigns. Smart targeting, personalized content, and predictive analytics.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategies',
    description: 'Develop comprehensive digital marketing strategies that drive real business growth. Data-driven insights to maximize ROI and scale your business.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm hover:shadow-cardHover hover:-translate-y-1 hover:scale-101 active:scale-99 transition-all duration-250 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
