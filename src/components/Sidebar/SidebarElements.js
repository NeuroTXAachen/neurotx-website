import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #00000069;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`

export const CloseIcon = styled(FaTimes)` 
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    float: right;
`

export const SidebarLink = styled(LinkR)`
    font-size: 1.5rem;
    margin: 2rem;
    text-decoration: none;
    text-align: right;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color:  #fff;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #fff;
        transition: 0.2s ease-in-out;
        border-width: fit
    }
    &:hover{
        border-bottom: 5px solid #EB0000;
        transition: 0.2s ease-in-out;
    }
   
`
export const NavLogo = styled(LinkS)`
    color: #fff;
    background-color: #EB0000;
    justify-self: flex-start;
    margin-top: 0px;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    height: 70px;
    width: 70px;
    font-weight: bold;
    text-decoration: none;
    position:absolute;
    top: 0%;
`
export const LogoImage = styled.img`
    padding: 11px;
    margin-top: 0px;
    font-size:100%;   
   
`