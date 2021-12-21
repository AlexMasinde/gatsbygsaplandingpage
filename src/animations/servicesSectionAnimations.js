import gsap from "gsap";
export function servicesExitTimeline(sectionRef, sectionGridRef) {
  const exitScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "30% top",
      endTrigger: sectionRef.current,
      end: "bottom 80%",
      scrub: true,
      pin: true,
      markers: true,
      pinSpacing: false,
    },
  });

  exitScrollTimeline.to(sectionGridRef.current, {
    scale: 0.5,
  });
}
