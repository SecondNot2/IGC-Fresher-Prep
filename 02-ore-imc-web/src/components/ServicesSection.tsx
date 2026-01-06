import { Megaphone, Film, Palette, Camera } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Integrated Marketing",
    description: "Chiến lược tổng thể",
    details: "Xây dựng chiến lược marketing đa kênh, tối ưu hóa hiệu quả và ROI cho doanh nghiệp của bạn.",
  },
  {
    icon: Film,
    title: "Film Production",
    description: "TVC, Phim doanh nghiệp",
    details: "Sản xuất video chuyên nghiệp từ TVC quảng cáo đến phim giới thiệu doanh nghiệp chất lượng cao.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Nhận diện thương hiệu",
    details: "Thiết kế bộ nhận diện thương hiệu độc đáo, ấn tượng và phù hợp với định vị thương hiệu.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Ảnh sản phẩm/Profile",
    details: "Chụp ảnh sản phẩm, profile doanh nghiệp với chất lượng studio chuyên nghiệp.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {service.description}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.details}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
