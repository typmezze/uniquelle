import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/seo.tsx";

export default function About() {
  return (
    <div className="pt-16">
      <Seo
        path="/om-oss"
        title="Om oss – Personlig hårvård i Arlöv | Uniquelle Salong"
        description="Läs om Uniquelle Salong i Arlöv: 25 års erfarenhet, personlig service och hantverk med passion för hår och kalla blonda nyanser."
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
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Vår historia</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold">Om oss</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">25 år som frisör</p>
            <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">
              Personlig hårvård med passion
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jag har arbetat som frisör i 25 år och älskar mitt yrke! Jag brinner särskilt för kalla blonda nyanser – men skapar självklart alla typer av fantastiska hårfärger och frisyrer.
              </p>
              <p>
                Hos mig får du en personlig upplevelse och ett resultat anpassat just för dig. – Kamilla
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Uniquelle Salong interiör"
              width={800}
              height={600}
              className="rounded-xl w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Vad vi tror på</p>
            <h2 className="font-serif text-4xl font-bold">Våra värderingar</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Hantverk",
                desc: "Varje detalj spelar roll. Vi tar den tid som behövs för att leverera ett resultat du är nöjd med.",
              },
              {
                title: "Välkomnande",
                desc: "Oavsett om det är ditt första besök eller om du är en stammis – du ska alltid känna dig välkommen och väl omhändertagen hos oss.",
              },
              {
                title: "Integritet",
                desc: "Vi är ärliga med vad som fungerar för dig. Vi rekommenderar aldrig något du inte behöver, och vi håller alltid det vi lovar.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-xl p-8"
              >
                <div className="w-8 h-px bg-primary mb-6" />
                <h3 className="font-serif text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold mb-4">Kom och hälsa på</h2>
          <p className="text-muted-foreground mb-8">
            Vi ser fram emot att välkomna dig till Uniquelle Salong i Arlöv. Boka din tid online.
          </p>
          <Link
            to="/boka"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Boka tid <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
