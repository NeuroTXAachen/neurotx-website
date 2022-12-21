import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
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