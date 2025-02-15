import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // ✅ První pokus
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });

            // ✅ Druhý pokus po krátké době (pro případ, že první selže)
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 50);
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
