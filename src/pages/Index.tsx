import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import AdminPanel from "@/components/admin/AdminPanel";

const Index = () => {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleLogoClick = () => {
    setLogoClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowAdmin(true);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className="relative">
      <Navigation onLogoClick={handleLogoClick} logoClickCount={logoClickCount} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>

      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </div>
  );
};

export default Index;
