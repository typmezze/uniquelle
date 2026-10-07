import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-4 h-4 text-primary" />
              <span className="font-serif text-lg font-semibold">Uniquelle Salong</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frisör i Arlöv med 25 års erfarenhet. Klippning, färgning och kalla blonda nyanser.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Navigering
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Hem" },
                { href: "/tjanster", label: "Tjänster" },
                { href: "/barberare", label: "Frisören" },
                { href: "/boka", label: "Boka tid" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lundavägen 65</li>
              <li>232 34 Arlöv</li>
              <li className="pt-1 leading-relaxed">
                Alla dagar: 08:00–21:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Uniquelle Salong. Alla rättigheter förbehållna.</span>
        </div>
      </div>
    </footer>
  );
}
