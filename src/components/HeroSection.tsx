import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-barber.jpg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center pt-20">
        <div className="animate-fade-up">
          <span className="inline-block text-primary font-medium uppercase tracking-[0.3em] text-sm mb-6">
            Salon de Coiffure & Barber Shop
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up [animation-delay:0.1s]">
          Le Style Qui Vous
          <br />
          <span className="text-gradient-gold">Distingue à Etoudi</span>
        </h1>

        <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:0.2s]">
          Bienvenue chez Ghislain Barber, votre destination premium pour les
          coupes modernes, le rasage de précision et le style impeccable au cœur
          de Yaoundé.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:0.3s]">
          <Button variant="hero" size="xl" asChild>
            <a href="#rendez-vous">Prendre Rendez-vous</a>
          </Button>
          <Button variant="goldOutline" size="xl" asChild>
            <a href="#services">Nos Services</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#apropos"
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">Découvrir</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
