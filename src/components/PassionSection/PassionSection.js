import React from "react";

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

export default function PassionSection() {
  return (
    <div className={container}>
      <div className={passionsGrid}>
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
