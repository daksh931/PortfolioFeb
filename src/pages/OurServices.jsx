import React from 'react';

function OurServices() {
  return (
    <div className="my-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
        //   icon={<FaGraphicDesign size={40} />}
          title="Graphic Designer"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
        <ServiceCard
        //   icon={<FaCode size={40} />}
          title="Web Development"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
        <ServiceCard
        //   icon={<FaPenNib size={40} />}
          title="Content Writing"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
        <ServiceCard
        //   icon={<FaCamera size={40} />}
          title="Photography"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
        <ServiceCard
        //   icon={<FaSearch size={40} />}
          title="SEO Optimization"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
        <ServiceCard
        //   icon={<FaCloud size={40} />}
          title="Cloud Services"
          description="Wanna grow organically, then SEO is the best choice for your business.We help you to boost your search engine rankings and make your brand visible to your customers on search engines"
        />
      </div>
    </div>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="underline border-b-2 border-transparent hover:border-blue-500 hover:text-orange-500 transition-all"
      >
        Read More
      </a>
    </div>
  </div>
);

export default OurServices;
