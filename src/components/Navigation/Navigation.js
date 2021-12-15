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
        <p>Menus</p>
        <p>About &amp; Careers</p>
        <p>Menus</p>
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
