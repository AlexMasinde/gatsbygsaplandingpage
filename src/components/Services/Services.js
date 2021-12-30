import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import servicesRightImage from "../../images/servicesRight.png";
import servicesLeftImage from "../../images/servicesLeft.png";
import servicesCenterImage from "../../images/servicesCenter.png";

import {
  container,
  servicesLeft,
  servicesCenter,
  servicesRight,
  servicesGrid,
  servicesHeader,
  servicesCenterText,
} from "./Services.module.css";

import { servicesExitTimeline } from "../../animations/servicesSectionAnimations";

export default function Services() {
  const sectionRef = useRef();
  const sectionGridRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    servicesExitTimeline(sectionRef, sectionGridRef);
  });

  return (
    <div ref={sectionRef} className={container}>
      <div className={servicesHeader}>
        <h3>Our Services</h3>
      </div>
      <div ref={sectionGridRef} className={servicesGrid}>
        <div
          className={servicesLeft}
          style={{ backgroundImage: `url(${servicesLeftImage})` }}
        ></div>
        <div
          className={servicesCenter}
          style={{ backgroundImage: `url(${servicesCenterImage})` }}
        >
          <div className={servicesCenterText}>
            <h3>We create a customized new look for you.</h3>
            <p>See Our Menu</p>
          </div>
        </div>
        <div
          className={servicesRight}
          style={{ backgroundImage: `url(${servicesRightImage})` }}
        ></div>
      </div>
    </div>
  );
}
