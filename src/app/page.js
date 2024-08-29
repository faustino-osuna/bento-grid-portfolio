import "./styles/layout.css";
import Hero from "./sections/Hero";
import Download from "./sections/Download";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="layout container mx-auto w-full h-full gap-6 text-white">
        <Hero />
        <Download />
        <Contact />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default App;
