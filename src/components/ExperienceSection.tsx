import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
const ExperienceSection = () => {
  const experiences = [{
    title: " Founder & Automation Architect ",
    company: "Stomai",
    location: "Remote",
    duration: "2025 - Present",
    description: ["Created automated testing frameworks and CI/CD pipelines", "Developed process automation tools and scripts", "Created AI agents and automation systems for various clients", "Streamlined deployment processes and infrastructure"],
    technologies: ["N8N", "RAG", "Docker", "AWS", "MCP Server","Vector DB"]
  },{
    title: "Software Developer",
    company: "College",
    location: "College",
    duration: "2023-2024",
    description: ["Designed and implemented scalable backend architectures", "Developed RESTful APIs and microservices", "Worked with databases and cloud deployment", "Optimized application performance and security"],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git","AWS","Microservices"]
  },{
    title: "Fullstack Developer",
    company: "College",
    location: "College",
    duration: "2022 - 2023",
    description: ["Developed full-stack web applications using modern technologies", "Built responsive websites and platforms with payment integrations", "Implemented backend APIs and database management systems"],
    technologies: ["React", "Node.js", "SpringBoot","SQL","HTML","CSS","Java Script"]
  }];
  return <section id="experience" className="py-20 bg-portfolio-darkbrown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-foreground">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the experience I've gained along the way
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 200}
              >
                <Card className="bg-portfolio-background border-portfolio-brown hover:border-foreground transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground transition-colors mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4 text-foreground" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-foreground" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-foreground font-medium">
                          <Calendar className="w-4 h-4" />
                          <span className="text-foreground">{experience.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, idx) => <li key={idx} className="flex items-start space-x-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>)}
                      </ul>

                      <div className="pt-4 border-t border-portfolio-brown/30">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-foreground/10 text-foreground text-sm rounded-full border border-foreground/20">
                              {tech}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;
