import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "1(301)732-9975";


const services = [
  "Coupe Homme",
  "Coupe Femme",
  "Taille de Barbe",
  "Coiffure Événementielle",
  "Soin Capillaire",
  "Pack Famille",
];

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires ci-dessous..",
        variant: "destructive",
      });
      return;
    }
  
    const whatsappMessage = encodeURIComponent(
      `Bonjour Ghislain Barber 👋✂️
  
  Je souhaite prendre rendez-vous.
  
  👤 Nom : ${formData.name}
  📞 Téléphone : ${formData.phone}
  💈 Service : ${formData.service}
  📅 Date souhaitée : ${formData.date || "Non précisée"}
  📝 Message : ${formData.message || "Aucun"}
  
  Merci !`
    );
  
    // Ouvre WhatsApp
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
      "_blank"
    );
  
    setIsSubmitted(true);
  
    toast({
      title: "Redirection vers WhatsApp",
      description: "Finalisez votre réservation sur WhatsApp.",
    });
  };
  
  return (
    <section id="rendez-vous" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
              Réservation
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prenez
              <br />
              <span className="text-gradient-gold">Rendez-vous</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Réservez votre créneau facilement via notre formulaire ou
              contactez-nous directement sur WhatsApp. Nous vous confirmerons
              votre rendez-vous dans les plus brefs délais.
            </p>

            {/* WhatsApp Button */}
            <Button
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto mb-8"
              onClick={handleSubmit}
            >
              <MessageCircle className="w-5 h-5" />
              Réserver via WhatsApp
            </Button>

            {/* Opening Hours */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-display text-xl font-bold text-foreground mb-4">
                Horaires d'ouverture
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Lundi - Vendredi</span>
                  <span className="text-foreground font-medium">08h - 20h</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Samedi</span>
                  <span className="text-foreground font-medium">08h - 21h</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Dimanche</span>
                  <span className="text-foreground font-medium">10h - 18h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Merci pour votre demande !
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nous vous contacterons très bientôt pour confirmer votre
                  rendez-vous.
                </p>
                <Button
                  variant="goldOutline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Nom complet *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="6XX XXX XXX"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Service souhaité *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Date souhaitée
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Informations supplémentaires..."
                    className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
