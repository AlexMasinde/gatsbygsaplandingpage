import React from "react";

import imageLeft from "../../images/taskleft.png";
import imageRightBottom from "../../images/taskrightbottom.png";

import { container, left, center, sectionGrid } from "./TaskSection.module.css";

export default function TaskSection() {
  return (
    <div className={container}>
      <div className={sectionGrid}>
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
