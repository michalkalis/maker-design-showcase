import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in collaborating? I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <Card className="gradient-border max-w-2xl mx-auto">
            <div className="gradient-border-inner text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  Drop me a line and let's discuss your project
                </p>
              </div>
              
              <Button size="lg" className="group">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
          
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:text-creative-primary" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:text-creative-primary" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:text-creative-primary" />
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;