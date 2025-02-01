import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      ></div>

      {/* Hero Content */}
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-white p-8 bg-gradient-to-r from-blue-900 to-blue-600 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4">DIGITAL MARKETING AGENCY</h1>
          <p className="text-lg">
            Unlock Your Website's Full Potential with Tailored SEO Strategies – Rank Higher, Reach More Customers, and Achieve Lasting Success.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left md:pl-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Web Development Company </h2>
          <a
            href="#explore"
            className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Explore Now 
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
