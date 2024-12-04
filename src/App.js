import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import AdvancedFeatures from "./components/AdvancedFeatures";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  font-family: "Inter", sans-serif;
  color: #101828;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <AdvancedFeatures />
      <FAQ />
      <Blog />
      <Footer />
    </AppContainer>
  );
}

export default App;
