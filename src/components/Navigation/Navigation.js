import React from "react";

import {
  container,
  logo,
  appointment,
  navigation,
} from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={container}>
      <div className={navigation}>
        <p>Menu</p>
        <p>About &#38; Careers</p>
        <p>Contact</p>
      </div>
      <div className={logo}>
        <p>debonaire</p>
      </div>
      <div className={appointment}>
        <p>Book an Appointment</p>
      </div>
    </div>
  );
}
