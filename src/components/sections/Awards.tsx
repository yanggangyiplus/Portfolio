import { Award, GraduationCap, Trophy } from "lucide-react";
import awardsData from "@/data/awards.json";

const Awards = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "award":
        return <Trophy className="h-6 w-6" />;
      case "certification":
        return <Award className="h-6 w-6" />;
      case "course":
        return <GraduationCap className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "award":
        return "text-yellow-600 dark:text-yellow-500";
      case "certification":
        return "text-blue-600 dark:text-blue-500";
      case "course":
        return "text-green-600 dark:text-green-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="awards" className="section-padding bg-accent/20">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Awards & Certifications
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <div
              key={award.id}
              className="glass-card p-6 animate-fade-in hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${getColor(award.type)} mt-1`}>
                  {getIcon(award.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                  <p className="text-primary text-sm mb-2">{award.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3">{award.period}</p>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
