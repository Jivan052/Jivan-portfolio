import { motion } from "framer-motion";
import type { SVGProps } from "react";
import { MapPin, Twitter, Linkedin, Github, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/profile-photo.jpeg";

const HuggingFaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="8.5" cy="9" r="1.2" />
    <circle cx="15.5" cy="9" r="1.2" />
    <path d="M7 15.5c1.5 1.5 4.5 1.5 6 0" />
  </svg>
);

const KaggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 5h7a3 3 0 0 1 0 6H7v8" />
    <path d="M14 13a3 3 0 1 0 0 6" />
  </svg>
);

const socials = [
  { Icon: Twitter, href: "https://x.com/JivanJamadar", label: "X" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jivan-jamdar/", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
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
              href="/resume.pdf"
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
