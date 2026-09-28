import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Post } from "@/data/posts";

interface CaseStudyCardProps {
  post: Post;
  index: number;
}

const CaseStudyCard = ({ post: p, index }: CaseStudyCardProps) => (
  <motion.a
    href={p.link || "#"}
    target={p.link ? "_blank" : undefined}
    rel={p.link ? "noopener noreferrer" : undefined}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="group glass rounded-2xl overflow-hidden hover-glow flex flex-col h-full"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40 border-b border-border/60">
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />
    </div>
    <div className="p-5 md:p-6 flex flex-col flex-1">
      <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{p.tag}</span>
      <h3 className="mt-2 font-semibold leading-snug text-lg md:text-xl">{p.title}</h3>
      <p className="text-sm md:text-[15px] text-muted-foreground mt-2 leading-relaxed">{p.hook}</p>
      <div className="mt-auto pt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3 h-3" /> {p.read} · {p.source}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
          Read case study
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  </motion.a>
);

export default CaseStudyCard;
