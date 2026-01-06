import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ecosystemMembers } from "@/data/company-data";
import ScrollReveal from "@/components/ui/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      className="py-32 md:py-40 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electricBlue/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="text-center mb-20">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Ecosystem
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Hệ sinh thái <span className="text-gradient-gold">khép kín</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            7 thành viên, một hệ sinh thái toàn diện phục vụ mọi nhu cầu truyền
            thông của doanh nghiệp
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
        </ScrollReveal>

        {/* Ecosystem cards with StaggerContainer */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {ecosystemMembers.map((eco) => (
            <StaggerItem key={eco.name}>
              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative h-full cursor-pointer"
              >
                <div
                  className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${eco.gradient} border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden glassmorphism`}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 50px hsl(43 74% 49% / 0.25), 0 0 80px hsl(43 74% 49% / 0.1)",
                    }}
                  />

                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
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

                    {/* Services list */}
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
                      className="inline-flex items-center gap-2 text-primary font-medium group/btn"
                    >
                      <span>Tìm hiểu thêm</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EcosystemSection;
