import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { leadershipTeam } from "@/data/company-data";

const LeadershipSection = () => {
  return (
    <section
      id="leadership"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />

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
            Leadership
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Board of <span className="text-gradient-gold">Directors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ lãnh đạo giàu kinh nghiệm, tận tâm với sứ mệnh đưa thương
            hiệu Việt vươn xa
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center"
            >
              {/* Image container */}
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-gold-dark/30 group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="relative w-full h-full rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                />
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 rounded-full bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {leader.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
