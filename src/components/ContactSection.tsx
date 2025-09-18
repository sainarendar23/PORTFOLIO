import { useState } from "react";
import { Mail, Phone, MapPin, User, Code2, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sainarendar23@gmail.com",
      link: "mailto:sainarendar23@gmail.com",
    },
    {
      icon: User,
      title: "LinkedIn",
      content: "linkedin.com/in/s-sainarendar",
      link: "https://www.linkedin.com/in/s-sainarendar/",
    },
    {
      icon: Github,
      title: "GitHub",
      content: "github.com/sainarendar23",
      link: "https://github.com/sainarendar23",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-dark-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-foreground">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right" className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale-up"
                  delay={200 + index * 100}
                >
                  <Card
                    className="bg-card/50 border-portfolio-brown hover:border-foreground transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors">
                          <info.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={600} className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Available for:
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <span>Full-stack web development projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <span>Backend development and API creation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <span>AI agents and automation solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <span>Technical consulting and code reviews</span>
                </li>
              </ul>
            </AnimatedSection>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={300}>
            <Card className="bg-card/50 border-portfolio-brown">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-portfolio-brown focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-portfolio-brown focus:border-foreground"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-portfolio-brown focus:border-foreground"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-portfolio-brown focus:border-foreground resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-foreground to-portfolio-accent hover:from-portfolio-accent hover:to-foreground text-background font-semibold py-3 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;