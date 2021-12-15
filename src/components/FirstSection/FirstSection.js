import React from "react";

import sectionLeft from "../../images/first-section-left.png";
import sectionRight from "../../images/first-section-right.png";
// import svgLeft from '../../images/first-section-svgleft.svg'
// import svgRight from '../../images/first-section-svgright.svg'

import {
  container,
  sectionGrid,
  left,
  center,
  right,
} from "./FirstSection.module.css";

export default function FirstSection() {
  return (
    <div className={container}>
      <div className={sectionGrid}>
        <div
          className={left}
          style={{ backgroundImage: `url(${sectionLeft})` }}
        ></div>
        <div className={center}>
          <h3>We're focused</h3>
          <p>
            We provide an exceptional service by only focusing on hair
            designing. Our goal is to provide a different type of experience by
            using responsible products.
          </p>
        </div>
        <div
          className={right}
          style={{ backgroundImage: `url(${sectionRight})` }}
        ></div>
      </div>
    </div>
  );
}
