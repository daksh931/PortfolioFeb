import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurWork from "./pages/OurWork";
import ProjectDetails from "./pages/Projects";
import AboutSection from "./pages/AboutUsSection";
import Navbar from "./pages/Navbar";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<OurWork />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/contact" element={<ContactUs />} />

    </Routes>
  );
}

export default App;
