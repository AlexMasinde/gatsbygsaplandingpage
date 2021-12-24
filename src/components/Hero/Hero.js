import React, { useLayoutEffect, useRef } from "react";

import { heroEntry, heroExit } from "../../animations/heroAnimations";

import Navigation from "../navigation/navigation";

import {
  left,
  right,
  center,
  rightImage,
  rightText,
  grid,
  centerChild,
  heroContainer,
} from "./Hero.module.css";

import heroMain from "../../images/hero-main.png";
import heroRight from "../../images/hero-right.png";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const gridRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const navigationRef = useRef();
  const heroMainRef = useRef();

  useLayoutEffect(() => {
    if (!isMobile) {
      heroEntry(leftRef, rightRef, navigationRef);
      const animation = heroExit(gridRef, heroMainRef);
      return () => animation.kill();
    }
  });

  return (
    <div ref={heroMainRef} className={heroContainer}>
      <div ref={navigationRef}>
        <Navigation />
      </div>
      <div ref={gridRef} className={grid}>
        <div ref={leftRef} className={left}>
          <h1>
            Hi, we are Debonaire. Ready to create an art form on your body.
          </h1>
        </div>
        <div className={center} style={{ backgroundImage: `url(${heroMain})` }}>
          <div className={centerChild}></div>
        </div>
        <div ref={rightRef} className={right}>
          <div
            className={rightImage}
            style={{ backgroundImage: `url(${heroRight})` }}
          ></div>
          <div className={rightText}>
            <p>A natural product-based, hair design &amp; boutique.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
