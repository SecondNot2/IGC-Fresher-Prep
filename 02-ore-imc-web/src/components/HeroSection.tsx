import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { scrollTo } = useSmoothScroll({ offset: 80 });

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background Layer */}
        <div className="absolute inset-0">
          {/* Shimmer Placeholder - shows while video loads */}
          {!isVideoLoaded && <div className="absolute inset-0 video-shimmer" />}

          {/* Video Element */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-50" : "opacity-0"
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="/video-poster.jpg"
          >
            {/* Add your showreel video URL here */}
            <source src="/showreel.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

          {/* Radial accent glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/3 rounded-full blur-[180px]" />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-px h-40 bg-gradient-to-t from-transparent via-primary/50 to-transparent hidden md:block" />
        <div className="absolute bottom-0 right-1/4 w-px h-40 bg-gradient-to-t from-transparent via-primary/50 to-transparent hidden md:block" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center pt-20 pb-8">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glassmorphism mb-6 sm:mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                Đối tác chiến lược của Google, Meta, Zalo, TikTok
              </span>
            </motion.div>

            {/* Main headline - Fixed responsive sizing */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">Hệ Sinh Thái </span>
              <span className="text-gradient-gold">Marketing</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-gradient-gold">Tổng Thể</span>
              <br />
              <span className="text-foreground">& Sản Xuất </span>
              <span className="text-gradient-gold">Sáng Tạo</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            >
              Chuyên sâu Bất Động Sản, Dược Phẩm & FMCG.
              <span className="text-foreground">
                {" "}
                Khác biệt để khai mở thế giới.
              </span>
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-primary font-display text-lg sm:text-xl md:text-2xl italic mb-8 sm:mb-12"
            >
              "Touch for Success"
            </motion.p>

            {/* CTA Buttons - Fixed responsive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 sm:px-0"
            >
              <Button
                variant="gold"
                size="xl"
                className="group gold-glow-intense animate-pulse-glow w-full sm:w-auto"
                onClick={() => scrollTo("contact")}
              >
                Nhận Tư Vấn Chiến Lược
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              <Button
                variant="goldOutline"
                size="xl"
                className="group glow-hover w-full sm:w-auto"
                onClick={() => setShowVideoModal(true)}
              >
                <Play className="w-5 h-5" />
                Xem Showreel
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float"
        >
          <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">
            Khám phá
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-5xl mx-6 aspect-video bg-charcoal rounded-2xl overflow-hidden gold-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <video autoPlay controls className="w-full h-full object-contain">
              <source src="/showreel.mp4" type="video/mp4" />
              <p className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Video không khả dụng. Vui lòng thêm file showreel.mp4 vào thư
                mục public.
              </p>
            </video>
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default HeroSection;
