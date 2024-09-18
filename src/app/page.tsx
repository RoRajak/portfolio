import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="home" className="min-h-screen flex flex-col">
      <Navbar/>
      <Herosection/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
   
  );
}
