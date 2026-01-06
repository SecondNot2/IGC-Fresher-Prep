import { motion } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Film,
  Camera,
  Palette,
  Gamepad2,
  Box,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ecosystemMembers } from "@/data/company-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";

// Map icon names to components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Film,
  Camera,
  Palette,
  Gamepad2,
  Box,
  GraduationCap,
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Về trang chủ</span>
          </Link>

          <ScrollReveal variant="fade-up">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Services
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Dịch vụ <span className="text-gradient-gold">của chúng tôi</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Hệ sinh thái Marketing tổng thể & Sản xuất sáng tạo - cung cấp
              giải pháp trọn gói từ chiến lược đến thực thi.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ecosystemMembers.map((member) => {
              const IconComponent = member.icon;
              return (
                <StaggerItem key={member.name}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group h-full"
                  >
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 glassmorphism"
                    >
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-primary text-sm font-medium">
                          {member.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>

                        {/* Services tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {member.services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                            >
                              {service}
                            </span>
                          ))}
                          {member.services.length > 3 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                              +{member.services.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bắt đầu dự án <span className="text-gradient-gold">cùng Ore</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Hãy liên hệ để nhận tư vấn chiến lược miễn phí từ đội ngũ chuyên
              gia của chúng tôi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button
                  variant="gold"
                  size="xl"
                  className="w-full sm:w-auto gold-glow"
                >
                  Nhận tư vấn miễn phí
                </Button>
              </Link>
              <Link to="/#projects">
                <Button
                  variant="goldOutline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Xem dự án
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
