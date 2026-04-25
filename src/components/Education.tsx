import { motion } from "framer-motion";
import iitLogo from "../assets/iit-guwahati-logo.png";
import fergussonLogo from "../assets/fergusson-college-logo.jpeg";
import SectionHeading from "./SectionHeading";

const items = [
  {
    degree: "Bachelors in Data Science & AI",
    school: "IIT, Guwahati",
    period: "2023 — 2027",
    logo: iitLogo,
  },
  {
    degree: "Higher Secondary Education",
    school: "Fegusson College, Pune",
    period: "2020 — 2022",
    logo: fergussonLogo,
  },
];

const Education = () => (
  <section id="education" className="relative py-16 md:py-20 lg:py-24">
    <div className="container relative">
      <SectionHeading eyebrow="Education" title="From where I educated." />
      <div className="space-y-4">
        {items.map((it, i) => (
          <motion.div
            key={it.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 md:p-6 flex items-center gap-4 md:gap-5"
          >
            {/* Logo */}
            <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary/60 border border-border/60 flex items-center justify-center overflow-hidden">
              <img src={it.logo} alt={`${it.school} logo`} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-semibold leading-tight">{it.degree}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{it.school}</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-right shrink-0">{it.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
