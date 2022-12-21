import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, NavLogo,LogoImage } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <NavLogo to='home'>
                      <LogoImage width= {50} src={require('../../images/logo.png')} alt="Logo" />
            </NavLogo>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home">
                        home
                    </SidebarLink>
                    <SidebarLink to="/learn">
                        learn
                    </SidebarLink>
                    <SidebarLink to="/projects">
                        projects
                    </SidebarLink>
                    <SidebarLink to="/team">
                        team
                    </SidebarLink>
                    <SidebarLink to="/contact">
                        contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar