import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoImage,
} from "./NavbarElement";

const Navbar = ({ toggle }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1080) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Nav colorChange={colorChange} className="customNav">
        <NavbarContainer>
          <NavLogo to="home">
            <LogoImage
              width={50}
              src={require("../../images/logo.png")}
              alt="Logo"
            />
          </NavLogo>
          <MobileIcon colorChange={colorChange} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks colorChange={colorChange} to="/home">
                home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks colorChange={colorChange} to="/learn">
                learn
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks colorChange={colorChange} to="/projects">
                projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks colorChange={colorChange} to="/team">
                team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks colorChange={colorChange} to="/contact">
                contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
