import ProjectCard from "./ProjectCard";
import missinghueHero from "@/assets/missinghue-hero.png";
import kozahiveBeehive from "@/assets/kozahive-beehive.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MissingHue",
      description: "Solo-founded and designed minimalist Tyvek® wallets. Complete end-to-end creation including product design, 3D modeling in Fusion 360, brand identity, website development, and social media strategy.",
      image: missinghueHero,
      tags: ["Product Design", "Branding", "Web Development", "3D Modeling", "Fusion 360", "Tyvek®"],
      link: "https://missinghue.com",
      featured: true
    },
    {
      title: "KozaHive",
      description: "Co-founded beekeeping and gardening product company. Designed innovative beehives using Fusion 360, managed CNC machining, 3D printing, woodwork, and created the complete digital presence.",
      image: kozahiveBeehive,
      tags: ["Product Design", "CNC", "3D Printing", "Woodworking", "Web Development", "Co-founder"],
      link: "https://kozahive.com",
      featured: true
    }
  ];

  // Use uploaded images for graphic design work
  const graphicProjects = [
    {
      title: "Motion Design Studies",
      description: "Experimental motion graphics exploring typography and dynamic visual systems. Part of advanced graphic design coursework.",
      image: "/lovable-uploads/e5a946bd-6e2a-47dd-b1ac-4634dbf6a9b7.png",
      tags: ["Motion Design", "Typography", "Visual Systems"]
    },
    {
      title: "Editorial Design",
      description: "Typography-focused poster design exploring hierarchical information and visual impact through experimental layouts.",
      image: "/lovable-uploads/b4e28ed4-dc33-4302-8931-bb80f1db6971.png",
      tags: ["Editorial Design", "Typography", "Layout"]
    },
    {
      title: "Brand Identity",
      description: "Cold brew coffee branding project featuring clean typography and minimalist aesthetic. Complete packaging design system.",
      image: "/lovable-uploads/1adacb7f-7970-48aa-b29d-3a252a9e1f36.png",
      tags: ["Branding", "Packaging", "Typography"]
    },
    {
      title: "Album Cover Design",
      description: "Conceptual album artwork combining 3D elements with photography. Exploration of depth and visual storytelling.",
      image: "/lovable-uploads/8ba0d4b4-532a-4555-990f-004941dffa1a.png",
      tags: ["Album Art", "3D Design", "Conceptual"]
    }
  ];

  return (
    <section id="work" className="py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A selection of projects spanning product design, development, and visual identity
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Product & Digital</h3>
            <div className="grid gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
          
          {/* Graphic Design Work */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Graphic Design Studies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {graphicProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
          
          {/* Coming Soon */}
          <div className="text-center py-12 border border-dashed border-muted-foreground/30 rounded-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-muted-foreground">Coming Soon</h3>
              <p className="text-muted-foreground">
                UI/UX mobile designs and iOS app projects currently in development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;