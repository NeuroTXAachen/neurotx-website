import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, LogoImage, } from './NavbarElement'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from '../../pages/Contact'

const Navbar = ({ toggle }) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 1080){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <Nav colorChange={colorChange}>
                <NavbarContainer>
                    <NavLogo to='home'>
                      <LogoImage width= {50} src={require('../../images/logo.png')} alt="Logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>
                                home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>
                                learn
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='service'>
                                projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Contact'>
                                contact
                            </NavLinks>
                        </NavItem>

                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar