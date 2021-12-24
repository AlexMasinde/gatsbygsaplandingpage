import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero/Hero";
import Layout from "../components/layout/Layout";
import PassionSection from "../components/PassionSection/PassionSection";
import Services from "../components/Services/Services";
import TaskSection from "../components/TaskSection/TaskSection";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/navigation/navigation";

export default function IndexPage() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <Layout>
      <Hero />
      <TaskSection />
      <PassionSection />
      <Services />
      <Footer />
    </Layout>
  );
}
