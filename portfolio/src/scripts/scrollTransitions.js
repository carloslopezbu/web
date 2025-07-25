import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollTransitions() {
  // Fade y escala del Hero
  gsap.to("#hero", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    opacity: 0.2,
    scale: 0.97,
    ease: "power1.out",
  });

  // Entrada suave del Timeline
  gsap.from("#trayectory", {
    scrollTrigger: {
      trigger: "#trayectory",
      start: "top 55%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
  });
}
