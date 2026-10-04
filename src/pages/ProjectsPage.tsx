import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useSEO } from "@/hooks/use-seo";

const ProjectsPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  useSEO({
    title: "Projects — Jivan Jamdar",
    description:
      "AI tools Jivan Jamdar has built end to end — RAG pipelines, LLM research agents, and cost-optimized LLM workflows.",
    path: "/projects",
  });

  return (
  <main className="relative min-h-screen">
    <div className="container py-20 md:py-28">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <header className="max-w-3xl mb-12 md:mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">All projects</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Projects.</h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          AI tools I've built end to end to understand the tech behind the products I manage.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </main>
  );
};

export default ProjectsPage;
