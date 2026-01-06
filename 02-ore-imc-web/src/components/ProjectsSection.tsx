import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Văn Lang SkyLake",
    category: "Bất Động Sản",
    description: "Integrated Marketing Campaign",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Strategy", "Digital", "Production"],
  },
  {
    title: "Dược phẩm Nibifa",
    category: "TVC Storytelling",
    description: "TVC & Brand Campaign",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["TVC", "Healthcare", "Storytelling"],
  },
  {
    title: "Bia Hạ Long Legend",
    category: "FMCG / TVC",
    description: "Launch Campaign",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop",
    tags: ["FMCG", "TVC", "Launch"],
  },
  {
    title: "Nhà hàng Baekje Galbi",
    category: "F&B / Photography",
    description: "Food Photography & Content",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    tags: ["F&B", "Photography", "Content"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

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
            Featured Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dự án <span className="text-gradient-gold">nổi bật</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những chiến dịch đã góp phần tạo nên thành công cho các thương hiệu hàng đầu
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-primary text-sm font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                  <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-muted-foreground text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.description}
                </p>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-colors duration-300 group">
            <span>Xem tất cả dự án</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
