const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              About Shlomo Holdings LLC
            </h2>
            <p className="text-lg md:text-xl text-neutral-600">
              Your trusted partner in digital transformation
            </p>
          </div>

          <div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
            <p>
              Shlomo Holdings LLC is a forward-thinking marketing agency specializing in SEO optimization and AI-powered marketing solutions. We combine cutting-edge technology with proven marketing strategies to help businesses thrive in the digital age.
            </p>
            <p>
              Our team of experts leverages advanced artificial intelligence and data analytics to create personalized marketing campaigns that deliver measurable results. We believe in transparency, innovation, and building long-term partnerships with our clients.
            </p>
            <p>
              Whether you're a startup looking to establish your online presence or an established business aiming to scale, we have the expertise and tools to help you achieve your goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-sm text-neutral-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-sm text-neutral-600">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">5+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
