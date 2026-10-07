import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import type { ServiceId } from "@/lib/data.ts";
import { SERVICES, formatPrice, formatDuration } from "@/lib/data.ts";
import Seo from "@/components/seo.tsx";

const SERVICE_IMAGES: Record<ServiceId, string> = {
  "mens-cut": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  "womens-cut": "https://images.unsplash.com/photo-1629397685944-7073f5589754?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  "xl-cut": "https://images.unsplash.com/photo-1629397685944-7073f5589754?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  coloring: "https://images.unsplash.com/photo-1675034743339-0b0747047727?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  "blonde-highlights": "https://images.unsplash.com/photo-1675034743339-0b0747047727?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  "senior-mens-cut": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
  "senior-womens-cut": "https://images.unsplash.com/photo-1629397685944-7073f5589754?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=500&q=80",
};

export default function Services() {
  return (
    <div className="pt-16">
      <Seo
        path="/tjanster"
        title="Tjänster & priser – Klippning och färgning | Uniquelle Salong"
        description="Se alla tjänster och priser hos Uniquelle Salong i Arlöv: dam-, herr- och seniorklippning, färgning och blonda slingor. Boka online."
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
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Vad vi erbjuder</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground">Tjänster</h1>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Hos Uniquelle Salong i Arlöv hittar du klippning för damer, herrar och seniorer samt färgning och blonda slingor. Här ser du pris och tidsåtgång för varje behandling, och du kan boka direkt online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-56 lg:w-72 flex-shrink-0">
                  <img
                    src={SERVICE_IMAGES[service.id]}
                    alt={service.name}
                    width={500}
                    height={300}
                    className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h2 className="font-serif text-2xl font-semibold group-hover:text-primary transition-colors">
                        {service.name}
                      </h2>
                      <span className="text-2xl font-bold text-primary">{formatPrice(service.price, service.fromPrice)}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    {service.duration && (
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{formatDuration(service.duration)}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/boka?service=${service.id}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Boka {service.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
