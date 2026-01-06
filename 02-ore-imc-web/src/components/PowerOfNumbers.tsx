import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Năm kinh nghiệm",
    description: "Trong ngành Marketing & Production",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Dự án thực thi",
    description: "Trải dài khắp Việt Nam",
  },
  {
    value: 200,
    suffix: "+",
    label: "Nhân sự chuyên gia",
    description: "Đội ngũ sáng tạo & kỹ thuật",
  },
  {
    value: 3,
    suffix: "",
    label: "Văn phòng",
    description: "Hà Nội, TP.HCM, Đà Nẵng",
  },
];

const PowerOfNumbers = () => {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            The Power of Numbers
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Con số <span className="text-gradient-gold">ấn tượng</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:gold-glow">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-foreground font-medium text-lg mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerOfNumbers;
