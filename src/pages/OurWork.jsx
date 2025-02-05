import { motion } from "framer-motion";
import it from '../assets/img/design.png';  

const projects = [
  {
    name: "recotech.co",
    liveLink: "https://daarry.co",
    image: it, 
  },
  {
    name: "music School",
    liveLink: "https://coupledoor.com",
    image: it,
  },
  {
    name: "OutFable",
    liveLink: "https://outfable.com",
    image: it,
  },
  {
    name: "Slab Pro",
    liveLink: "https://slabpro.com",
    image: it,
  },
];

export default function OurWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    {/* Heading Section */}
    <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold">Projects</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
        A small selection 
        of our work.
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-xl overflow-hidden border border-gray-300 shadow-lg transition duration-300 bg-white"
    //   onClick={() => navigate(`/projects/${project.id}`)} 
    onClick={() => navigate(`/projects/${project.id}`)} 
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
      </div>
    </motion.div>
  );
}
