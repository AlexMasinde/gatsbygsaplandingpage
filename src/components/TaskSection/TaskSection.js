import React, { useEffect, useRef } from "react";

import { exitAnimation } from "../../animations/taskSectionAnimations";

import imageLeft from "../../images/taskleft.png";

import { container, left, center, sectionGrid } from "./TaskSection.module.css";

export default function TaskSection() {
  const sectionGridRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const scrollOut = exitAnimation(sectionRef, sectionGridRef);
    return () => {
      scrollOut.kill();
    };
  });

  return (
    <div ref={sectionRef} className={container}>
      <div ref={sectionGridRef} className={sectionGrid}>
        <div
          className={left}
          style={{ backgroundImage: `url(${imageLeft})` }}
        ></div>
        <div className={center}>
          <h3>We love what we do. We are up to the task.</h3>
          <p>
            Cuts tailor made for your hair, making it easy for you to recreate
            your look every day. Debonaire team, makes you feel happy at ease
            and work with you to make you your most lovely.
          </p>
        </div>
      </div>
    </div>
  );
}
