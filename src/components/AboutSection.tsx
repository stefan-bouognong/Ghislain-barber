import barberAtWork from "@/assets/barber-at-work.jpg";
import { Scissors, Award, Heart, Star } from "lucide-react";

const values = [
  {
    icon: Scissors,
    title: "Précision",
    description: "Chaque coupe est réalisée avec une attention méticuleuse aux détails.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Des années d'expérience au service de votre style.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'amour du métier transpire dans chaque prestation.",
  },
  {
    icon: Star,
    title: "Satisfaction",
    description: "Votre satisfaction est notre plus grande récompense.",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-soft">
              <img
                src={barberAtWork}
                alt="Ghislain au travail"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-lg shadow-gold border border-primary/20">
              <div className="text-center">
                <span className="block font-display text-4xl font-bold text-gradient-gold">
                  10+
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  Années d'expérience
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
              À Propos de Nous
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              L'Art de la Coiffure
              <br />
              <span className="text-gradient-gold">à Yaoundé</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Fondé par Ghislain, passionné de coiffure depuis son plus jeune
              âge, notre salon est devenu une référence incontournable à
              Etoudi. Avec plus d'une décennie d'expérience, nous offrons un
              service personnalisé qui allie tradition et modernité.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Chez Ghislain Barber, nous croyons que chaque client mérite une
              expérience unique. Notre mission : révéler votre style personnel
              avec professionnalisme, hygiène irréprochable et une attention
              particulière à vos besoins.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors"
                >
                  <value.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
