import { motion } from "framer-motion";
import iitLogo from "../assets/iit-guwahati-logo.png";
import fergussonLogo from "../assets/fergusson-college-logo.jpeg";
import SectionHeading from "./SectionHeading";

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  logo: string;
  coursework?: string[];
  subjects?: string[];
};

const items: EducationItem[] = [
  {
    degree: "Bachelors in Data Science & AI",
    school: "IIT, Guwahati",
    period: "2023 — 2027",
    logo: iitLogo,
    coursework: [
      "Machine Learning & Deep Learning",
      "Data Science & AI",
      "Big Data Analysis",
      "Recommendation Systems",
      "Data Modeling & Visualization",
      "Data Analysis",
      "Financial Portfolio Analysis",
    ],
  },
  {
    degree: "Higher Secondary (HSC) · Science with Computer Science",
    school: "Fergusson College, Pune",
    period: "2020 — 2022",
    logo: fergussonLogo,
    subjects: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
  },
];

const Chips = ({ label, values }: { label: string; values: string[] }) => (
  <div className="mt-4 pt-4 border-t border-border/60">
    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2.5">{label}</p>
    <div className="flex flex-wrap gap-1.5">
      {values.map((v) => (
        <span
          key={v}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-foreground/85 border border-border/50"
        >
          {v}
        </span>
      ))}
    </div>
  </div>
);

const Education = () => (
  <section id="education" className="relative py-10 md:py-12 lg:py-14">
    <div className="container relative">
      <SectionHeading
        eyebrow="Education"
        title="Where I learned."
        subtitle="A technical foundation in data and AI — the lens I bring to every product decision."
      />
      <div className="space-y-4">
        {items.map((it, i) => (
          <motion.div
            key={it.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-5 md:p-6"
          >
            <div className="flex items-start gap-4 md:gap-5">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white border border-border/60 flex items-center justify-center overflow-hidden p-1.5">
                <img src={it.logo} alt={`${it.school} logo`} loading="lazy" className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold leading-snug text-balance">{it.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{it.school}</p>
                </div>
                <p className="text-sm text-muted-foreground sm:text-right shrink-0 whitespace-nowrap sm:pt-0.5">{it.period}</p>
              </div>
            </div>

            {/* Full width on phones; aligned with the text column from sm up. */}
            <div className="sm:pl-[72px] md:pl-[84px]">
              {it.coursework && <Chips label="Relevant coursework" values={it.coursework} />}
              {it.subjects && <Chips label="Subjects" values={it.subjects} />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
