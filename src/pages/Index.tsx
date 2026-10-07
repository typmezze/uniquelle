import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import { SERVICES, BARBERS, formatPrice } from "@/lib/data.ts";
import Seo from "@/components/seo.tsx";

const STATS = [
  { label: "År som frisör", value: "25" },
  { label: "Betyg", value: "4.9" },
  { label: "Omdömen", value: "61" },
  { label: "Öppet alla dagar", value: "08–21" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Seo
        path="/"
        title="Uniquelle Salong – Frisör i Arlöv | Klippning & färgning"
        description="Frisörsalong på Lundavägen 65 i Arlöv. Klippning, färgning och kalla blonda nyanser hos Kamilla, 25 års erfarenhet. Öppet alla dagar 08–21."
      />
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.80) 60%, rgba(10,8,6,1) 100%), url(https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Uniquelle Salong · Arlöv
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6 text-balance"
          >
            Hår med{" "}
            <span className="text-primary italic">personlighet.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-md mx-auto"
          >
            Klippning och färgning hos Kamilla i Arlöv – med särskild passion för kalla blonda nyanser.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/boka"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity cursor-pointer"
            >
              Boka tid <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/tjanster"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
            >
              Se tjänster
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-border" />
        </div>
      </section>

      {/* Summary (also used by search and AI answer engines) */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">Frisör i Arlöv</h2>
        <p className="text-muted-foreground leading-relaxed">
          Uniquelle Salong är en frisörsalong på Lundavägen 65 i Arlöv. Frisör Kamilla har 25 års erfarenhet och erbjuder klippning för damer, herrar och seniorer samt färgning och blonda slingor, med särskild passion för kalla blonda nyanser. Salongen har öppet alla dagar 08:00–21:00 och du bokar din tid enkelt online.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-border">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center px-4"
              >
                <div className="text-3xl font-bold text-primary font-serif">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Vad vi erbjuder</p>
          <h2 className="font-serif text-4xl font-bold">Tjänster</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <span className="text-primary font-semibold text-sm">{formatPrice(service.price, service.fromPrice)}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
              {service.duration && <span className="text-xs text-muted-foreground">{service.duration} min</span>}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/boka"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Boka nu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Din frisör</p>
            <h2 className="font-serif text-4xl font-bold">Möt Kamilla</h2>
          </motion.div>
          <div className="grid grid-cols-1 max-w-xs mx-auto gap-4">
            {BARBERS.map((barber, i) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={barber.image}
                  alt={barber.name}
                  width={600}
                  height={800}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-lg font-semibold text-white">{barber.name}</p>
                  <p className="text-xs text-white/70">{barber.experience} som frisör</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/barberare"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded font-semibold text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
            >
              Läs mer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Varför välja oss</p>
            <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">
              Hantverk, precision<br />och passion
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hos Kamilla får du en personlig upplevelse och ett resultat anpassat just för dig – oavsett om det gäller en ny klippning eller en helt ny hårfärg.
            </p>
            <div className="space-y-4">
              {[
                { icon: Award, title: "25 års erfarenhet", desc: "Kamilla har arbetat som frisör i 25 år och älskar sitt yrke." },
                { icon: Star, title: "Kalla blonda nyanser", desc: "Slingor, toning och alla typer av hårfärger och frisyrer." },
                { icon: Users, title: "Öppet alla dagar", desc: "Vi har öppet varje dag kl. 08–21, även helger." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded border border-border flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Salongens interiör"
              width={800}
              height={600}
              className="rounded-lg w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg shadow-black/40">
              <div className="text-2xl font-bold font-serif">4.9</div>
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <div className="text-xs mt-1 opacity-80">Bokadirekt</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Redo för en ny look?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Boka din tid online på under 2 minuter.
          </p>
          <Link
            to="/boka"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Boka tid nu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
