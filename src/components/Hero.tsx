const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-neutral-50 to-white pt-[72px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12 py-32 md:py-40 lg:py-48">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-4xl">
            Elevate Your Brand with
            <span className="text-primary-500"> AI-Powered Marketing</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
            Transform your digital presence with cutting-edge SEO strategies and artificial intelligence. We help businesses dominate their market through data-driven marketing solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary-500 text-white font-semibold text-base rounded-lg shadow-sm hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-card active:scale-98 transition-all duration-250 min-w-[200px]"
            >
              Get Started Today
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold text-base rounded-lg hover:bg-primary-50 transition-colors duration-250 min-w-[200px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
