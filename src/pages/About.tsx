const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-montserrat py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="font-semibold text-amber-800 text-3xl md:text-4xl lg:text-5xl mb-3">
            About Samurai Sushi
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 md:space-y-10">
          {/* Our Story */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md ">
            <h2 className="text-2xl md:text-3xl text-amber-800 font-semibold mb-4 md:mb-6">
              Our Story
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Founded in 2010, Samurai Sushi began as a small family-owned
                restaurant with a passion for authentic Japanese cuisine. Our
                master chef trained for over 15 years in Tokyo before bringing
                his expertise to create the perfect sushi experience.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Today, we pride ourselves on using only the freshest
                ingredients, sourced locally when possible, and imported from
                Japan when necessary to maintain the highest quality and
                authenticity in every dish we serve.
              </p>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md ">
            <h2 className="text-2xl md:text-3xl text-amber-800 font-semibold mb-4 md:mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At Samurai Sushi, we believe that great food comes from great
                ingredients and careful preparation. Each dish is crafted with
                precision and respect for traditional techniques, while also
                embracing innovation.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We are committed to sustainability in our seafood sourcing and
                eco-friendly practices in our restaurant operations, ensuring
                that we can continue to share our love of sushi for generations
                to come.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md ">
            <h2 className="text-2xl md:text-3xl text-amber-800 font-semibold mb-4 md:mb-6">
              Our Team
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our team of chefs and staff are not just employees – they're
                family. Many have been with us since we opened our doors,
                growing alongside our restaurant and perfecting their craft.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                From our sushi chefs who train for years to master their knife
                skills, to our friendly servers who ensure your dining
                experience is exceptional, everyone at Samurai Sushi is
                passionate about providing you with an unforgettable meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
