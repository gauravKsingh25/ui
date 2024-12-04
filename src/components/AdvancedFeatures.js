import React from "react";
import styled from "styled-components";

const AdvancedFeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const AdvancedFeaturesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const AdvancedFeaturesSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #667085;
  margin-bottom: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureItem = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 8px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #667085;
  margin-bottom: 1rem;
`;

const LearnMoreLink = styled.a`
  color: #7f56d9;
  text-decoration: none;
  font-weight: bold;
`;

function AdvancedFeatures() {
  const features = [
    {
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <AdvancedFeaturesContainer>
      <AdvancedFeaturesTitle>
        Cutting-edge features for advanced analytics
      </AdvancedFeaturesTitle>
      <AdvancedFeaturesSubtitle>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </AdvancedFeaturesSubtitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <LearnMoreLink href="#">Learn more</LearnMoreLink>
          </FeatureItem>
        ))}
      </FeatureGrid>
    </AdvancedFeaturesContainer>
  );
}

export default AdvancedFeatures;
