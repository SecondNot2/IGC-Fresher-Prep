import { Facebook, Linkedin, Youtube, ExternalLink } from "lucide-react";
import {
  socialLinks,
  brandAssets,
  ecosystemLinks,
  igcGroup,
} from "@/data/company-data";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

const socialIcons = [
  { icon: Facebook, url: socialLinks.facebook, label: "Facebook" },
  { icon: Youtube, url: socialLinks.youtube, label: "Youtube" },
  { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
];

const navLinks = [
  { label: "Trang chủ", sectionId: "home" },
  { label: "Dịch vụ", sectionId: "services" },
  { label: "Dự án", sectionId: "projects" },
  { label: "Liên hệ", sectionId: "contact" },
];

const ecosystemArray = Object.values(ecosystemLinks);

const Footer = () => {
  const { scrollTo } = useSmoothScroll({ offset: 80 });

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <img
                src={brandAssets.logo}
                alt="ORE IMC"
                className="h-10 w-auto"
              />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Hệ sinh thái Marketing tổng thể & Sản xuất sáng tạo. Đối tác chiến
              lược của Google, Meta, Zalo, TikTok.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Điều hướng
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.sectionId)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Hệ sinh thái
            </h4>
            <ul className="space-y-3">
              {ecosystemArray.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {member.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Tập đoàn
            </h4>
            <a
              href={igcGroup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-all group"
            >
              <div>
                <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                  {igcGroup.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {igcGroup.website.replace("https://", "")}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
              {igcGroup.fullName}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ore IMC Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
