import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import it from "../assets/img/design.png";
import recotech from "../assets/img/ProjectRecotech/Login.png";
import MusicSchool from "../assets/img/ProjectMusicSchool/Home.png";
import signoracucina from "../assets/img/ProjectSignoracucina/Home.png";

const projects = [
  {
    id: "recotech",
    name: "Recotech.co",
    image: recotech,
  },
  {
    id: "music-school",
    name: "Music School",
    image: MusicSchool,
  },
  {
    id: "signoracucina",
    name: "signoracucina-az",
    image: signoracucina,
  },

  {
    id: "visionClasses",
    name: "vision Classes",
    image: it,
  },
];

export default function OurWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 w-full overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <h1 className="text-2xl font-bold mt-4 ">
          Projects Handled Carefully and submitted to <br />
          Clients successfully.
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2.5 space-x-6.5 gap-6">
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
    <div className="space-y-3.5 mt-5">
      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: 4,
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",    
        }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl transition-transform duration-500"
        onClick={() => navigate(`/projects/${project.id}`)}
      >
        {/* Project Image */}
        <div className="relative group">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500"></div>

          {/* Floating Action Button */}
          <button className="absolute bottom-4 right-4 bg-red-700 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
            Explore →
          </button>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {project.name}
          </h2>
          <p className="text-sm text-gray-600">
            Dive deeper into the project and discover its unique features.
          </p>

          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-400 transition-all duration-500"></div>
        </div>
      </motion.div>
    </div>
  );
}
