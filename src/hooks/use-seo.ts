import { useEffect } from "react";

const SITE_URL = "https://www.jivanjamdar.xyz";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type SEOOptions = {
  title: string;
  description: string;
  /** Path portion of the canonical URL, e.g. "/projects". Defaults to "/". */
  path?: string;
  image?: string;
};

/** Sets or updates a <meta> tag by name or property attribute. */
const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Keeps title, description, canonical, and social tags in sync per route.
 * This is a client-side SPA, so these help Google (which renders JS), browser
 * tabs, and bookmarks. Purely-static social scrapers still read index.html.
 */
export const useSEO = ({ title, description, path = "/", image = DEFAULT_IMAGE }: SEOOptions) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, image]);
};
