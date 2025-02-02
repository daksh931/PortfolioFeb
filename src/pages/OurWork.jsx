import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router
import heroImg1 from "../assets/img/heroImg1.png";
import webdev from "../assets/img/webdev.png";
import design from "../assets/img/design.png";
import admin from "../assets/img/admin.png";

const projects = [
  {
    name: "Recotech",
    description: "A waste recycling management platform for Oman.",
    liveLink: "https://recotech.com",
    images: [heroImg1, webdev, design],
  },
  {
    name: "FoodieHub",
    description: "An online food ordering and delivery platform.",
    liveLink: "https://foodiehub.com",
    images: [admin, heroImg1, webdev],
  },
  {
    name: "TaskMaster",
    description: "A productivity and task management app.",
    liveLink: "https://taskmaster.com",
    images: [design, admin, heroImg1],
  },
  {
    name: "ShopEase",
    description: "An AI-powered e-commerce platform.",
    liveLink: "https://shopease.com",
    images: [webdev, design, heroImg1],
  },
];

export default function OurWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          🚀 Our Work
        </h1>
        <nav className="text-gray-500 dark:text-gray-400 text-sm">
          <Link to="/" className="hover:text-orange-500">Home</Link> / <span className="text-orange-500">Our Work</span>
        </nav>
      </motion.div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

// Project Card with Auto-Sliding Images
function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Auto-Sliding Images */}
      <div className="relative w-full h-48 overflow-hidden">
        {project.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={project.name}
            className={`absolute w-full h-full object-cover transition-opacity ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-orange-600"
        >
          🚀 Live Preview
        </a>
      </div>
    </motion.div>
  );
}
