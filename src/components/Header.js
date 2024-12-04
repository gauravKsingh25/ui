import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>Untitled UI</Logo>
      <Nav isOpen={isMenuOpen}>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>Resources</NavItem>
          <NavItem>Pricing</NavItem>
        </NavList>
      </Nav>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuButton>
    </HeaderContainer>
  );
}

export default Header;
