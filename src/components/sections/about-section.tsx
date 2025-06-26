
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="md:col-span-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur animate-tilt"></div>
              <Card className="relative rounded-2xl overflow-hidden shadow-2xl w-64 h-64 md:w-80 md:h-80 rotate-[-3deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Portrait of the developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint="professional portrait"
                />
              </Card>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-primary">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                I am a passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I am always eager to learn and grow, both as a developer and as an individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
