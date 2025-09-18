import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "./FloatingIcons";
import TypewriterText from "./TypewriterText";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import profileImage from "/lovable-uploads/9c80d2e8-45eb-40a8-a224-ab6453ab48b4.png";

const HeroSection = () => {
  const handleHireMe = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=smsainarendar23@gmail.com&su=Job%20Offer%20from%20[Company%20Name]&body=Dear%20Candidate%2C%0D%0A%0D%0AWe%20are%20pleased%20to%20inform%20you%20that%20you%20have%20been%20selected%20for%20the%20vacancy%20at%20our%20organization.%20Your%20qualifications%20and%20experience%20are%20highly%20valued%2C%20and%20we%20believe%20you%20will%20be%20a%20strong%20addition%20to%20our%20team.%20For%20the%20hiring%20process,%20If%20you%20have%20any%20questions%2C%20feel%20free%20to%20reach%20out.%0D%0A%0D%0AWarm%20regards%2C%0D%0A[Sai%20Narendar%20S]%0D%0A[Your%20Position]%0D%0A[Company%20Name]");
  };
  const handledownload = () => {
    window.open("https://drive.google.com/file/d/1DjlQ7CKNAVm9rZXoAavzMaILeGVXl9zy/view?usp=sharing", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-right" className="space-y-8">
            <div className="space-y-4">
              <p className="text-portfolio-brown font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">Sai</span>{" "}
                <span className="text-portfolio-brown">
                  Narendar
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
                <p>I'm a passionate</p>
                <TypewriterText 
                  texts={["Software Developer", "Backend Developer", "Automation Architect"]}
                  className="text-primary font-semibold"
                  speed={120}
                  deleteSpeed={80}
                  pauseTime={2000}
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about creating innovative solutions and building scalable applications. 
              I specialize in full-stack development, AI integration, and automation systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleHireMe}
                variant="outline" 
                className="border-portfolio-brown text-portfolio-brown hover:bg-portfolio-brown hover:text-black px-8 py-6 text-lg group"
              >
                <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Hire Me
              </Button>
              
              <Button 
                onClick={handledownload}
                variant="outline" 
                className="border-portfolio-brown text-portfolio-brown hover:bg-portfolio-brown hover:text-black px-8 py-6 text-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection animation="fade-left" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-portfolio-brown shadow-lg shadow-portfolio-brown/20">
                <img 
                  src={profileImage} 
                  alt="Sai Narendar - Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-accent rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-portfolio-brown rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
