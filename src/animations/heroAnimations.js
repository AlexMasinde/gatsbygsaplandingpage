import { gsap } from "gsap";

export function heroEntry(leftRef, rightRef, navigationRef) {
  const testTimeLine = gsap.timeline();
  testTimeLine.from(
    leftRef.current,
    {
      x: "-10%",
    },
    "start"
  );
  testTimeLine.from(
    rightRef.current,
    {
      x: "10%",
    },
    "start"
  );
  gsap.from(navigationRef.current, {
    y: "5px",
    opacity: 0,
    delay: 0.5,
  });
}

export function heroExit(gridRef, heroMainRef) {
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: heroMainRef.current,
      start: "10% top",
      endTrigger: heroMainRef.current,
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });
  scrollTimeline.to(
    heroMainRef.current,
    {
      duration: 0.1,
      backgroundColor: "#c5cebd",
    },
    "start"
  );

  scrollTimeline.to(
    gridRef.current,
    {
      y: "20vh",
      scale: 1.5,
    },
    "start"
  );
  return scrollTimeline;
}
