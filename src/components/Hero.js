import React from "react";
import styled from "styled-components";
import heroImg from "../assets/hero.png";
import leftImg from "../assets/left-image.png"; // Import the new image

const HeroContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
  text-align: center;
  position: relative; /* To position the images correctly */
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #101828;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #667085;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #7f56d9;
  color: white;
  border: none;

  &:hover {
    background-color: #6941c6;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #7f56d9;
  border: 1px solid #7f56d9;

  &:hover {
    background-color: #f9f5ff;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MainImage = styled.img`
  width: 600px;
  height: 400px;
  border-radius: 8px;
  border: 5px solid black; /* Added black border */
`;

const LeftImage = styled.img`
  position: absolute;
  top: 10%; /* Leave 10% from the top of the hero image */
  left: -10%; /* Cover 10% of the main image's width */
  width: 20%; /* Adjust the size of the left image */
  border: 5px solid black; /* Add a black border for visibility */
  border-radius: 8px;
`;

const CompaniesSection = styled.div`
  margin-top: 2rem;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Beautiful analytics to grow smarter</HeroTitle>
      <HeroSubtitle>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </HeroSubtitle>
      <ButtonGroup>
        <PrimaryButton>Demo</PrimaryButton>
        <SecondaryButton>Sign up</SecondaryButton>
      </ButtonGroup>
      <ImageWrapper>
        {/* Main image */}
        <MainImage src={heroImg} alt="Hero image" />
        {/* Left image overlapping the hero image */}
        <LeftImage src={leftImg} alt="Decorative image on the left" />
      </ImageWrapper>
      <CompaniesSection>
        <p>Join 4,000+ companies already growing</p>
        {/* Add company logos here */}
      </CompaniesSection>
    </HeroContainer>
  );
}

export default Hero;
