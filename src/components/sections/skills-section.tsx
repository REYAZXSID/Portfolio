import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Wind, Feather, Bot, GitBranch, TerminalSquare, Layers, Component } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: <Code className="w-10 h-10" /> },
  { name: 'TypeScript', icon: <TerminalSquare className="w-10 h-10" /> },
  { name: 'React', icon: <Component className="w-10 h-10" /> },
  { name: 'Next.js', icon: <Layers className="w-10 h-10" /> },
  { name: 'Node.js', icon: <Server className="w-10 h-10" /> },
  { name: 'Python', icon: <Bot className="w-10 h-10" /> },
  { name: 'SQL', icon: <Database className="w-10 h-10" /> },
  { name: 'Tailwind CSS', icon: <Wind className="w-10 h-10" /> },
  { name: 'Figma', icon: <Feather className="w-10 h-10" /> },
  { name: 'Git', icon: <GitBranch className="w-10 h-10" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map(skill => (
            <Card key={skill.name} className="group hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                  {skill.icon}
                </div>
                <p className="mt-4 text-sm md:text-base font-semibold font-body text-center">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
