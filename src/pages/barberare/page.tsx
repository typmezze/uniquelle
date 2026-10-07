import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BARBERS, SERVICES, getServiceById } from "@/lib/data.ts";
import Seo from "@/components/seo.tsx";

export default function Barbers() {
  return (
    <div className="pt-16">
      <Seo
        path="/barberare"
        title="Möt frisören Kamilla – 25 års erfarenhet | Uniquelle Salong"
        description="Möt Kamilla, frisör i Arlöv med 25 års erfarenhet och passion för kalla blonda nyanser. Se specialiteter och tjänster och boka tid."
      />
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
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Möt oss</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">Frisören</h1>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Kamilla är frisör på Uniquelle Salong i Arlöv och har arbetat i yrket i 25 år. Här kan du läsa om hennes specialiteter, vilka tjänster hon erbjuder och boka en tid som passar dig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {BARBERS.map((barber, i) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={`flex flex-col lg:flex-row gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Photo */}
              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] lg:aspect-auto lg:h-[420px]">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded">
                      {barber.experience} som frisör
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 py-4">
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Frisör</p>
                <h2 className="font-serif text-4xl font-bold mb-4">{barber.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">{barber.bio}</p>

                <div className="mb-6">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                    Specialiteter
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="border border-border text-sm px-3 py-1 rounded text-foreground/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                    Erbjudna tjänster
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {barber.services.map((sid) => {
                      const svc = getServiceById(sid);
                      return svc ? (
                        <span
                          key={sid}
                          className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded"
                        >
                          {svc.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                <Link
                  to={`/boka?barber=${barber.id}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Boka med {barber.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
