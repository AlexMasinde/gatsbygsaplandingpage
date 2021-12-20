import React from "react";

import {
  container,
  social,
  careers,
  socialContainer,
  content,
} from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={container}>
      <div className={content}>
        <div className={socialContainer}>
          <div>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className={social}>
            <p>Instagram</p>
            <p>facebook</p>
          </div>
        </div>
        <div className={careers}>
          <p>We invite you to join our team.</p>
          <p>Apply Now</p>
        </div>
      </div>
    </div>
  );
}
