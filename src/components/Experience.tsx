import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import airlearnLogo from "../assets/airlearn-logo.jpeg";
import physicsWallahLogo from "../assets/pw-logo.jpeg";
import protocolLabsLogo from "../assets/protocol-labs-logo.jpeg";

const experiences = [
  {
    role: "Product Manager",
    tag: "Intern",
    company: "Airlearn",
    period: "Jan 2026 — Jul 2026",
    logo: airlearnLogo,
    summary: "Drove product decisions through analytics, experimentation, and user behavior insights.",
    points: [
      "Owned product analytics for AI learning experiences, combining user feedback and behavioral data to improve engagement by 12%.",
      "Defined success metrics and analyzed feature adoption, funnels, and retention using Amplitude and Metabase to prioritize roadmap decisions and improve product performance.",
      "Planned and executed lifecycle campaigns across push notifications and email, increasing user reactivation & resurrection by 10% through cohort-based experimentation.",
      "Conducted user interviews across user segments and analyzed qualitative feedback alongside product analytics to identify friction points and validate feature hypotheses.",
    ],
  },
  {
    role: "Product Manager",
    tag: "Intern",
    company: "Physics Wallah",
    period: "June 2025 — Dec 2025",
    logo: physicsWallahLogo,
    summary: "Shipped features across a multi-product portfolio, from first idea to launch.",
    points: [
      "Led the end-to-end product lifecycle across FinTech, EdTech, Sales, and Social Media products, from ideation and user story creation to design collaboration and execution.",
      "Collaborated with cross-functional teams (engineering, design, marketing, and growth) to deliver high-impact features, improving user engagement and retention.",
      "Designed and documented PRDs, user journeys, wireframes, and prototypes, ensuring seamless communication between design and development.",
      "Conducted competitive analysis across EdTech platforms to benchmark feature sets and identify roadmap opportunities.",
    ],
  },
  {
    role: "OSS developer",
    company: "Protocol Labs (Dev guild)",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    logo: protocolLabsLogo,
    summary: "Open-source development in a decentralized, CI/CD-driven environment.",
    points: [
      "Built and collaborated in decentralized environments with setup in CI/CD flow",
      "Strengthened understanding of scalable systems and dev workflows",
    ],
  },
];

const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="work" className="relative py-10 md:py-12 lg:py-14">
      <div className="container relative">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped."
          subtitle="Product roles where I turned user data, experiments, and PRDs into features people actually use."
        />

        <div className="space-y-3">
          {experiences.map((exp, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-center gap-4 md:gap-5 sm:justify-between hover:bg-secondary/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  {/* Company Logo */}
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center overflow-hidden">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base md:text-lg font-semibold leading-tight flex flex-wrap items-center gap-x-2 gap-y-1">
                      {exp.role}
                      {"tag" in exp && (
                        <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                          {exp.tag}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.company} · {"location" in exp && `${exp.location} · `}{exp.period}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-transform duration-300 self-start sm:self-center ${
                      isOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1">
                        <p className="text-foreground/90 mb-3 text-sm md:text-base">{exp.summary}</p>
                        <ul className="space-y-2">
                          {exp.points.map((pt, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                              <span className="mt-2 w-1 h-1 rounded-full bg-foreground/60 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
