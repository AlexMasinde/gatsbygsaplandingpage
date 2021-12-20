import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero/Hero";
import Layout from "../components/layout/Layout";
import Navigation from "../components/navigation/navigation";
import PassionSection from "../components/PassionSection/PassionSection";
import Services from "../components/Services/Services";
import TaskSection from "../components/TaskSection/TaskSection";
import Footer from "../components/Footer/Footer";

export default function IndexPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <Layout>
      <div className="hero-container">
        <Navigation />
        <Hero />
      </div>
      <TaskSection />
      <Services />
      <PassionSection />
      <Footer />
    </Layout>
  );
}
