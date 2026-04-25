import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";

const WritingsPage = () => (
  <main className="relative min-h-screen">
    <div className="container py-20 md:py-28">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <header className="max-w-3xl mb-12 md:mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">All essays</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Writings.</h1>
        <p className="mt-4 text-muted-foreground text-base md:text-lg">
          Field notes from building, branding, and the in-between.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {posts.map((p, i) => (
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
    </div>
  </main>
);

export default WritingsPage;
