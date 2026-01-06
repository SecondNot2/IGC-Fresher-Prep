import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/data/company-data";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

// Define nav links with type: "scroll" for same-page sections, "link" for routes
const navLinks = [
  { label: "Home", sectionId: "home", type: "scroll" as const },
  { label: "Services", path: "/services", type: "link" as const },
  { label: "Projects", sectionId: "projects", type: "scroll" as const },
  { label: "Contact", sectionId: "contact", type: "scroll" as const },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll({ offset: 80 });
  const location = useLocation();

  const handleNavClick = (item: (typeof navLinks)[number]) => {
    if (item.type === "scroll" && item.sectionId) {
      // If we're on the home page, scroll to section
      if (location.pathname === "/") {
        scrollTo(item.sectionId);
      } else {
        // Navigate to home with hash
        window.location.href = `/#${item.sectionId}`;
      }
    }
    setIsMenuOpen(false);
  };

  const handleCtaClick = () => {
    if (location.pathname === "/") {
      scrollTo("contact");
    } else {
      window.location.href = "/#contact";
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src={brandAssets.logo}
              alt="ORE IMC"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.label}
                  to={link.path!}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold" size="lg" onClick={handleCtaClick}>
              Liên hệ ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.type === "link" ? (
                  <Link
                    key={link.label}
                    to={link.path!}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              )}
              <Button variant="gold" className="mt-2" onClick={handleCtaClick}>
                Liên hệ ngay
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
