import { motion } from "motion/react";
import { MapPin, ExternalLink, Clock } from "lucide-react";
import { SALON } from "@/lib/data.ts";
import Seo from "@/components/seo.tsx";

const HOURS = [
  { day: "Måndag – Söndag", hours: "08:00 – 21:00" },
];

export default function Contact() {
  return (
    <div className="pt-16">
      <Seo
        path="/kontakt"
        title="Kontakt & öppettider – Lundavägen 65, Arlöv | Uniquelle Salong"
        description="Hitta till Uniquelle Salong på Lundavägen 65 i Arlöv. Öppet alla dagar 08:00–21:00. Adress, öppettider och Bokadirekt."
      />
      {/* Header */}
      <section
        className="relative py-24 flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,8,6,0.95) 40%, rgba(10,8,6,0.6) 100%), url(https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Hitta oss</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold">Kontakt</h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Kontaktuppgifter</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Adress</p>
                    <p className="text-muted-foreground text-sm">
                      Lundavägen 65<br />232 34 Arlöv
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded border border-border flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Bokadirekt</p>
                    <a href={SALON.bokadirektUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      Se omdömen och boka via Bokadirekt
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Öppettider</h3>
              </div>
              <div className="space-y-2">
                {HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{day}</span>
                    <span className={hours === "Stängt" ? "text-destructive" : "text-foreground font-medium"}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden border border-border bg-card aspect-square lg:aspect-auto lg:h-full min-h-[300px] flex flex-col items-center justify-center relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <MapPin className="w-10 h-10 text-primary mb-4 relative z-10" />
              <p className="font-semibold relative z-10">Lundavägen 65</p>
              <p className="text-muted-foreground text-sm relative z-10">232 34 Arlöv</p>
              <a
                href="https://maps.google.com/?q=Lundavägen+65,+232+34+Arlöv"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-primary text-sm hover:underline cursor-pointer relative z-10"
              >
                Öppna i Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
