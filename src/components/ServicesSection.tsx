import { Scissors, User, Users, Sparkles, Crown, Brush } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Coupe Homme",
    description: "Coupe classique, dégradé, fade, et styles tendance adaptés à votre visage.",
    price: "2 000 - 5 000",
  },
  {
    icon: User,
    title: "Coupe Femme",
    description: "Coupes modernes, tresses, tissages et coiffures personnalisées.",
    price: "3 000 - 15 000",
  },
  {
    icon: Brush,
    title: "Taille de Barbe",
    description: "Taille précise, tracé net et entretien professionnel de votre barbe.",
    price: "1 500 - 3 000",
  },
  {
    icon: Crown,
    title: "Coiffure Événementielle",
    description: "Mariages, cérémonies et événements spéciaux. Style sur mesure.",
    price: "10 000 - 25 000",
  },
  {
    icon: Sparkles,
    title: "Soin Capillaire",
    description: "Traitements hydratants, soins du cuir chevelu et massages relaxants.",
    price: "5 000 - 10 000",
  },
  {
    icon: Users,
    title: "Pack Famille",
    description: "Forfaits avantageux pour toute la famille. Père, mère et enfants.",
    price: "Sur devis",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Nos Prestations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez notre gamme complète de services professionnels pour
            hommes, femmes et enfants. Qualité et satisfaction garanties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gradient-gold">
                  {service.price}
                </span>
                <span className="text-muted-foreground text-sm">FCFA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12">
          * Les prix peuvent varier selon la complexité du service demandé.
          Contactez-nous pour un devis personnalisé.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
