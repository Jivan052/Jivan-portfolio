import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="max-w-2xl mb-12 md:mb-16"
  >
    {eyebrow && (
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
