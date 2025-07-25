import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>
          
          <div className="hidden md:flex items-center gap-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('work')}
              className="hover:text-creative-primary"
            >
              Work
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:text-creative-primary"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="hover:text-creative-primary"
            >
              Contact
            </Button>
          </div>
          
          <Button size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;