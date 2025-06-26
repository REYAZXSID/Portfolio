
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Wind, Bot, GitBranch, TerminalSquare, Layers, Component, Palette } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: <Code className="w-10 h-10" /> },
  { name: 'TypeScript', icon: <TerminalSquare className="w-10 h-10" /> },
  { name: 'React', icon: <Component className="w-10 h-10" /> },
  { name: 'Next.js', icon: <Layers className="w-10 h-10" /> },
  { name: 'Node.js', icon: <Server className="w-10 h-10" /> },
  { name: 'GenAI', icon: <Bot className="w-10 h-10" /> },
  { name: 'SQL', icon: <Database className="w-10 h-10" /> },
  { name: 'Tailwind CSS', icon: <Wind className="w-10 h-10" /> },
  { name: 'UI/UX Design', icon: <Palette className="w-10 h-10" /> },
  { name: 'Git', icon: <GitBranch className="w-10 h-10" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Technical Skills</h2>
          <p className="mt-2 text-lg text-muted-foreground">My toolbox for building digital experiences.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="group border-2 border-transparent hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: `${300 + index * 50}ms` }}>
              <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
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
