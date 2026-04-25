import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { posts } from "@/data/posts";

const INITIAL = 3;

const Blog = () => {
  const visible = posts.slice(0, INITIAL);

  return (
    <section id="writing" className="relative py-16 md:py-20 lg:py-24">
      <div className="container relative">
        <SectionHeading
          eyebrow="Writing"
          title="Recent essays."
          subtitle="Field notes from building, branding, and the in-between."
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
                <h4 className="font-semibold leading-snug text-base md:text-lg">{p.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{p.hook}</p>
                <p className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {p.read}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {posts.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/writings"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:bg-secondary/60 hover-glow text-sm font-medium"
            >
              View More Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
