import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import it from "../assets/img/design.png";
import recotech from '../assets/img/ProjectRecotech/Login.png';
import MusicSchool from '../assets/img/ProjectMusicSchool/Home.png';
import signoracucina from '../assets/img/ProjectSignoracucina/Home.png';



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
    id: "slabpro",
    name: "Slab Pro",
    image: it,
  },
  {
    id: "visionClasses",
    name: "vision Classes",
    image: it,
  },
];

export default function OurWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <h1 className="text-2xl font-bold mt-4 ">
          Projects Handled Carefully and  submitted to <br/>Clients successfully.
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
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-xl  overflow-hidden border border-gray-300 shadow-lg transition duration-300 bg-white"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-center  rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
      </div>
    </motion.div>
    </div>

  );
}
