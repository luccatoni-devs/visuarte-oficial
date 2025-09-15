import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Benefits />
      <Process />
      <Pricing />
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;