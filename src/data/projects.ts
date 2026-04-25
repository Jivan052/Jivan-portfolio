import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export type Project = {
  img: string;
  title: string;
  line: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    img: p1,
    title: "NuroTrader (web3 SaaS)",
    line: "FAutonomous trading powered by AI + account abstraction.",
    tags: ["Strategy", "React (TS)", "Ether.js", "LLM", "MongoDB"],
  },
];
