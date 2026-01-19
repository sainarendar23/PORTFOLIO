import { useState, useEffect } from "react";
import { ExternalLink, Github, Code2, Smartphone, Globe, Database, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
const AllProjects = () => {
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getProjectIcon = (category: string) => {
    switch (category) {
      case "automation":
        return Bot;
      case "web":
        return Globe;
      case "mobile":
        return Smartphone;
      case "backend":
        return Database;
      case "AI/ML":
        return Bot;
      default:
        return Code2;
    }
  };
  const projects = [
    // Original Projects
    
    {
     title: "Company Website",
     description: "A full-stack project for selling AI agents with modern e-commerce features, user authentication, and payment integration. Built with React for the frontend and Node.js for the backend, featuring Stripe payment processing and MongoDB for data storage.",
     tech: ["tailwind", "react js","open icons","RAG chat bot","Type Script"],
     liveDemo: "https://stomai.netlify.app/",
     github: "https://github.com/sainarendar23/stom-ai-website",
     category: "web",
     featured: true
   },
    {
      title: "AI Agents Selling Website",
      description: "A full-stack project for selling AI agents with modern e-commerce features, user authentication, and payment integration. Built with React for the frontend and Node.js,sprong boot for the backend, featuring Stripe payment processing and MongoDB for data storage.",
      tech: ["tailwind","Type Script", "react js", "springboot","jwt","payment Gateway","Microservice"],
      liveDemo: "https://stomagent.netlify.app/",
      github: "https://github.com/sainarendar23/agents-website",
      category: "web",
      featured: true
    },
     {
      title: "Food Ordering Website",
      description: "Modern food ordering platform with responsive design, real-time order tracking, and seamless user experience. Features include dynamic menu display, cart management, and order history tracking with local storage integration.",
      tech: ["React", "CSS3", "JavaScript", "Local Storage","Redux"],
      liveDemo: "https://sainarendar23.github.io/food-ordering-website-frontend/",
      github: "https://github.com/sainarendar23/food-ordering-website-frontend",
      category: "web",
      featured: true
    }, {
      title: "Stock Price Prediction ML",
      description: "Machine learning project with UI interface for predicting stock prices using advanced algorithms and data analysis. Implements various ML models including LSTM and ARIMA for accurate stock price forecasting with real-time data processing.",
      tech: ["Python", "TensorFlow", "Flask", "Pandas", "Scikit-learn", "Matplotlib"],
      liveDemo: "",
      github: "https://github.com/sainarendar23/stock_prediction",
      category: "AI/ML",
      featured: false
    }, {
      title: "Hostel Management System",
      description: "Backend project for maintaining hostel details, student records, and administrative functions with robust database design. Features include room allocation, fee management, student check-in/check-out, and comprehensive reporting system.",
      tech: ["Java", "Spring Boot", "MySQL", "RESTFULL API", "JPA", "Security","Microservices"],
      liveDemo: "",
      github: "",
      category: "backend",
      featured: false
    }, {
      title: "AirJio - Mobile Recharge App",
      description: "Full-stack mobile recharge application with payment gateway integration and real-time transaction processing. Built with React Native for cross-platform compatibility and Node.js backend with MongoDB for user management.",
      tech: ["Vite", "swagger", "MongoDB", "Payment Gateway", "Redux"],
      liveDemo: "https://sainarendar23.github.io/Mobile-Recharge-Appilication-prototype/",
      github: "https://github.com/sainarendar23/AirJio-Frontend",
      category: "mobile",
      featured: false
    },
     {
      title: "Frontend project",
      description: "first frontend project using html and css only",
      tech: ["Html","css"],
      liveDemo: "https://sainarendar23.github.io/HTML-CSS/",
      github: "https://github.com/sainarendar23/HTML-CSS",
      category: "web",
      featured: false
    },

    // Automation Projects
    {
      title: "AI Personal Assistant",
      description: "An intelligent personal assistant powered by advanced AI that helps automate daily tasks, schedule management, and provides personalized recommendations. Features natural language processing and seamless integration with various productivity tools.",
      tech: ["n8n", "OpenAI API", "FastAPI", "elevenlabs ai", "NLP"],
      liveDemo: "",
      github: "",
      category: "automation",
      featured: true
    }, {
      title: "AI Receptionist",
      description: "Automated receptionist system that handles visitor management, appointment scheduling, and customer inquiries using conversational AI. Integrates with existing business workflows through n8n automation and MCP protocols.",
      tech: ["n8n", "JavaScript", "MCP", "gmail", "Conversational AI"],
      liveDemo: "",
      github: "",
      category: "automation",
      featured: true
    }, {
      title: "Customer Support Agents",
      description: "AI-powered customer support system with RAG (Retrieval-Augmented Generation) for accurate responses based on company knowledge base. Automated ticket routing and intelligent response generation.",
      tech: ["MCP Server", "RAG System", "n8n", "pinecone db", "Vector DB"],
      liveDemo: "",
      github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/customer_support_agent.json",
      category: "automation",
      featured: true
    }, {
      title: "LinkedIn Post Agent",
      description: "Automated LinkedIn content creation and posting system that generates engaging posts, schedules content, and analyzes performance metrics for optimal social media presence.",
      tech: ["n8n", "LinkedIn API", "OpenAI", "Scheduler", "Analytics"],
      liveDemo: "",
      github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/linkedin_post_automation_agent.json",
      category: "automation",
      featured: false
    }, {
      title: "Finding Lead",
      description:"An automated AI agent that identifies high-quality leads on LinkedIn, sends personalized outreach messages, and tracks engagement.It streamlines prospecting and optimizes lead conversion through continuous learning and performance analytics.",
      tech: ["n8n", " apify API", "gmail api", "OpenAI", "Scheduler", "Analytics"],
      liveDemo: "",
      github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/finding_lead_sanitized.json",
      category: "automation",
      featured: false
    }, {
      title: "AI-powered ad creative generation.",
      description:"Built an automation workflow that generates ad creatives using Airtable for campaign data, OpenAI for content creation, and Google Drive for storing outputs. An integrated extractor organizes the results, making it easy to review and deploy ad assets efficiently",
      tech: ["n8n", " apify API", "drive api", "OpenAI", "Analytics","airtable"],
      liveDemo: "",
      github: "https://github.com/sainarendar23/Ai-Agents-Automation-/blob/main/AI_powered_ad_creative_generation_.json",
      category: "automation",
      featured: false
    }

  ];
  const categories = [{
    id: "all",
    label: "All Projects"
  }, {
    id: "automation", 
    label: "Automation"
  }, {
    id: "web",
    label: "Web Development"
  }, {
    id: "mobile",
    label: "Mobile Apps"
  }, {
    id: "backend",
    label: "Backend"
  }, {
    id: "AI/ML",
    label: "AI/ML"
  }];
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  return <div className="min-h-screen bg-portfolio-dark-brown">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Link to="/#projects" className="inline-flex items-center text-portfolio-cream hover:text-portfolio-accent transition-colors mb-6">
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-cream">
              All <span className="text-portfolio-accent">Projects</span>
            </h1>
            <p className="text-portfolio-cream text-lg max-w-2xl mx-auto">
              Explore my complete collection of projects spanning web development, 
              mobile applications, backend systems, and AI solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => <Button key={category.id} variant={filter === category.id ? "default" : "outline"} onClick={() => setFilter(category.id)} className={`${filter === category.id ? "bg-portfolio-accent text-portfolio-dark-brown" : "border-portfolio-accent text-portfolio-dark-brown hover:bg-foreground/10 hover:text-portfolio-dark-brown"}`}>
                {category.label}
              </Button>)}
          </div>

          {/* Projects List */}
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
            const IconComponent = getProjectIcon(project.category);
            const isEven = index % 2 === 0;
            return <div key={project.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Project Icon/Visual */}
                  <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                    {project.title === "AI Agents Selling Website" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/ai-agents-website.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ) :project.title === "LinkedIn Post Agent" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/linkedin_post.png" 
                          alt="linked in image " 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    )
                    :project.title === "Customer Support Agents" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/customersupport.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ):project.title === "Food Ordering Website" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/FoodOrder.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ):project.title === "AI-powered ad creative generation." ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/AD-Creative Generation.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ) :project.title === "Company Website" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/CompanyWebsite.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ) :
                    project.title === "Finding Lead" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/Finding_lead.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    )  :
                    project.title === "Stock Price Prediction ML" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/stock_price_prrediction.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    )  :
                    project.title === "AirJio - Mobile Recharge App" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="/assets/airjio.png" 
                          alt="AI Agents Selling Website Screenshot" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ) : 
                    project.title === "Frontend project" ? (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-8 backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <img 
                          src="" 
                          alt="" 
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                        />
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    ) : (
                      <div className="bg-portfolio-brown/30 rounded-3xl p-16 flex items-center justify-center backdrop-blur-sm border border-portfolio-accent/20 group hover:border-portfolio-accent/40 transition-all duration-500">
                        <div className="w-32 h-32 bg-portfolio-accent/20 rounded-3xl flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-all duration-300">
                          <IconComponent className="w-16 h-16 text-portfolio-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        {project.featured && <Badge className="absolute top-4 right-4 bg-portfolio-accent text-portfolio-dark-brown">
                            Featured
                          </Badge>}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-8 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div>
                      <div className="text-portfolio-accent font-medium text-sm uppercase tracking-wider mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-portfolio-cream mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-portfolio-cream/90 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-portfolio-accent font-medium text-sm uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map(tech => <span key={tech} className="px-4 py-2 bg-portfolio-accent/10 text-sm font-medium rounded-full border border-portfolio-accent/30 hover:bg-portfolio-accent/20 transition-colors text-orange-900">
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
                      
                      {project.github && <Button variant="outline" onClick={() => window.open(project.github, "_blank")} className="border-portfolio-accent text-black hover:bg-portfolio-accent hover:text-black font-semibold px-6 py-3 group">
                          <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>}
                      
                      {(!project.liveDemo || project.liveDemo === "") && <Button variant="outline" onClick={() => {}} className="border-portfolio-accent text-black hover:bg-portfolio-accent hover:text-black font-semibold px-6 py-3 group opacity-50 cursor-not-allowed">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Demo Coming Soon
                        </Button>}
                      
                      {(!project.github || project.github === "") && <Button variant="outline" onClick={() => {}} className="border-portfolio-accent text-black hover:bg-portfolio-accent hover:text-black font-semibold px-6 py-3 group opacity-50 cursor-not-allowed">
                          <Github className="w-5 h-5 mr-2" />
                          Code Coming Soon
                        </Button>}
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Stats */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">
                  {projects.length}
                </div>
                <div className="text-portfolio-cream">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">
                  {projects.filter(p => p.category === "web").length}
                </div>
                <div className="text-portfolio-cream">Web Apps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">
                  {projects.filter(p => p.liveDemo).length}
                </div>
                <div className="text-portfolio-cream">Live Demos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">
                  {new Set(projects.flatMap(p => p.tech)).size}
                </div>
                <div className="text-portfolio-cream">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-portfolio-accent/30 bg-portfolio-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-portfolio-cream">
            © 2024 Sai Narendar. Built with React & Tailwind CSS.
          </p>
           <Link to="/#projects" className="inline-flex items-center text-portfolio-cream hover:text-portfolio-peach transition-colors mb-4">
                        ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>;
};
export default AllProjects;
