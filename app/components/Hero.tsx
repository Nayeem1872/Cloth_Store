import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoText } from "@/components/magicui/video-text";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/10 dark:to-secondary/10 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092854584-2d5ba3eeb14d?q=80&w=1974')] bg-cover bg-center opacity-30 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
              Global Clothing
            </VideoText>
            <br />
            Sourcing Excellence
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay max-w-2xl mx-auto">
            Connecting premium clothing manufacturers with global brands through
            sustainable and ethical partnerships.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white rounded-full px-8"
            >
              Our Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:text-primary-foreground rounded-full px-8"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full border border-foreground/20"
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>

      {/* Animated circle elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute -bottom-32 -right-20 w-80 h-80 bg-secondary/30 dark:bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
