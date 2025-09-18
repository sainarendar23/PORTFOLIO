import { ExternalLink, Github, Globe, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import aiAgentsImage from "/assets/ai-agents-website.png";
import LinkImage from "/assets/linkedin_post.png";
import CsImage from "/assets/customersupport.png"

const ProjectsSection = () => {
  const projects = [
     {
      category:"web",
      title: "AI Agents Selling Website",
      description: "A full-stack project for selling AI agents with modern e-commerce features, user authentication, and payment integration. Built with React for the frontend and Node.js for the backend, featuring Stripe payment processing and MongoDB for data storage.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      liveDemo: "https://stomagent.netlify.app/",
      github: "https://github.com/sainarendar23/agents-website",
      icon :Bot,
      featured: true
    }, {
    title: "Customer Support Agents",
    description: "AI-powered customer support system with RAG (Retrieval-Augmented Generation) for accurate responses based on company knowledge base. Automated ticket routing and intelligent response generation.",
    category: "Automation",
    tech: ["MCP Server", "RAG System", "N8n", "Python"],
    liveDemo: "",
    github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/customer_support_agent.json",
    icon: Bot,
    featured: false
  }, {
    title: "LinkedIn Post Agent",
    description: "Automated LinkedIn content creation and posting system that generates engaging posts, schedules content, and analyzes performance metrics for optimal social media presence.",
    category: "Automation",
    tech: ["N8n", "LinkedIn API", "OpenAI", "NLP"],
    liveDemo: "",
    github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/linkedin_post_automation_agent.json",
    icon: Bot,
    featured: false
  }];
  return <section id="projects" className="py-20 bg-portfolio-dark-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-left" className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-cream">
            Explore My Popular <span className="text-portfolio-accent">Projects</span>
          </h2>
          <p className="text-portfolio-cream/70 text-lg max-w-2xl mx-auto">
            Discover some of my most impactful work, showcasing modern web development, 
            AI integration, and user-centered design principles.
          </p>
        </AnimatedSection>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
          const IconComponent = project.icon;
          const isEven = index % 2 === 0;
          const animationType = isEven ? "fade-right" : "fade-left";
          
          return <AnimatedSection 
            key={project.title} 
            animation="fade-right"
            delay={index * 200}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
          >
                {/* Project Image/Icon */}
                <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                  <Link to="/projects" className="block">
                    {project.title === "AI Agents Selling Website" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500 cursor-pointer hover:scale-105 transform">
                        <img 
                          src={aiAgentsImage} 
                          alt="AI Personal Assistant Screenshot"
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-portfolio-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-portfolio-cream font-medium bg-portfolio-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            View in All Projects →
                          </span>
                        </div>
                      </div>
                    ) :project.title === "LinkedIn Post Agent" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500 cursor-pointer hover:scale-105 transform">
                        <img 
                          src={LinkImage} 
                          alt="linked agent"
                        />
                        <div className="absolute inset-0 bg-portfolio-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-portfolio-cream font-medium bg-portfolio-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            View in All Projects →
                          </span>
                        </div>
                      </div>
                    ): project.title === "Customer Support Agents" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500 cursor-pointer hover:scale-105 transform">
                        <img 
                          src={CsImage} 
                          alt="linked agent"
                        />
                        <div className="absolute inset-0 bg-portfolio-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-portfolio-cream font-medium bg-portfolio-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            View in All Projects →
                          </span>
                        </div>
                      </div>
                    ):
                    
                    (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-16 flex items-center justify-center backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500 cursor-pointer hover:scale-105 transform">
                        <div className="w-32 h-32 bg-portfolio-accent/20 rounded-3xl flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-all duration-300">
                          <IconComponent className="w-16 h-16 text-portfolio-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute inset-0 bg-portfolio-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-portfolio-cream font-medium bg-portfolio-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                            View in All Projects →
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Project Content */}
                <div className={`space-y-8 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <div className="text-portfolio-text font-medium text-sm uppercase tracking-wider mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-portfolio-cream mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-portfolio-cream/70 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm uppercase tracking-wider text-amber-900">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(tech => <span key={tech} className="px-4 py-2 bg-portfolio-accent/10 text-sm font-medium rounded-full border border-portfolio-accent/30 hover:bg-portfolio-accent/20 transition-colors text-amber-800">
                          {tech}
                        </span>)}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.liveDemo && <Button variant="default" onClick={() => window.open(project.liveDemo, "_blank")} className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-portfolio-dark-brown font-semibold px-6 py-3 group">
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        View Live Demo
                      </Button>}
                    
                    {project.github && <Button variant="outline" onClick={() => window.open(project.github, "_blank")} className="border-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-dark-brown font-semibold px-6 py-3 group text-amber-950">
                        <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Code
                      </Button>}
                  </div>
                </div>
              </AnimatedSection>;
        })}
        </div>

        {/* Explore All Projects Button */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-32">
          <Link to="/projects">
            <Button size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-portfolio-dark-brown font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-portfolio-accent/30">
              Explore All Projects
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <p className="text-portfolio-cream/60 text-sm mt-4">
            View my complete portfolio of {projects.length + 1}+ projects
          </p>
        </AnimatedSection>
      </div>
    </section>;
};
export default ProjectsSection;