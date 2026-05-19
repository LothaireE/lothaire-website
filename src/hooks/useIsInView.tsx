import { useEffect, useState } from "react";

export const useIsInView = (id: string) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        // root: null,
        // rootMargin: "0px",
        threshold: 0.1,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return isVisible;
};
