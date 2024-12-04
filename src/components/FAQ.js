import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const FAQSubtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #667085;
  margin-bottom: 3rem;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

const FAQAnswer = styled.div`
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ContactButton = styled.button`
  background-color: #7f56d9;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We have a flexible cancellation policy. You can cancel your subscription at any time without any penalties or hidden fees.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add custom information to your invoices. Please contact our support team for assistance with this.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing options. You'll be billed at the start of each billing cycle based on your chosen plan.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your account settings. If you need assistance, our support team is always ready to help.",
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently asked questions</FAQTitle>
      <FAQSubtitle>
        Everything you need to know about the product and billing.
      </FAQSubtitle>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </FAQQuestion>
            {openIndex === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQList>
      <ContactSection>
        <h3>Still have questions?</h3>
        <p>
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>
        <ContactButton>Get in touch</ContactButton>
      </ContactSection>
    </FAQContainer>
  );
}

export default FAQ;
