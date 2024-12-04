import React from "react";
import styled from "styled-components";
import user from "../assets/user.png";

const CircularImage = styled.img`
  border-radius: 50%;
`;

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const FeaturesSubtitle = styled.p`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #667085;
`;

function Features() {
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
    {
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <FeaturesContainer>
      <FeaturesTitle>
        Analytics that feels like it's from the future
      </FeaturesTitle>
      <FeaturesSubtitle>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </FeaturesSubtitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <CircularImage
              src={user}
              alt={`${feature.title} icon`}
              width="50"
              height="50"
            />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeatureGrid>
    </FeaturesContainer>
  );
}

export default Features;
