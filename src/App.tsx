
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/Testimonials/ContactForm";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";



function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
     <ContactForm/>
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}

export default App;