import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background: ${({ colorChange }) => (colorChange ? "#ffff" : "#040142")};
    color: ${({ colorChange }) => (colorChange ? "#040142" : "#ffff")};
    height: 90px;
    display: flex;
    font-family: "Krona One";
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    /* @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        height: 70px;
        width:100%;
        overflow-x:hidden;
    } */
`

export const NavbarContainer = styled.div`
    display: flex;
    margin-left: 10%;
    justify-content: space-between;
    align-content:space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 0 20px;
    max-width: 1100px;
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
    height: 90px;
    width: 90px;
    font-weight: bold;
    text-decoration: none;
    position:absolute;
    top: 0%;
    left:6%;
    /* @media screen and (max-width: 1470px) and (min-width: 769px){
        color: #fff;
        justify-self: flex-start;
        margin-top: 15px;
        cursor: pointer;
        font-size: 2rem;
        display: flex;
        align-items: center;
        font-weight: bold;
        text-decoration: none;
        position:absolute;
        top: 9%;
        left:3%;
    } */
    @media screen and (max-width: 768px){
        margin: 0px;
        margin-top:0px;
        padding:0px;
        top: 0;
        left: 0;
        right: 0;
        width : 70px;
        height: 70px;
     }
`
export const LogoImage = styled.img`
    padding: 11px;
    margin-top: 0px;
    font-size:100%;   
    @media screen and (max-width: 768px){
      width: 52px;
      height: 52px;
      padding: 8px;
     }
`
export const LogoHeader = styled.h1`
    font-size:65%;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        color: #fff;
        top: -8px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    position:absolute;
    top: 10%;
    left:50%;
    @media screen and (max-width: 1248px) and (min-width: 769px){
        display: flex;
        list-style: none;
        position:absolute;
        top: 0%;
        left: 20%;
        }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenu2 = styled.ul`
    display: flex;
    list-style: none;
    position:absolute;
    top: 10%;
    left:75%;
    @media screen and (max-width: 1248px) and (min-width: 769px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;
        align-content: stretch;
        list-style: none;
        position:absolute;
        top: 5%;
        left:88%;
        }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height:60px;
    margin-left: 55px;
    &:first-of-type {
        margin-left: 15px;
        padding-left: 15px;
        border-spacing:15px 2em;
    }
    
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size:20px;
    padding: 0 0.8rem;
    padding-top:18px;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #fff;
    }
    &:hover{
        border-bottom: 13px solid #EB0000;
    }
    
`


export const NavButton = styled.button`
    color: #fff;
    background-color: #2283C9;
    border-radius: 8px;
    border: 1px solid #1BA4E5;
    align-items: center;
    text-decoration: none;
    font-size:10pt;
    margin-top:24px;
    height: 30px;
    cursor: pointer;
    &.active{
        
    }
    &:hover{
        
        color: #63D0FF;
    }
`