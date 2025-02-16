import React, { useEffect } from "react";
import TagCloud from "tagcloud-js";

const SkillSphere = () => {
  useEffect(() => {
    const container = ".tagcloud"; // Target the container
    const texts = [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Git",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "PostgreSQL",
      "Figma",
      "Linux",
      "Express.js",
      "Java",
    ];

    const options = {
      radius: 200, // Adjusts sphere size
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true, // Keeps rotating even when mouse leaves
    };

    // Check if TagCloud is already initialized to prevent duplicate instances
    if (!document.querySelector(".tagcloud span")) {
      TagCloud(container, texts, options);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212]">
      <h1 className="text-blue-500 text-4xl font-bold mb-8">Skills</h1>
      <div className="tagcloud text-white text-xl"></div>
    </div>
  );
};

export default SkillSphere;
