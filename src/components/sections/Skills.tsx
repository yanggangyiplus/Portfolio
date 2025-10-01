import skillsData from "@/data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-accent/20">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillsData.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
