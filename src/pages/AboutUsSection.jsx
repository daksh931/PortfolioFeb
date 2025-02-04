import { Check, CheckCheckIcon, CheckCircle } from "lucide-react";
import React, { useRef } from "react";
import about from "../assets/img/about.png";
import admin from "../assets/img/admin.png";
import { motion } from "framer-motion";

const AboutSection = () => {

  return (
    <section className="bg-white py-16 px-8">
      <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-orange-500 font-semibold">About Us</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Why should you hire Techiee for your digital solutions?
          </h1>
          <div className="mt-6 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div>
                  <CheckCircle size={24} color="orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <motion.img
            src={admin}
            alt="Illustration"
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 100 }} // Starts outside the screen
            whileInView={{ opacity: 1, x: 0 }} // Moves into view
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        
          />
        </div>
      </motion.div>
    </section>
  );
};

const features = [
  {
    title: "Get Complete solutions under one roof",
    description:
      "Techiee helps you to provide complete solutions under one roof like Website Development, Hybrid App, SEO, Graphic design, IT Consultancy.",
  },
  {
    title: "Provides Quality Work",
    description:
      "Techiee helps you to Our experienced team’s main goal is to provide you the Quality Work in less time.",
  },
  {
    title: "Experienced Team",
    description:
      "We have an experienced team who know how to serve the work with accuracy.",
  },
  {
    title: "Market competitive rates",
    description:
      "Techiee offers affordable customized packages that cater to your needs.",
  },
];

export default AboutSection;
