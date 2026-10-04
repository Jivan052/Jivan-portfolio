import ragLab from "@/assets/rag-lab.jpg";
import piperRube from "@/assets/piperrube.jpg";
import mailT from "@/assets/mailt.jpg";

export type Project = {
  img: string;
  title: string;
  line: string;
  highlight?: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    img: piperRube,
    title: "PiperRube — Doc Research Portal",
    line: "Point it at a list of apps and it reads their real developer docs — auth type, MCP support, gating, doc quality — then ranks which integrations are worth building first.",
    highlight: "Cut LLM token usage per app by ~79%",
    tags: ["LLM Pipelines", "FastAPI", "Web Search", "Concurrency", "OpenRouter"],
    link: "https://piper-rube.vercel.app/",
    repo: "https://github.com/Jivan052/PiperRube",
  },
  {
    img: ragLab,
    title: "General Purpose RAG Lab",
    line: "Upload a PDF, TXT or MD file and ask questions — then inspect the exact chunks retrieved and the time spent on retrieval vs. LLM generation for every answer.",
    highlight: "Makes every step of retrieval visible and measurable",
    tags: ["RAG", "Embeddings", "Qdrant", "FastAPI", "OpenRouter"],
    link: "https://general-purpose-rag.vercel.app",
    repo: "https://github.com/Jivan052/General-Purpose-RAG",
  },
  {
    img: mailT,
    title: "MailT — Email Deliverability Checker",
    line: "Verify email lists in bulk before you send — format, disposable and role-based checks, DNS/MX lookup and a live SMTP probe, with results streaming into the browser as each email completes.",
    highlight: "Validates up to 500 emails per batch with catch-all detection",
    tags: ["Node.js", "Express", "SMTP", "DNS / MX", "Streaming"],
    link: "https://mailtv.vercel.app/",
    repo: "https://github.com/Jivan052/mailt",
  },
];
