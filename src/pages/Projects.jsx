"use client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import design from "../assets/img/design.png";
import tech1 from "../assets/img/tech/react.png";
import tech2 from "../assets/img/tech/vite.png";
import tech3 from "../assets/img/tech/java.png";
import tech4 from "../assets/img/tech/jenkins.png";
import tech5 from "../assets/img/tech/react.png";
import tech6 from "../assets/img/tech/tailwind.png";
import { Pointer, PointerIcon } from "lucide-react";

const projectData = {
  recotech: {
    title: "Recotech",
    description: "This is the Recotech project description...",
    image: design,
  },
  "music-school": {
    title: "Music School",
    description: "This is the Music School project description...",
    image: design,
  },
  outfable: {
    title: "OutFable",
    description: "This is the OutFable project description...",
    image: design,
  },
  slabpro: {
    title: "Slab Pro",
    description: "This is the Slab Pro project description...",
    image: design,
  },
};

export default function ProjectDetails() {
  
    const { projectId } = useParams();
    const project = projectData[projectId]; // Get project details from object
  
    if (!project) {
      return <h1 className="text-3xl text-center mt-10">Project Not Found</h1>;
    }
  const navigate = useNavigate();

  const features = [
    {
      title: "Feature 1",
      description:
        "This feature allows users to manage tasks efficiently, track progress, and collaborate seamlessly.",
      image: design,
    },
    {
      title: "Feature 2",
      description:
        "Advanced security features ensure that your data is protected at all times.",
      image: design,
    },
    {
      title: "Feature 3",
      description:
        "Seamless integration with multiple platforms for enhanced productivity.",
      image: design,
    },
  ];
  const testimonials = [
    {
      quote:
        "This product completely transformed our business! Highly recommend.",
      name: "John Doe",
    },
    {
      quote:
        "The team was very professional and delivered beyond expectations.",
      name: "Jane Smith",
    },
    {
      quote: "Excellent service and outstanding results. Would use again!",
      name: "Alex Brown",
    },
    {
      quote: "A truly game-changing experience! The best investment ever.",
      name: "Sarah Johnson",
    },
    {
      quote: "Fast, reliable, and top-notch quality. Absolutely fantastic.",
      name: "Michael Lee",
    },
  ];
  const techLogos = [tech1, tech2, tech3, tech4, tech5, tech6];

  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  return (
    <div className="px-6 lg:px-24 py-16">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 text-gray-500 text-sm">
        <span
          className="cursor-pointer text-blue-500 hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        // <span className="text-gray-700 font-semibold">Our Work</span>
      </div>
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-gray-900">
      {project.title}
      </h1>
      {/* Project Description & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
          {project.description}
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </motion.div>
      </div>
      {/* Features */}
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full max-w-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    {feature.description}
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    {feature.description}
                  </p>
                </motion.div>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full max-w-lg"
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Tech Stack - Auto Running Logos */}
      <div className="my-16 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Tech Stack Used
        </h2>

        <div className="relative flex items-center w-full">
          <motion.div
            className="flex space-x-12 min-w-max"
            animate={controls}
            initial={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            onMouseEnter={() => {
              setPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => {
              setPaused(false);
              controls.start({ x: ["0%", "-50%"] });
            }}
          >
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                {techLogos.map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo}
                    alt="Tech Logo"
                    className="opacity-70 w-24"
                    whileHover={{
                      scale: 1.1,
                      cursor: Pointer,
                      opacity: 1,
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Fade Effect at Ends */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>

      {/* Happy Clients */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
        <p className="text-lg text-gray-700 mt-2">
          Our customers love what we do! See their feedback below.
        </p>

        {/* Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700">"{client.quote}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">
                - {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
