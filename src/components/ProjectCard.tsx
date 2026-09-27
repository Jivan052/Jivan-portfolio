import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project: p, index }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="group glass rounded-2xl overflow-hidden hover-glow flex flex-col h-full"
  >
    <a
      href={p.link || p.repo || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.title}`}
      className="relative block aspect-[16/10] overflow-hidden bg-secondary/40 border-b border-border/60"
    >
      <img
        src={p.img}
        alt={`${p.title} screenshot`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />
    </a>

    <div className="p-5 md:p-6 flex flex-col flex-1">
      <h3 className="text-lg md:text-xl font-semibold leading-snug">{p.title}</h3>
      <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{p.line}</p>

      {p.highlight && (
        <p className="mt-4 inline-flex items-start gap-2 text-sm text-foreground/90">
          <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
          {p.highlight}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 flex flex-wrap gap-2">
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Live demo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
