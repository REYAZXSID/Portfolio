
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-dvh flex items-center justify-center text-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter animate-background-pan bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
          Jane Doe
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground font-body max-w-2xl mx-auto">
          Creative Full-Stack Developer & UI/UX Enthusiast
        </p>
        <p className="mt-6 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
          I build elegant, responsive, and high-performance web applications from concept to completion.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="font-headline group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-[right_center] text-primary-foreground transition-all duration-500" asChild>
            <a href="#contact">
              Get in Touch <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-headline transition-colors duration-300" asChild>
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
