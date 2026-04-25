import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import avatar from "@/assets/profile-photo.jpeg";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#writing", label: "Writings" },
  { href: "#contact", label: "Connect" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-4 z-50 flex justify-center items-center gap-3"
    >
      <nav
        className={`glass rounded-2xl pl-2 pr-2 h-12 flex items-center gap-2 lg:gap-4 transition-all duration-500 max-w-full ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 pr-2 lg:pr-3 lg:border-r border-border/60 shrink-0">
          <img
            src={avatar}
            alt="Jivan Jamdar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium text-sm pr-1 hidden sm:inline">Jivan Jamdar</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="glass w-12 h-12 rounded-2xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shrink-0"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-14 inset-x-0 glass-strong rounded-2xl p-3 flex flex-col gap-1 shadow-soft"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;