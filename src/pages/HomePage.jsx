import AboutSection from './pages/AboutUsSection'
import HeroSection from './pages/HeroSection'
import Navbar from './pages/Navbar'
import OurServices from './pages/OurServices'


const HomePage = () => {
    return (
      <>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <OurServices />
      </>
    );
  }
  export default HomePage;