import { gsap } from "gsap";
export function exitAnimation(sectionRef, sectionGridRef) {
  const exitScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "5% top",
      endTrigger: sectionRef.current,
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  exitScrollTimeline.to(
    sectionRef.current,
    {
      backgroundColor: "#c2b8cc",
    },
    "start"
  );

  exitScrollTimeline.to(
    sectionGridRef.current,
    {
      scale: 1.5,
      y: "20vh",
    },
    "start"
  );
  return exitScrollTimeline;
}
