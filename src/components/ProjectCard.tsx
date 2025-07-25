import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, image, tags, link, github, featured }: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? 'md:col-span-2' : ''}`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-creative-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {link && (
            <Button size="sm" variant="outline" className="group/btn">
              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:text-creative-primary" />
              Visit
            </Button>
          )}
          {github && (
            <Button size="sm" variant="ghost">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;