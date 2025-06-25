import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Card className="rounded-lg overflow-hidden shadow-xl w-64 h-64 md:w-80 md:h-80">
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
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              I am a passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I am always eager to learn and grow, both as a developer and as an individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
