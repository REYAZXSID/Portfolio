import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with product management, shopping cart, and payment integration. Built for performance and scalability.",
    image: "https://placehold.co/600x400.png",
    imageHint: "online store",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Features real-time updates.",
    image: "https://placehold.co/600x400.png",
    imageHint: "dashboard app",
    stack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Personal Blog",
    description: "A clean, minimalist blog built with a headless CMS for easy content management and a fast, static front-end for readers.",
    image: "https://placehold.co/600x400.png",
    imageHint: "minimalist website",
    stack: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="font-body text-muted-foreground mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <Badge key={tech} variant="secondary" className="font-body">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-card">
                <div className="flex w-full justify-end gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
