import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

export type Post = {
  img: string;
  title: string;
  hook: string;
  read: string;
};

export const posts: Post[] = [
  {
    img: b1,
    title: "The end of the always-on creator economy",
    hook: "Why the next generation of creators will look more like studios than influencers.",
    read: "8 min read",
  },
  {
    img: b2,
    title: "What AI agents will do to brand work",
    hook: "A field guide for marketers who want to stay relevant in the next five years.",
    read: "6 min read",
  },
  {
    img: b3,
    title: "Notes on quiet ambition",
    hook: "On building patiently in a world that rewards loud, fast, and scaled.",
    read: "4 min read",
  },
];
