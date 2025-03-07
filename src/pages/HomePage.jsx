import AboutSection from "./AboutUsSection";
import WhyChooseUs from "./ChooseUs";
import PopularGoals from "./Components/PopularGoals";
import Testimonials from "./Components/TestimonialSection";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import OurWork from "./OurWork";
import { motion } from "framer-motion";


const HomePage = () => {
 
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      {/* <PopularGoals/> */}
      <OurWork />
      <Testimonials/>
      <ContactUs />
    </>
  );
};
export default HomePage;
