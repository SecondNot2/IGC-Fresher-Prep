import { Megaphone, Film, Palette, Camera } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

const services = [
  {
    icon: Megaphone,
    title: "Integrated Marketing",
    description: "Chiến lược tổng thể",
    details:
      "Xây dựng chiến lược marketing đa kênh, tối ưu hóa hiệu quả và ROI cho doanh nghiệp của bạn.",
  },
  {
    icon: Film,
    title: "Film Production",
    description: "TVC, Phim doanh nghiệp",
    details:
      "Sản xuất video chuyên nghiệp từ TVC quảng cáo đến phim giới thiệu doanh nghiệp chất lượng cao.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Nhận diện thương hiệu",
    details:
      "Thiết kế bộ nhận diện thương hiệu độc đáo, ấn tượng và phù hợp với định vị thương hiệu.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Ảnh sản phẩm/Profile",
    details:
      "Chụp ảnh sản phẩm, profile doanh nghiệp với chất lượng studio chuyên nghiệp.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-32 md:py-40 bg-charcoal relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-electricBlue/3 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="text-center mb-20">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dịch vụ của chúng tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </ScrollReveal>

        {/* Services grid with StaggerContainer */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full bg-gradient-to-br from-card via-card to-charcoal-light p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 cursor-pointer glassmorphism"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 60px hsl(43 74% 49% / 0.2), 0 0 100px hsl(43 74% 49% / 0.1)",
                  }}
                />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-secondary/80 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-electricBlue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
