import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Technical Skills",
    items: ["Product Development & Management", "Product Analytics", "Data Analysis", "User Research", "Experimentation", "Consumer Product", "UI/UX Design", "Risk Management", "AI Automation", "Claude", "REST APIs", "SQL (MySQL, Postgres)", "Python (FastAPI)", "Web (HTML, CSS, JS, React)", "Node.js", "Express.js", "Prisma ORM", "Git & GitHub", "C/C++", "Fundamental Analysis", "Trading"],
  },
  {
    title: "Tools",
    items: ["Amplitude", "Mixpanel", "Metabase", "CleverTap", "MoEngage", "Jira", "Notion", "Slack", "Figma", "Wireframing", "Canva", "Power BI", "Excel", "Zapier", "MCP", "Gmail Automation", "DataStax"],
  },
  {
    title: "AI Skills",
    items: ["LLM Pipelines & Orchestration", "Embeddings", "RAG", "Prompt Engineering", "Agents", "Fine-tuning"],
  },
  {
    title: "Soft Skills",
    items: ["Effective Communication", "Project Management", "Strategy & Execution", "Strategic Thinking", "Leadership", "Branding", "Product Design & Development", "Business Intelligence"],
  },
];

const Skills = () => (
  <section id="skills" className="relative py-10 md:py-12 lg:py-14">
    <div className="container relative">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & technologies."
        subtitle="What I reach for when shipping ideas — kept lean, kept sharp."
      />
      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 md:p-7"
          >
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-4">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-secondary/60 text-foreground/90 border border-border/50 hover:border-foreground/40 hover:text-foreground hover:shadow-glow transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
