import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import it from "../assets/img/design.png";

const projects = [
  {
    id: "recotech",
    name: "Recotech.co",
    // liveLink: "/projects/recotech",
    image: it,
  },
  {
    id: "music-school",
    name: "Music School",
    // liveLink: "/projects/music-school",
    image: it,
  },
  {
    id: "outfable",
    name: "OutFable",
    // liveLink: "/projects/outfable",
    image: it,
  },
  {
    id: "slabpro",
    name: "Slab Pro",
    // liveLink: "/projects/slabpro",
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
          A small selection of our work.
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-xl overflow-hidden border border-gray-300 shadow-lg transition duration-300 bg-white"
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
