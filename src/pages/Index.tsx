import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FloatingConnect from "@/components/FloatingConnect";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Blog />
      <Contact />
      <FloatingConnect />
    </main>
  );
};

export default Index;