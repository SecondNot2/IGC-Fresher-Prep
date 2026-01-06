import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Mail, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { offices, contact } from "@/data/company-data";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập họ tên")
    .max(100, "Họ tên quá dài"),
  email: z
    .string()
    .trim()
    .email("Email không hợp lệ")
    .max(255, "Email quá dài"),
  phone: z
    .string()
    .trim()
    .min(10, "Số điện thoại không hợp lệ")
    .max(15, "Số điện thoại không hợp lệ"),
  company: z.string().trim().max(100, "Tên công ty quá dài").optional(),
  message: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập lời nhắn")
    .max(1000, "Lời nhắn quá dài"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
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
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Liên hệ <span className="text-gradient-gold">tư vấn</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng doanh nghiệp của bạn trong hành
            trình xây dựng thương hiệu
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Offices info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Văn phòng của chúng tôi
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Với 3 văn phòng trải dài từ Bắc vào Nam, Ore luôn sẵn sàng phục
                vụ khách hàng trên khắp Việt Nam.
              </p>
            </div>

            <div className="space-y-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-display text-lg font-bold text-foreground">
                          {office.city}
                        </h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {office.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Phone className="w-4 h-4" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Email</p>
                <p className="text-muted-foreground text-sm">
                  {contact.ore.email}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Nhận tư vấn miễn phí
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                    errors.phone ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Công ty / Tổ chức"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Nội dung cần tư vấn *"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-secondary border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full group gold-glow"
            >
              Gửi yêu cầu tư vấn
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-muted-foreground text-xs text-center">
              Bằng việc gửi form, bạn đồng ý với{" "}
              <a href="#" className="text-primary hover:underline">
                Chính sách bảo mật
              </a>{" "}
              của chúng tôi.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
