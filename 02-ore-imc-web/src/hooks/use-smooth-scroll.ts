import { useCallback } from "react";

interface UseSmoothScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

/**
 * Custom hook for smooth scrolling with fixed header offset
 *
 * @param options.offset - Offset from top (default: 80px for fixed header)
 * @param options.behavior - Scroll behavior (default: 'smooth')
 *
 * @example
 * const { scrollTo } = useSmoothScroll({ offset: 80 });
 * <button onClick={() => scrollTo('contact')}>Contact</button>
 */
const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const { offset = 80, behavior = "smooth" } = options;

  const scrollTo = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
      }
    },
    [offset, behavior]
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);

  return { scrollTo, scrollToTop };
};

export default useSmoothScroll;
