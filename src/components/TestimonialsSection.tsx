import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre M.",
    role: "Client fidèle depuis 3 ans",
    content:
      "Le meilleur barber shop de Yaoundé ! Ghislain comprend exactement ce que je veux. Ma coupe est toujours impeccable et le service est au top.",
    rating: 5,
  },
  {
    name: "Marie-Claire N.",
    role: "Première visite",
    content:
      "J'ai découvert ce salon par recommandation et je ne suis pas déçue. Mes tresses sont magnifiques et l'accueil était chaleureux. Je reviendrai !",
    rating: 5,
  },
  {
    name: "Patrick K.",
    role: "Client régulier",
    content:
      "Hygiène irréprochable, équipement moderne et surtout un résultat qui fait tourner les têtes. Je recommande vivement Ghislain Barber !",
    rating: 5,
  },
  {
    name: "Sandrine A.",
    role: "Coiffure de mariage",
    content:
      "Ghislain a réalisé ma coiffure de mariage et celle de mes demoiselles d'honneur. Tout était parfait ! Un vrai artiste avec des doigts de fée.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce Que Disent
            <br />
            <span className="text-gradient-gold">Nos Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté.
            Découvrez leurs expériences chez Ghislain Barber.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
