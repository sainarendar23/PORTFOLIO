import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Cpu,
  FileCode,
  Wind,
  Bot,
  Search,
  Network,
  Braces,
  Github
} from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: FileCode, color: "text-portfolio-accent" },
    { name: "SQL", icon: Database, color: "text-portfolio-accent" },
    { name: "Spring Boot", icon: Server, color: "text-portfolio-accent" },
    { name: "React Js", icon: Code2, color: "text-portfolio-accent" },
    { name: "JS", icon: Braces, color: "text-portfolio-accent" },
    { name: "N8N", icon: Network, color: "text-portfolio-accent" },
    { name: "HTML", icon: Globe, color: "text-portfolio-accent" },
    { name: "Next JS", icon: Code2, color: "text-portfolio-accent" },
    { name: "Git", icon: Github, color: "text-portfolio-accent" },
    { name: "Tailwind CSS", icon: Wind, color: "text-portfolio-accent" },
    { name: "AI/ML", icon: Bot,Cpu, color: "text-portfolio-accent" },
    { name: "Postman", icon: Search, color: "text-portfolio-accent" },
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "DevOps", icon: "⚙️" },
    { name: "AI Automation", icon: "🔧" },
    { name: "AI + Website", icon: "🌐" },
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Text content */}
          <AnimatedSection animation="fade-right" className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-sm font-medium text-portfolio-accent mb-4 uppercase tracking-wider">
                My Skills
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-dark-brown">
                Let's Explore my <span className="text-portfolio-accent">Skills</span>
                <br />& <span className="text-portfolio-accent">Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Welcome to my skills showcase! I specialize in crafting visually 
                stunning websites, mastering in front-end development. With 
                expertise in UI/UX design, HTML/CSS, JavaScript, and CMS 
                development, I bring your digital visions to life with seamless 
                functionality and engaging user experiences.
              </p>
              <button className="bg-portfolio-accent text-white hover:bg-portfolio-dark-brown px-8 py-3 text-lg font-semibold rounded-full transition-colors">
                Learn More →
              </button>
            </div>
          </AnimatedSection>

          {/* Right side - Skills grid */}
          <AnimatedSection animation="fade-left" delay={200} className="lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <AnimatedSection
                    key={skill.name}
                    animation="scale-up"
                    delay={300 + index * 50}
                  >
                    <div
                      className="bg-portfolio-brown rounded-2xl p-6 text-center hover:bg-portfolio-dark-brown transition-all duration-300 group"
                    >
                      <div className="mb-4 flex justify-center">
                        <IconComponent 
                          size={40} 
                          className={`${skill.color} group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <h4 className="text-portfolio-cream font-semibold">
                        {skill.name}
                      </h4>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Interest Areas */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-16">
          <h3 className="text-2xl font-semibold text-portfolio-dark-brown mb-8 text-center">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <AnimatedSection
                key={interest.name}
                animation="scale-up"
                delay={600 + index * 100}
              >
                <div
                  className="bg-portfolio-brown border border-portfolio-accent hover:border-portfolio-dark-brown transition-all duration-300 rounded-lg p-6 text-center group hover:shadow-lg"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-portfolio-cream">
                    {interest.name}
                  </h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;