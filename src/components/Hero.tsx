import { motion } from "framer-motion";
import type { SVGProps } from "react";
import { MapPin, Linkedin, Github, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/profile-photo.jpeg";

// Official X (formerly Twitter) logo mark.
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
);

// Hugging Face logo mark.
const HuggingFaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.044 4.453a2.3 2.3 0 0 0-.87 1.798 2.31 2.31 0 0 0 2.31 2.31c.29 0 .566-.054.822-.15A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 6.694-2.589c.256.096.533.15.822.15a2.31 2.31 0 0 0 2.31-2.31 2.3 2.3 0 0 0-.87-1.798A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10zm-3.2 7.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm6.4 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM7.3 14.4c.2-.28.6-.34.88-.14 1.06.76 2.36 1.14 3.82 1.14s2.76-.38 3.82-1.14a.63.63 0 0 1 .88.14.63.63 0 0 1-.14.88c-1.28.92-2.82 1.38-4.56 1.38s-3.28-.46-4.56-1.38a.63.63 0 0 1-.14-.88z" />
  </svg>
);

// Kaggle logo mark.
const KaggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.335" />
  </svg>
);

const socials = [
  { Icon: XIcon, href: "https://x.com/JivanJamadar", label: "X" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jivan-jamdar/", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/Jivan052", label: "GitHub" },
  { Icon: HuggingFaceIcon, href: "https://huggingface.co/Jivan01", label: "Hugging Face" },
  { Icon: KaggleIcon, href: "https://www.kaggle.com/jivan1234", label: "Kaggle" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pb-16">
      <div className="container relative">
        {/* Cinematic banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[21/8] md:aspect-[21/7] lg:aspect-[24/7] max-h-[420px] rounded-3xl overflow-hidden shadow-soft"
        >
          <img
            src={heroBg}
            alt="Cinematic landscape with a path leading toward the horizon"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/40" />
        </motion.div>

        {/* Avatar + socials */}
        <div className="relative -mt-16 md:-mt-20 flex items-end justify-between gap-4 px-2 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-40 -z-10" />
            <img
              src={avatar}
              alt="Jivan Jamdar"
              width={512}
              height={512}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-background shadow-soft"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:flex items-center gap-2"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover-glow"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 px-2 md:px-6 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Jivan Jamdar
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">
            Product@<span className="text-foreground/80">Airlearn | IIT,Guwahati</span>
          </p>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Building data-driven products at the intersection of <span className="text-foreground">AI, growth,</span> and <span className="text-foreground">user behavior</span>
           .{" "}
            Focused on turning insights into experiences that actually move metrics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/JivanResume-Product.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover-glow"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bangalore, Karnataka
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-success" />
              </span>
              Open to work
            </span>

            <div className="flex sm:hidden items-center gap-2 ml-auto">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
