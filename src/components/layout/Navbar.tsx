import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils.ts";

const NAV_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/barberare", label: "Frisören" },
  { href: "/boka", label: "Boka tid" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route changes - using a key-based approach avoids the effect anti-pattern
  // We track the path the menu was opened on and close if it has changed
  const [menuOpenedAt, setMenuOpenedAt] = useState<string | null>(null);

  const isMenuOpen = open && menuOpenedAt === location.pathname;

  const toggleMenu = () => {
    if (isMenuOpen) {
      setOpen(false);
      setMenuOpenedAt(null);
    } else {
      setOpen(true);
      setMenuOpenedAt(location.pathname);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Scissors className="w-5 h-5 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            Uniquelle
          </span>
          <span className="text-primary text-sm tracking-widest font-light hidden sm:block">
            SALONG
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200",
                  location.pathname === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                  link.href === "/boka" &&
                    "bg-primary text-primary-foreground px-4 py-1.5 rounded font-medium hover:opacity-90 !text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "block px-3 py-2.5 rounded text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    link.href === "/boka" &&
                      "mt-2 bg-primary text-primary-foreground text-center hover:opacity-90 !text-primary-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
