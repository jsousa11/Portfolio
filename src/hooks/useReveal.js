import { useEffect } from "react";

// Watches every [data-reveal] element and marks it [data-visible] the first
// time it scrolls into view, which triggers the CSS fade/slide in App.css.
const useReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            elements.forEach(el => el.setAttribute("data-visible", ""));
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    el.setAttribute("data-visible", "");
                    el.addEventListener("transitionend", () => el.setAttribute("data-settled", ""), { once: true });
                    observer.unobserve(el);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
};

export default useReveal;
