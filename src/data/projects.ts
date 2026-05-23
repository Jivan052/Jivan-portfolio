import p1 from "@/assets/project-1.jpeg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export type Project = {
  img: string;
  title: string;
  line: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    img: p1,
    title: "NuroTrader (web3 SaaS)",
    line: "Autonomous trading powered by AI + account abstraction.",
    tags: ["Strategy", "React (TS)", "Ether.js", "LLM", "MongoDB"],
    link: "https://nurotrader.vercel.app/",
  },
  {
    img: p2,
    title: "AngsNYC — Realtime Visual Sync",
    line: "Realtime visual sync and free YouTube playlist where both people can see, interact and sync with each other with ultra-low latency.",
    tags: ["Realtime", "Sync", "WebRTC"],
    link: "https://angsnyc-3.onrender.com/",
  },
  {
    img: p3,
    title: "QueryBeeAI",
    line: "Realtime agentic data analysis tool combining AI and manual tools to eliminate multi-source data processing and analysis.",
    tags: ["AI", "Data", "Realtime"],
    link: "https://querybeeai.vercel.app/",
  },
];
