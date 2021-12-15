import React from "react";

import {
  left,
  right,
  center,
  rightImage,
  rightText,
  grid,
  centerChild,
} from "./Hero.module.css";

import heroMain from "../../images/hero-main.png";
import heroRight from "../../images/hero-right.png";

export default function Hero() {
  return (
    <div className={grid}>
      <div className={left}>
        <h1>Hi, we are Debonaire. Ready to create an art form on your body.</h1>
      </div>
      <div className={center} style={{ backgroundImage: `url(${heroMain})` }}>
        <div className={centerChild}></div>
      </div>
      <div className={right}>
        <div
          className={rightImage}
          style={{ backgroundImage: `url(${heroRight})` }}
        ></div>
        <div className={rightText}>
          <p>A natural product-based, hair design &amp; boutique.</p>
        </div>
      </div>
    </div>
  );
}
