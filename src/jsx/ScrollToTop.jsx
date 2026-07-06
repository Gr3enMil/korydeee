import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });

      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 50);
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
