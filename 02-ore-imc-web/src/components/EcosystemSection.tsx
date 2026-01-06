import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ecosystemMembers } from "@/data/company-data";

const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-dark/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Ecosystem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hệ sinh thái <span className="text-gradient-gold">khép kín</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            7 thành viên, một hệ sinh thái toàn diện phục vụ mọi nhu cầu truyền
            thông của doanh nghiệp
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </motion.div>

        {/* Ecosystem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ecosystemMembers.map((eco, index) => (
            <motion.div
              key={eco.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${eco.gradient} border border-border/50 hover:border-primary/50 transition-all duration-500 hover:gold-glow overflow-hidden`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <eco.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1 group-hover:text-gradient-gold transition-colors duration-300">
                    {eco.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">
                    {eco.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {eco.description}
                  </p>

                  {/* Services list - revealed on hover */}
                  <div className="space-y-2 mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {eco.services.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground/80">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={eco.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-medium group/btn"
                  >
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
