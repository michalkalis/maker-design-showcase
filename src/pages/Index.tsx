import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Designer Portfolio. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
