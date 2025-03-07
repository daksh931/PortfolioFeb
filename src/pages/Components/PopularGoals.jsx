"use client";
import { motion } from "framer-motion";
import "./MovingDivs.css"; // Import the CSS file
import  BorderBeam  from "./MagicUI/borderbeam";
import  BorderBeam1 from "./MagicUI/borderbeam";


const goals = [
  { id: 1, name: "React JS", logo: "🎯" },
  { id: 2, name: "Next JS", logo: "🩺" },
  { id: 3, name: "JAVA", logo: "📜" },
  { id: 4, name: "Springboot", logo: "📈" },
  { id: 5, name: "Node JS", logo: "⚙️" },
  { id: 6, name: "SSC", logo: "🏆" },
  { id: 7, name: "Bank Exams", logo: "💰" },
  { id: 8, name: "Railway Exams", logo: "🚆" },
];


const PopularGoals = () => {
  return (
    <section className="py-16 bg-gray-100 moving-container">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10 "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
           Tech stack's
        </h2>
        <p className="text-gray-600 mt-2">
         The tech stack's that we are using
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className=" gap-8 px-6 md:px-16 moving-track mb-5">
        {goals.map((goal , index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center
                      border border-black/10 rounded-lg p-20 
                      hover:shadow-lg hover:border-blue-200 hover:scale-105 
                      transition-all duration-300 "
          >
            <span className="text-5xl">{goal.logo}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{goal.name}</h3>
            <BorderBeam1  delay={index * 5} reverse={index % 2 === 0}  colorFrom="#000000" duration={10}
           colorTo = "#ffffff" />
          </motion.div>
        ))}
      </div>
      <div className=" gap-8 px-6 md:px-16 moving-track-right-left">
        {[...goals,...goals,...goals].map((goal,index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center
                      border border-black/10 rounded-lg p-20 
                      hover:shadow-lg hover:border-blue-200 hover:scale-105 
                      transition-all duration-300 "
          >
            <span className="text-5xl">{goal.logo}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{goal.name}</h3>
            <BorderBeam  delay={index * 5} reverse={index % 2 === 0}  colorFrom="#000000" duration={10}
           colorTo = "#ffffff" />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default PopularGoals;
