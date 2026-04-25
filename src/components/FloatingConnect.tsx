import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Twitter, href: "#", label: "X" },
  { Icon: Mail, href: "mailto:hello@joestewart.co", label: "Email" },
];

const FloatingConnect = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const lastY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? y / docH : 0;
      const now = Date.now();
      const dt = now - lastTime.current;
      const dy = y - lastY.current;
      const velocity = dt > 0 ? dy / dt : 0; // px/ms

      // Hide on fast downward scroll, show on upward / slow
      if (pct < 0.25) {
        setVisible(false);
      } else if (velocity > 1.2) {
        setVisible(false);
      } else if (velocity < -0.1 || Math.abs(velocity) < 0.4) {
        setVisible(true);
      }

      lastY.current = y;
      lastTime.current = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-50 bottom-4 inset-x-4 md:inset-x-auto md:bottom-6 md:right-6"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <motion.div
            layout
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl shadow-soft hover:shadow-glow transition-shadow duration-500 px-3 py-2.5 md:py-2 flex items-center justify-between md:justify-start gap-3 md:gap-2 w-full md:w-auto bg-foreground text-background border border-foreground/10 backdrop-blur-xl"
          >
            <motion.span
              layout
              className="text-sm font-medium px-2 md:pr-1 whitespace-nowrap"
            >
              Let's Connect
            </motion.span>
            <motion.div layout className="flex items-center gap-1">
              {items.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: expanded || (typeof window !== "undefined" && window.innerWidth < 768) ? 1 : i === 0 ? 1 : 0.75,
                    scale: 1,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-9 h-9 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/80 hover:text-background transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingConnect;
