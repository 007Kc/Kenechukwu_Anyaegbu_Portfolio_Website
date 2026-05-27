import { useEffect, useState, RefObject } from "react";

export function useInView(
  ref: RefObject<Element | null>,
  threshold = 0.1
): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
