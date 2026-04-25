import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

const INITIAL = 3;

const Projects = () => {
  const visible = projects.slice(0, INITIAL);

  return (
    <section id="projects" className="relative py-16 md:py-20 lg:py-24">
      <div className="container relative">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects I'm proud of."
          subtitle="A handful of products and campaigns where craft, story, and impact came together."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass rounded-2xl overflow-hidden hover-glow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                  {p.line}
                </p>
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

        {projects.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:bg-secondary/60 hover-glow text-sm font-medium"
            >
              View More Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;