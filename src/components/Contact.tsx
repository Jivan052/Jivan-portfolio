import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="relative py-12 md:py-16">
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden text-center"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial opacity-80 pointer-events-none" />
        <div className="relative">
          <span className="text-xs uppercase tracking-[0.2em] text-primary/80">Let's talk</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Let's build something <span className="text-gradient">meaningful</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Always open to interesting conversations — collaborations, advisory, or just trading notes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@joestewart.co"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium hover-glow"
            >
              <Mail className="w-4 h-4" />
              jamadarjivan01@gmail.com
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass text-foreground hover:bg-secondary/60 transition-colors"
            >
              Let's connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-8 pt-4 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jivan Jamdar. All rights reserved.</p>
        <p>Made with ❤️</p>
      </footer>
    </div>
  </section>
);

export default Contact;
