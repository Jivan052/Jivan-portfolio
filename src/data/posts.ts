import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

export type Post = {
  img: string;
  title: string;
  hook: string;
  read: string;
  link?: string;
};

export const posts: Post[] = [
  {
    img: b1,
    title: "The Hack Hacker",
    hook: "On hacking, craft, and culture.",
    read: "5mins read",
    link: "https://thinkerwithme.blogspot.com/2025/03/the-hack-hacker.html",
  },
  {
    img: b2,
    title: "It's Onchain Island",
    hook: "Reflections on on-chain worlds and communities.",
    read: "5mins read",
    link: "https://thinkerwithme.blogspot.com/2025/09/its-onchain-island.html",
  },
];
