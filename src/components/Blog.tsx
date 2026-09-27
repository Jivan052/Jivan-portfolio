import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { posts } from "@/data/posts";

const INITIAL = 4;

const Blog = () => {
  const visible = posts.slice(0, INITIAL);

  return (
    <section id="writing" className="relative py-10 md:py-12 lg:py-14">
      <div className="container relative">
        <SectionHeading
          eyebrow="Case studies"
          title="Product thinking, written down."
          subtitle="Real problems broken down — the reasoning, the trade-offs, and the metrics that decide whether it worked."
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {visible.map((p, i) => (
            <CaseStudyCard key={p.title} post={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
