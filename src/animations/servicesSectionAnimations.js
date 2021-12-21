import gsap from "gsap";
export function servicesExitTimeline(sectionRef, sectionGridRef) {
  const exitScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "5% top",
      endTrigger: sectionRef.current,
      end: "bottom top",
      scrub: true,
    },
  });

  exitScrollTimeline.to(sectionGridRef.current, {
    scale: 0.5,
  });
  exitScrollTimeline.to(sectionRef.current, {
    backgroundColor: "#000000",
  });
}
