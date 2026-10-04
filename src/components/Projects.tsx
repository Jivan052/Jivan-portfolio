import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const INITIAL = 4;

const Projects = () => {
  const visible = projects.slice(0, INITIAL);

  return (
    <section id="projects" className="relative py-10 md:py-12 lg:py-14">
      <div className="container relative">
        <SectionHeading
          eyebrow="Projects"
          title="Built to understand the tech."
          subtitle="Hands-on AI tools I built end to end — so I know what's feasible, what it costs, and where it breaks before I write the PRD."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
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
