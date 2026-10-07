import { ExternalLink, Star, Clock, CalendarCheck } from "lucide-react";
import { SALON } from "@/lib/data.ts";
import Seo from "@/components/seo.tsx";

const STEPS = [
  { icon: ExternalLink, title: "Öppna Bokadirekt", desc: "Du skickas till Uniquelle Salongs sida på Bokadirekt." },
  { icon: CalendarCheck, title: "Välj tjänst och tid", desc: "Välj behandling, dag och tid som passar dig." },
  { icon: Clock, title: "Få din bekräftelse", desc: "Du får en bokningsbekräftelse direkt från Bokadirekt." },
];

export default function Booking() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <Seo
        path="/boka"
        title="Boka tid online via Bokadirekt | Uniquelle Salong Arlöv"
        description="Boka klippning eller färgning hos Uniquelle Salong i Arlöv online via Bokadirekt. Välj tjänst och tid och få bekräftelse direkt."
      />
      <section className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Online bokning</p>
          <h1 className="font-serif text-3xl font-bold mb-3">Boka tid</h1>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl leading-relaxed">
            Bokningen hos Uniquelle Salong i Arlöv görs via Bokadirekt. Där ser du lediga tider, väljer tjänst och får en bekräftelse direkt. Salongen har öppet alla dagar 08:00–21:00.
          </p>
          <a
            href={SALON.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Boka via Bokadirekt <ExternalLink className="w-4 h-4" />
          </a>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-current text-primary" />
            Betyg {SALON.rating} från {SALON.reviews} omdömen på Bokadirekt
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-serif text-2xl font-bold mb-6">Så fungerar det</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="bg-card border border-border rounded-lg p-6">
              <div className="w-10 h-10 rounded border border-border flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">
                {i + 1}. {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
