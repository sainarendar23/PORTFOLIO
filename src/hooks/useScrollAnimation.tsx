import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const AnimatedSection = ({ 
  children, 
  animation = "fade-up",
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-up" | "fade-down";
  delay?: number;
  className?: string;
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-16`;
        case "fade-down":
          return `${baseClasses} opacity-0 -translate-y-16`;
        case "fade-left":
          return `${baseClasses} opacity-0 translate-x-16`;
        case "fade-right":
          return `${baseClasses} opacity-0 -translate-x-16`;
        case "scale-up":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-16`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};