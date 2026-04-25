import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectsPage = () => (
  <main className="relative min-h-screen">
    <div className="container py-20 md:py-28">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <header className="max-w-3xl mb-12 md:mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">All work</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Projects.</h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          A complete archive of products and campaigns I've shipped.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass rounded-2xl overflow-hidden hover-glow flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3 className="text-base md:text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">{p.line}</p>
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
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </main>
);

export default ProjectsPage;
