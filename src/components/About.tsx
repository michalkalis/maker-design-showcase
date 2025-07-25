import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = {
    design: ["UI/UX Design", "Graphic Design", "Brand Identity", "3D Modeling", "Blender", "Fusion 360"],
    development: ["iOS Development", "Web Development", "React", "TypeScript", "Swift"],
    physical: ["Product Design", "3D Printing", "CNC Machining", "Woodworking", "Manufacturing"]
  };
  
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a multidisciplinary designer and maker who bridges the digital and physical worlds
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                As a designer, developer, and maker, I bring ideas to life across multiple mediums. 
                From crafting digital experiences to designing physical products, I believe in the power 
                of thoughtful design to solve real problems.
              </p>
              <p className="text-lg leading-relaxed">
                My journey spans from creating minimalist wallets that challenge traditional design 
                to building beehives that connect people with nature. Each project is an opportunity 
                to learn, experiment, and push creative boundaries.
              </p>
            </div>
            
            <Card className="gradient-border">
              <div className="gradient-border-inner">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Currently Working On</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Expanding MissingHue product line</li>
                    <li>• New iOS app concepts</li>
                    <li>• Sustainable design practices</li>
                    <li>• UI/UX mobile experiences</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Skills & Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-creative-primary">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.design.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-creative-primary">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.development.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-creative-primary">Physical Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.physical.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;