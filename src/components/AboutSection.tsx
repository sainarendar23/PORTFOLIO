import { ExternalLink, Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const achievements = [
    {
      title: "GitHub Profile",
      description: "Open source contributions and projects",
      link: "https://github.com/sainarendar23",
      icon: Github,
    },
    {
      title: "LeetCode Profile", 
      description: "Problem solving and algorithm practice",
      link: "https://leetcode.com/u/sai_narendar",
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-darkbrown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-foreground">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-right" className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              What I Do
            </h3>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate software developer with expertise in full-stack development, 
              backend systems, and automation architecture. I love creating AI agents and 
              building scalable applications that solve real-world problems.
            </p>
            <p>
              I'm also the founder of Stomai, a company focused on delivering AI-powered agents and tailored automation solutions to help businesses streamline operations and boost efficiency.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="text-foreground/80">
                  <span className="text-foreground font-medium">Full-Stack Development:</span> Building 
                  end-to-end web applications with modern technologies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="text-foreground/80">
                  <span className="text-foreground font-medium">Backend Architecture:</span> Designing 
                  scalable and efficient server-side solutions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="text-foreground/80">
                  <span className="text-foreground font-medium">AI Integration:</span> Creating 
                  intelligent agents and automation systems
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="text-foreground/80">
                  <span className="text-foreground font-medium">Problem Solving:</span> Analytical 
                  approach to complex technical challenges
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Achievements */}
          <AnimatedSection animation="fade-left" delay={200} className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Achievements
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <AnimatedSection
                key={index}
                animation="scale-up"
                delay={300 + index * 100}
                >
                  <Card className="bg-card/50 border-portfolio-brown hover:border-foreground transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors">
                            <achievement.icon className="w-6 h-6 text-foreground" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-foreground">
                              {achievement.title}
                            </h4>
                            <p className="text-foreground/80">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(achievement.link, "_blank")}
                          className="hover:bg-foreground/10 hover:text-foreground"
                          >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;