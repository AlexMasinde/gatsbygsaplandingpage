import React, { useEffect, useRef } from "react";

import passionsRightImage from "../../images/passionsRight.png";
import passionsLeftImage from "../../images/passionsLeft.png";
import passionsCenterImage from "../../images/passionsCenter.png";

import {
  container,
  passionsGrid,
  passionsLeft,
  passionsRight,
  passionsCenter,
  passionsCenterText,
} from "./PassionSection.module.css";
import { passionSectionExitAnimation } from "../../animations/passionSectionAnimations";

export default function PassionSection() {
  const sectionGridRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const scrollOut = passionSectionExitAnimation(sectionRef, sectionGridRef);
    return () => scrollOut.kill();
  });

  return (
    <div ref={sectionRef} className={container}>
      <div ref={sectionGridRef} className={passionsGrid}>
        <div
          className={passionsLeft}
          style={{ backgroundImage: `url(${passionsLeftImage})` }}
        ></div>
        <div
          className={passionsCenter}
          style={{ backgroundImage: `url(${passionsCenterImage})` }}
        >
          <div className={passionsCenterText}>
            <h3>Let&apos;s make you your best self.</h3>
            <p>Book an Appoitment</p>
          </div>
        </div>
        <div
          className={passionsRight}
          style={{ backgroundImage: `url(${passionsRightImage})` }}
        ></div>
      </div>
    </div>
  );
}
