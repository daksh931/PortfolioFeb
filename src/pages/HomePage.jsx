import AboutSection from "./AboutUsSection";
import WhyChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import OurServices from "./OurServices";
import { motion, useScroll } from "framer-motion";
import OurWork from "./OurWork";


const HomePage = () => {
  const scrollYProgress = useScroll().scrollYProgress;
    return (
      <>
   

      <Navbar />
      <motion.div className="bg-orange-500/60 h-1 sticky top-17 z-10 origin-left rounded-xl" style={{scaleX:scrollYProgress}}>

      </motion.div>
     
     
        <HeroSection />

        <AboutSection />
        <OurServices />
        <WhyChooseUs/>
        <OurWork/>
        <ContactUs/>
        <Footer/>
   
      </>
    );
  }
  export default HomePage;
