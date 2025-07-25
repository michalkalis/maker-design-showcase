import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-creative-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-warm/20 rounded-full blur-lg animate-float delay-1000" />
      
      <div className="container px-4 text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Hi, I'm a{" "}
            <span className="gradient-text">Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I create digital experiences, craft physical products, and build iOS applications with passion and precision.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <Button variant="ghost" size="sm" className="hover:text-creative-primary">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-creative-primary">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-creative-primary">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;