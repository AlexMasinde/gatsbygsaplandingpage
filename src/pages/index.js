import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout/Layout";
import Navigation from "../components/navigation/navigation";
import Services from "../components/Services/Services";
import TaskSection from "../components/TaskSection/TaskSection";

export default function IndexPage() {
  return (
    <Layout>
      <div className="hero-container">
        <Navigation />
        <Hero />
      </div>
      <TaskSection />
      <Services />
    </Layout>
  );
}
