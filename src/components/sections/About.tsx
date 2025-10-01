import aboutData from "@/data/about.json";

const About = () => {
  return (
    <section id="about" className="section-padding bg-accent/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Me
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            {aboutData.name} · {aboutData.tagline}
          </p>

          <div className="glass-card p-8 mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {aboutData.introduction}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {aboutData.kpis.map((kpi, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
