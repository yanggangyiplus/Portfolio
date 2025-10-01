import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden glass-card p-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt={aboutData.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {aboutData.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {aboutData.tagline}
          </p>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="glass-button group"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
