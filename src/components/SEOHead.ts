import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  robots?: string;
}

export function SEOHead({
  title,
  description,
  image,
  url,
  robots = "index, follow",
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");

        if (selector.includes("property")) {
          element.setAttribute("property", selector.split('"')[1]);
        } else {
          element.name = selector.split('"')[1];
        }

        document.head.appendChild(element);
      }

      element.content = content;
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', robots);

    setMeta('meta[property="og:type"]', "website");
    setMeta('meta[property="og:site_name"]', "Lothaire Epee Portfolio");
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    if (image) setMeta('meta[property="og:image"]', image);
    if (url) setMeta('meta[property="og:url"]', url);
    if (image)
      setMeta('meta[property="og:image:alt"]', "Preview of Lothaire Epee's portfolio website");

    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    if (image) setMeta('meta[name="twitter:image"]', image);
    if (image)
      setMeta('meta[name="twitter:image:alt"]', "Preview of Lothaire Epee's portfolio website");

    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }

      canonical.href = url;
    }
  }, [title, description, image, url, robots]);

  return null;
}
