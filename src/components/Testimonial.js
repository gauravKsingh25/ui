import React from "react";
import styled from "styled-components";

const TestimonialContainer = styled.section`
  background-color: #f9fafb;
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.cite`
  font-style: normal;
  font-weight: bold;
`;

function Testimonial() {
  return (
    <TestimonialContainer>
      <TestimonialQuote>
        "We've been using Untitled to kick start every new project and can't
        imagine working without it."
      </TestimonialQuote>
      <TestimonialAuthor>
        Candice Wu, Product Manager, Sisyphus
      </TestimonialAuthor>
    </TestimonialContainer>
  );
}

export default Testimonial;
