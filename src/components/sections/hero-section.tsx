import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-dvh flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-10"></div>
      <div className="absolute inset-0 bg-primary/10 blur-3xl"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight text-primary">
          Jane Doe
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto">
          Creative Full-Stack Developer & UI/UX Enthusiast
        </p>
        <p className="mt-6 text-lg text-foreground font-body max-w-3xl mx-auto">
          I build elegant, responsive, and high-performance web applications from concept to completion.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="font-headline bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="#contact">
              Contact Me
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-headline border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
