import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-3">
              Ghislain Barber
            </h3>
            <p className="text-muted-foreground text-sm">
              Votre salon de coiffure et barber shop de confiance à Etoudi,
              Yaoundé.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="#galerie"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Galerie
              </a>
              <a
                href="#rendez-vous"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Rendez-vous
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-primary-foreground transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ghislain Barber. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
