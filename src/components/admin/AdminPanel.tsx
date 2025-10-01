import { useState } from "react";
import { X, Download, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import aboutData from "@/data/about.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import awardsData from "@/data/awards.json";

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [about, setAbout] = useState(JSON.stringify(aboutData, null, 2));
  const [experience, setExperience] = useState(JSON.stringify(experienceData, null, 2));
  const [skills, setSkills] = useState(JSON.stringify(skillsData, null, 2));
  const [projects, setProjects] = useState(JSON.stringify(projectsData, null, 2));
  const [awards, setAwards] = useState(JSON.stringify(awardsData, null, 2));

  const handleExport = () => {
    const data = {
      about: JSON.parse(about),
      experience: JSON.parse(experience),
      skills: JSON.parse(skills),
      projects: JSON.parse(projects),
      awards: JSON.parse(awards),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-data.json";
    a.click();
    toast.success("Portfolio data exported!");
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target?.result as string);
            setAbout(JSON.stringify(data.about, null, 2));
            setExperience(JSON.stringify(data.experience, null, 2));
            setSkills(JSON.stringify(data.skills, null, 2));
            setProjects(JSON.stringify(data.projects, null, 2));
            setAwards(JSON.stringify(data.awards, null, 2));
            toast.success("Portfolio data imported!");
          } catch (error) {
            toast.error("Invalid JSON file");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleSave = () => {
    toast.info("In a production environment, this would save to your backend or local storage.");
    toast.success("Changes saved! (Demo mode)");
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-4 md:inset-8 bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <div className="flex gap-2">
            <Button onClick={handleImport} variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button onClick={handleExport} variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button onClick={handleSave} size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button onClick={onClose} variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="about" className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger value="about" className="rounded-none">About</TabsTrigger>
            <TabsTrigger value="experience" className="rounded-none">Experience</TabsTrigger>
            <TabsTrigger value="skills" className="rounded-none">Skills</TabsTrigger>
            <TabsTrigger value="projects" className="rounded-none">Projects</TabsTrigger>
            <TabsTrigger value="awards" className="rounded-none">Awards</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto p-4">
            <TabsContent value="about" className="mt-0">
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <Textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <Textarea
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <Textarea
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="awards" className="mt-0">
              <Textarea
                value={awards}
                onChange={(e) => setAwards(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
