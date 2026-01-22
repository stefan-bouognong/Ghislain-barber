import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "237600000000"; // Replace with actual number

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Nous Trouver
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Venez Nous
            <br />
            <span className="text-gradient-gold">Rendre Visite</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-soft h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=WG9H%2BJR8%2C%20Yaound%C3%A9&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Ghislain Barber - Etoudi"
            />
          </div>


          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Adresse
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Quartier Etoudi, derrière l'hôtel Le Makombe
                  <br />
                  Yaoundé, Cameroun
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Téléphone
                </h4>
                <a
                  href="tel:+237600000000"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +237 6XX XXX XXX
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  WhatsApp
                </h4>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        "Bonjour Ghislain Barber !"
                      )}`,
                      "_blank"
                    )
                  }
                >
                  Cliquez pour nous écrire
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Email
                </h4>
                <a
                  href="mailto:contact@ghislainbarber.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@ghislainbarber.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Horaires
                </h4>
                <p className="text-muted-foreground">
                  Lun - Ven: 08h - 20h
                  <br />
                  Sam: 08h - 21h | Dim: 10h - 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
