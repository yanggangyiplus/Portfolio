import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import aboutData from "@/data/about.json";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(aboutData.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">{aboutData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm">{aboutData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-sm">{aboutData.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                onClick={copyEmail}
                className="glass-button"
              >
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </Button>

              <Button
                asChild
                className="glass-button"
              >
                <a href={`mailto:${aboutData.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>

              {aboutData.social.kakao && (
                <Button
                  asChild
                  variant="outline"
                  className="glass-button"
                >
                  <a href={aboutData.social.kakao} target="_blank" rel="noopener noreferrer">
                    KakaoTalk
                  </a>
                </Button>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="glass-button"
              >
                <a href={aboutData.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="icon"
                variant="ghost"
                className="glass-button"
              >
                <a href={aboutData.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="icon"
                variant="ghost"
                className="glass-button"
              >
                <a href={aboutData.social.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} {aboutData.name}. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
