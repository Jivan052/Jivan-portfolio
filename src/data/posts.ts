import llmTokens from "@/assets/case-llm-tokens.jpg";
import qCommerce from "@/assets/case-qcommerce.jpg";

export type Post = {
  img: string;
  tag: string;
  title: string;
  hook: string;
  read: string;
  link?: string;
};

export const posts: Post[] = [
  {
    img: llmTokens,
    tag: "AI · Cost optimization",
    title: "We Were Burning Money on LLM Tokens. Here's How We Fixed It.",
    hook: "Tracing every call in an LLM research pipeline — and cutting usage from ~8,000 to ~1,700 tokens per app by skipping calls, not just shrinking them.",
    read: "5 min read",
    link: "https://medium.com/@jamadarjivan01/we-were-burning-money-on-llm-tokens-heres-how-we-fixed-it-eb0981988e13",
  },
  {
    img: qCommerce,
    tag: "Q-Commerce · Feature design",
    title: "Post-Payment Forgotten Items: Flipkart Minutes",
    hook: "Letting customers add a forgotten item after paying — by merging orders while the first is still being packed. Same rider, same trip, no second fee.",
    read: "3 min read",
    link: "https://medium.com/@jamadarjivan01/post-payment-forgotten-items-q-commerce-flipkart-minutes-5ba5966637ca",
  },
];
