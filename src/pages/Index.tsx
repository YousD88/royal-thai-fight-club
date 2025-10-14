import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coach from "@/components/Coach";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Coach />
      <Gallery />
      <Location />
      <SocialBar />
      <Footer />
    </div>
  );
};

export default Index;
