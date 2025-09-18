import { Code, Palette, Database, Cpu, Globe, Smartphone ,MessageCircleCodeIcon} from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Code, delay: "0s", position: "top-20 left-10" },
    { Icon: Palette, delay: "2s", position: "top-40 right-20" },
    { Icon: Database, delay: "4s", position: "bottom-32 left-20" },
    { Icon: Cpu, delay: "1s", position: "bottom-20 right-10" },
    { Icon: Globe, delay: "3s", position: "top-60 left-1/3" },
    { Icon: Smartphone, delay: "5s", position: "bottom-40 right-1/3" },
    { Icon:MessageCircleCodeIcon , delay: "3s", position: "top-20 right-1/3" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20`}
          style={{
            animationDelay: delay,
          }}
        >
          <Icon 
            size={32} 
            className="text-foreground animate-float" 
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;