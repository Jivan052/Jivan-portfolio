import llmTokens from "@/assets/case-llm-tokens.jpg";
import qCommerce from "@/assets/case-qcommerce.jpg";
import vera from "@/assets/case-vera.jpg";
import systems from "@/assets/case-systems.jpg";
import money from "@/assets/case-money.jpg";

export type Post = {
  img: string;
  tag: string;
  title: string;
  hook: string;
  read: string;
  source: string;
  cta?: string;
  link?: string;
};

export const posts: Post[] = [
  {
    img: vera,
    tag: "FinTech · Lifecycle campaign",
    title: "Vera: Getting Customers to Activate Their Credit Card",
    hook: "Customers received their card but didn't activate it within 48 hours. A 7-day, segment-based push, email and SMS journey — with a \"didn't receive it?\" path and a 20% holdout to prove the lift.",
    read: "6 pages",
    source: "PDF",
    link: "https://drive.google.com/file/d/1LQFMefrZccGzesAbYpxzI_eRCgKcH0Rm/view?usp=sharing",
  },
  {
    img: qCommerce,
    tag: "Q-Commerce · Feature design",
    title: "Post-Payment Forgotten Items: Flipkart Minutes",
    hook: "Letting customers add a forgotten item after paying — by merging orders while the first is still being packed. Same rider, same trip, no second fee.",
    read: "3 min read",
    source: "Medium",
    link: "https://medium.com/@jamadarjivan01/post-payment-forgotten-items-q-commerce-flipkart-minutes-5ba5966637ca",
  },
  {
    img: llmTokens,
    tag: "AI · Cost optimization",
    title: "We Were Burning Money on LLM Tokens. Here's How We Fixed It.",
    hook: "Tracing every call in an LLM research pipeline — and cutting usage from ~8,000 to ~1,700 tokens per app by skipping calls, not just shrinking them.",
    read: "5 min read",
    source: "Medium",
    link: "https://medium.com/@jamadarjivan01/we-were-burning-money-on-llm-tokens-heres-how-we-fixed-it-eb0981988e13",
  },
  {
    img: systems,
    tag: "Systems · Interactive lab",
    title: "See How Systems Work",
    hook: "Hands-on labs that show how real backends behave. Fire requests through a toy client → gateway → servers → database stack and watch threads fill, queues build, servers autoscale and a circuit breaker trip.",
    read: "Interactive",
    source: "Live lab",
    cta: "Open the lab",
    link: "https://claude.ai/artifact/M1T8Fn5iECmim6n33bfanB",
  },
  {
    img: money,
    tag: "FinTech · Interactive guide",
    title: "Money, Plainly",
    hook: "A beginner's guide to saving, investing and trading in plain words — FDs, PPF, bonds, mutual funds and SIPs, then stocks, futures and options, with a live trading lab and an interactive risk-return map.",
    read: "Interactive",
    source: "Live guide",
    cta: "Open the guide",
    link: "https://claude.ai/artifact/HEknurUQ2GimHUvqww2gQM",
  },
];
