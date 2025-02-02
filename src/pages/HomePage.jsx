import AboutSection from './AboutUsSection'
import WhyChooseUs from './ChooseUs'
import ContactUs from './ContactUs'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import OurServices from './OurServices'


const HomePage = () => {
    return (
      <>
     
      <Navbar />
      

        <HeroSection />
        <AboutSection />
        <OurServices />
        <WhyChooseUs/>
        <ContactUs/>
        <Footer/>
    
      </>
    );
  }
  export default HomePage;