import React from "react";
import FirstSection from "../components/FirstSection/FirstSection";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout/Layout";
import Navigation from "../components/navigation/navigation";

export default function IndexPage() {
  return (
    <Layout>
      <div className="hero-container">
        <Navigation />
        <Hero />
      </div>
      <FirstSection />
    </Layout>
  );
}
