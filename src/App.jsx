import './App.css'

import { Routes, Route } from "react-router-dom";

import AboutSection from './pages/AboutUsSection'
import HeroSection from './pages/HeroSection'
import Navbar from './pages/Navbar'
import OurServices from './pages/OurServices'

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurServices />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}


export default App
