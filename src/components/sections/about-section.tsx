
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Coffee, Code, BookOpen } from 'lucide-react';

const personalAttributes = [
  { icon: <Coffee className="h-6 w-6" />, text: "Fueled by coffee" },
  { icon: <Code className="h-6 w-6" />, text: "Passionate about clean code" },
  { icon: <BookOpen className="h-6 w-6" />, text: "Always learning and curious" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-lg animate-tilt"></div>
              <Card className="relative rounded-2xl overflow-hidden shadow-2xl w-72 h-72 md:w-80 md:h-80 rotate-[2deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500 ease-in-out">
                <Image
                  src="https://files.catbox.moe/79x6dy.jpg"
                  alt="Portrait of the developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint="professional portrait"
                />
              </Card>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
                <Sparkles className="h-10 w-10 text-accent animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    A Little About Me
                </h2>
            </div>
            
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                        I am a passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions.
                    </p>
                    <ul className="space-y-4">
                        {personalAttributes.map((attr, index) => (
                            <li key={index} className="flex items-center gap-4 group/item">
                                <div className="p-2 bg-primary/10 rounded-full text-primary group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors duration-300">
                                    {attr.icon}
                                </div>
                                <span className="font-body text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{attr.text}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
