
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MathMind",
    description: "A brain-training puzzle game that sharpens your arithmetic skills with timed challenges and increasing difficulty levels. Perfect for users who love numbers and mental speed",
    image: "/flappy.jpg",
    imageHint: "Brain Puzzle",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://math-magix.vercel.app/"
  },
  {
    title: "TakaTak",
    description: "A clean, minimalist version of the classic Tic-Tac-Toe game with smart AI and 2-player mode. Designed for fast, fun, and strategic gameplay on all screen sizes.",
    image: "/takatak.jpg",
    imageHint: "Tic Tac Toe",
    stack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://tictacv1.vercel.app/"
  },
  {
    title: "FlipX",
    description: "A visual memory game where players flip and match tiles to win. Engaging animations, sound effects, and progressive difficulty make it fun for all ages.",
    image: "/flipx.jpg",
    imageHint: "Flip Puzzle",
    stack: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
    github: "https://github.com",
    live: "https://flipx.vercel.app"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Featured Projects</h2>
            <p className="mt-2 text-lg text-muted-foreground">A selection of my recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="relative group opacity-0 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Card className="relative flex flex-col overflow-hidden shadow-lg transition-all duration-300 rounded-lg h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-4">
                      <CardTitle className="font-headline text-xl text-white">{project.title}</CardTitle>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="font-body text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <Badge key={tech} variant="secondary" className="font-body">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex w-full justify-start gap-2 mt-auto">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
