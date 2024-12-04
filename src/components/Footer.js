import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #667085;
  text-decoration: none;
  &:hover {
    color: #7f56d9;
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #667085;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">Overview</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Features</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Solutions</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Tutorials</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Pricing</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Releases</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">About us</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Careers</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Press</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">News</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Media kit</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Contact</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">Blog</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Newsletter</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Events</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Help centre</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Tutorials</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Support</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">Terms</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Privacy</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Cookies</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Licenses</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Settings</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Contact</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
      <Copyright>© 2077 Untitled UI. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
