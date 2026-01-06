import { Facebook, Linkedin, Youtube } from "lucide-react";
import { socialLinks, brandAssets } from "@/data/company-data";

const socialIcons = [
  { icon: Facebook, url: socialLinks.facebook, label: "Facebook" },
  { icon: Youtube, url: socialLinks.youtube, label: "Youtube" },
  { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={brandAssets.logo} alt="ORE IMC" className="h-8 w-auto" />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Ore IMC Agency. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
