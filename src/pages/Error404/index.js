import React, { useEffect, useState, useRef } from "react";
import { FooterComponent } from "../../components/FooterComponent";
import { footerDataObj } from "../../components/FooterComponent/FooterData";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import { RedDotImg } from "../../components/ContactSection/ContactElements";

const redBgPoint = require("../../images/square.png");

const errorMessages = {
  1: "Oops, it looks like you've stumbled upon a page that doesn't exist. Don't worry, we've all been there. Just pretend you meant to do it and move on.",
  2: "Uh oh, it looks like you've found a page that's more elusive than a unicorn. Don't worry, we'll help you track it down. Just follow the rainbow.",
  3: "404 error? More like 404 opportunity to make a joke about how this page isn't found. You're welcome.",
  4: "Well, this is awkward. It looks like you've found a page that's lost. Don't worry, we'll help you find it. Just follow the breadcrumbs.",
  5: "Hey there, it looks like you've found a page that's gone AWOL. Don't worry, we'll help you track it down. Just call the page whisperer.",
  6: "Oops, it looks like you've stumbled upon a page that doesn't exist. But hey, at least you're not alone – we've all been there. Here's a virtual hug to make you feel better.",
  7: "Sorry, but the page you were looking for seems to have evaporated into the ether. But don't worry, we've sent out a search party to track it down. In the meantime, why not try one of these other links?",
  8: "Well, this is embarrassing. It looks like you've found a page that doesn't exist. But hey, at least you found something – and that's more than we can say for this page. Time to move on, I guess.",
  9: "Page not found. But don't worry, we've got plenty of other pages that are still hanging around. Maybe try one of these instead?",
  10: "Uh oh, it looks like you've hit a dead end. But don't worry, we've got plenty of other pages that are still alive and kicking. Why not try one of these instead?",
  11: "Sorry, the page you were looking for has been swallowed by the void of existence, where nothing matters and all is meaningless.",
};

export const BigError = styled.h1`
  font-size: 20rem;
  color: #fff;
  margin: 5vw;
  fomt-family: "Krona One", sans-serif;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 10rem;
  }
`;

export const SmallError = styled.h2`
  font-size: 2rem;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin: 2vw 5vw;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonServices = styled.button`
  width: 259px;
  height: 57px;
  background: #eb0000;
  opacity: 0.9;
  border: none;
  margin: 2vw 5vw;
  font-size: 25px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-style: italic !important;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition-duration: 0.7s;
  }
  @media only screen and (max-width: 600px) {
    width: 220px;
    height: 55px;
    &:hover {
      width: 220px;
      height: 55px;
      color: white;
      box-shadow: 0 0px 4px 4px #eb003f, 0 0px 0px 0px #63d0ff;
      cursor: pointer;
      transition-duration: 0.7s;
    }
  }
`;

const Error404 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const messages = Object.values(errorMessages);
  const randomIndex = Math.floor(Math.random() * messages.length);
  const errorMessage = messages[randomIndex];
  return (
    <div className="Home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <RedDotImg src={redBgPoint} alt="redbgpoint" />
      <Navbar toggle={toggle} />
      <BigError>404</BigError>
      <SmallError>{errorMessage}</SmallError>
      <ButtonServices to="/">Go Back Home</ButtonServices>
      <FooterComponent {...footerDataObj} />
    </div>
  );
};

export default Error404;
