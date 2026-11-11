import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
    // Show the button once the page has scrolled past 560px
    useEffect(() => {
        const onScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (!scrollUp) return;
            scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scroll__icon"></i>
        </a>
    )
}

export default ScrollUp;
