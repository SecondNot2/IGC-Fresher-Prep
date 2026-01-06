import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: CaseStudy;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl gold-glow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

              {/* Tags overlay */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="gold">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Header */}
              <div>
                <p className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-6">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Vấn đề
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.caseStudy.problem}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-electricBlue/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-electricBlue" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Giải pháp
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.caseStudy.solution}
                  </p>
                </motion.div>

                {/* Result */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-xl bg-primary/10 border border-primary/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Kết quả
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.caseStudy.result}
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    onClose();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Tư vấn dự án tương tự
                </Button>
                <Button variant="goldOutline" size="lg" onClick={onClose}>
                  Đóng
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
