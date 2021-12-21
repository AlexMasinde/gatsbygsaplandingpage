import { gsap } from "gsap";

export function passionSectionExitAnimation(sectionRef, sectionGridRef) {
  const entryScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "30% top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });
  entryScrollTimeline.to(
    sectionRef.current,
    {
      backgroundColor: "#dfccc2",
    },
    "start"
  );
  entryScrollTimeline.to(
    sectionGridRef.current,
    {
      scale: 1.5,
    },
    "start"
  );
}
