import React from 'react';
import cloud from '../assets/img/cloud.png';
import webdev from '../assets/img/webdev.png';
import devlopment from '../assets/img/devlopment.png';
import it from '../assets/img/it.png';
import seo from '../assets/img/seo.png';
import graphicDesigner from '../assets/img/graphicDesigner.png';
import { motion } from "framer-motion";



function OurServices() {
  return (
    <div className="my-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          image={graphicDesigner}
          title="Graphic Designer"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
        <ServiceCard
          image={devlopment}
          title="Web Development"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
        <ServiceCard
          image={it}
          title="Content Writing"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
        <ServiceCard
          image={devlopment}
          title="Photography"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
        <ServiceCard
          image={seo}
          title="SEO Optimization"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
        <ServiceCard
          image={cloud}
          title="Cloud Services"
          description="Wanna grow organically, then SEO is the best choice for your business. We help you boost your search engine rankings and make your brand visible to your customers on search engines."
        />
      </div>
    </div>
  );
}

const ServiceCard = ({ image, title, description }) => (
  <div className="p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <img src={image} alt={title} className="w-20 h-20 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="underline border-b-2 border-transparent hover:text-red-700 transition-all"
      >
        Read More
      </a>
    </div>
  </div>
);

export default OurServices;
