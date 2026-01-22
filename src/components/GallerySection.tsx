import haircut1 from "@/assets/haircut-1.jpg";
import haircut2 from "@/assets/haircut-2.jpg";
import beardStyle from "@/assets/beard-style.jpg";
import womenStyle from "@/assets/women-style.jpg";
import barberAtWork from "@/assets/barber-at-work.jpg";
import heroImage from "@/assets/hero-barber.jpg";

const galleryImages = [
  { src: haircut1, alt: "Coupe homme moderne", category: "Coupe Homme" },
  { src: womenStyle, alt: "Tresses élégantes", category: "Coupe Femme" },
  { src: beardStyle, alt: "Barbe sculptée", category: "Barbe" },
  { src: haircut2, alt: "Fade créatif", category: "Coupe Homme" },
  { src: barberAtWork, alt: "Ghislain au travail", category: "Salon" },
  { src: heroImage, alt: "Intérieur du salon", category: "Salon" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Notre Galerie
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-gradient-gold">Réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parcourez notre portfolio et découvrez le savoir-faire de Ghislain
            Barber à travers nos meilleures créations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 || index === 5 ? "h-full min-h-[400px]" : "h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary text-xs uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h4 className="text-foreground font-semibold">{image.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
