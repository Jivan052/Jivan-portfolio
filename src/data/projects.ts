import p1 from "@/assets/nurotrader.png";
import p2 from "@/assets/angsync.png";
import p3 from "@/assets/mailt.png";

export type Project = {
  img: string;
  title: string;
  line: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
   {
    img: p3,
    title: "MailT",
    line: "Realtime email verification tool at SCALE",
    tags: ["SMTP", "REST API", "Realtime"],
    link: "https://mailtv.vercel.app/",
  },
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
];
