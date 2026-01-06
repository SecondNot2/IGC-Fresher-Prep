import { motion } from "framer-motion";
import { partnerLogos } from "@/data/company-data";

const PartnersSection = () => {
  // Duplicate partners for seamless loop
  const allLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 bg-charcoal relative overflow-hidden border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-2">
            Trusted By
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Đối tác & <span className="text-gradient-gold">Khách hàng</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {allLogos.map((logo, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-20 rounded-lg bg-white/5 border border-border/30 hover:border-primary/30 transition-colors duration-300 group p-3"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default PartnersSection;
