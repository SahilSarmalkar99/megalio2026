// hooks/useReveal.js

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export const useReveal = (selector, options = {}) => {
  useEffect(() => {
    // =========================
    // LENIS SMOOTH SCROLL
    // =========================
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll.instance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.refresh();

    // =========================
    // REVEAL ANIMATION
    // =========================
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: options.y || 80,
          opacity: 0,
          scale: options.scale || 1,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: options.duration || 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start || "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
};
