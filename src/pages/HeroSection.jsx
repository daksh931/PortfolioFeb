import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../assets/img/heroImg1.png";
import webdev from "../assets/img/webdev.png";
import design from "../assets/img/design.png";
import admin from "../assets/img/admin.png";

const contentData = [
  {
    image: heroImg1,
    title: "Best Web Development Company",
    description: "We create high-performing websites that boost your online presence.",
  },
  {
    image: webdev,
    title: "Transform Your Digital Experience",
    description: "Our cutting-edge solutions help your business grow in the digital era.",
  },
  {
    image: admin,
    title: "Custom Web Solutions for You",
    description: "We build tailored websites that match your unique business needs.",
  },
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-12 space-y-8 md:space-y-0 md:space-x-8 w-full overflow-hidden  ">
      {/* Left Side Image (Comes from Left) */}
      <motion.div
        key={contentData[index].image}
        className="flex justify-center w-full md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        
      >
        <img src={contentData[index].image} alt="Illustration" className="w-full max-w-lg" />
      </motion.div>

      {/* Right Side Content (Comes from Right) */}
      <motion.div
        key={contentData[index].title}
        className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:pl-12"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl text-center sm:text-4xl font-bold text-gray-900 mb-4">{contentData[index].title}</h2>
        <p className="text-lg text-center sm:text-xl text-gray-700 mb-4">{contentData[index].description}</p>
        <a
          href="#explore"
          className="px-6 py-3 bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          Explore Now
        </a>
      </motion.div>
    </div>
  );
}

export default HeroSection;
