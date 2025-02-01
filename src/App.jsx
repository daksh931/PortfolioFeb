import './App.css'
<<<<<<< Updated upstream
import Herohome from './pages/Herohome'
import Navbar from './pages/Navbar'
import { Routes, Route } from "react-router-dom";
=======
import AboutSection from './pages/AboutUsSection'
import HeroSection from './pages/HeroSection'
import Navbar from './pages/Navbar'
import OurServices from './pages/OurServices'
>>>>>>> Stashed changes

function App() {

  return (
    <>

      <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/" element={<HeroSection />} />
      <Route path="/" element={<AboutSection />} />
      <Route path="/" element={<OurServices />} />

      </Routes>
    </>
  )
}

export default App
