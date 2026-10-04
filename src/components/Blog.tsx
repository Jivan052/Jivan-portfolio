import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { posts } from "@/data/posts";

const INITIAL = 3;

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? posts : posts.slice(0, INITIAL);

  return (
    <section id="writing" className="relative py-10 md:py-12 lg:py-14">
      <div className="container relative">
        <SectionHeading
          eyebrow="Case studies"
          title="Product thinking, written down."
          subtitle="Real problems broken down — the reasoning, the trade-offs, and the metrics that decide whether it worked."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <CaseStudyCard key={p.title} post={p} index={i % INITIAL} />
          ))}
        </div>

        {posts.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:bg-secondary/60 hover-glow text-sm font-medium"
            >
              {showAll ? "Show Less" : "View More Case Studies"}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
