import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { posts } from "@/data/posts";
import { useSEO } from "@/hooks/use-seo";

const WritingsPage = () => {
  useSEO({
    title: "Case Studies — Jivan Jamdar",
    description:
      "Product case studies by Jivan Jamdar — LLM cost optimization, q-commerce feature design, and the trade-offs behind them.",
    path: "/writings",
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
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">All case studies</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Case studies.</h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          Real product problems broken down — the reasoning, the trade-offs, and the metrics.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {posts.map((p, i) => (
          <CaseStudyCard key={p.title} post={p} index={i} />
        ))}
      </div>
    </div>
  </main>
  );
};

export default WritingsPage;
