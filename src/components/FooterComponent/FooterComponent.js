import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NeuroTXDisc = styled.div`
  width: 50vw;
  padding: 4rem;
  margin: auto;
  @media screen and (max-width: 789px) {
    text-align: center;
    width: 60%;
    padding: 2.5rem 0rem;
  }
`;

const Description = styled.p`
  font-weight: 200;
  width: 100%;
`;

const ContactDiv = styled.div`
  width: 25vw;
  display: block;
  justify-content: left;
  align-items: left;
  padding: 4rem;
  margin: auto;
  @media screen and (max-width: 789px) {
    text-align: center;
    width: 100%;
    padding: 2.5rem 0rem;
  }
`;

const ContactItem = styled.div``;

const FooterBold = styled.p`
  font-style: italic;
  font-weight: 1000;
`;

const ContactItemLink = styled.a`
  text-decoration: none; /* no underline */
`;

const AddressDiv = styled.div`
  width: 25vw;
  left: 200px;
  padding: 4rem;
  margin: auto;
  @media screen and (max-width: 789px) {
    text-align: center;
    width: 100%;
    padding: 2.5rem 0rem;
  }
`;

const FooterContainer = styled.div`
  font-size: 22px;
  color: #040142;
  width: 100%;
  line-height: 50px;
  font-family: "Montserrat";
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ffff;
  display: flex;
  flex-direction: row;
  margin: auto;
  @media screen and (max-width: 789px) {
    height: fit-content;
    flex-direction: column;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
`;

const FooterComponent = ({ neurotx, repr, copyright, contact, address }) => {
  return (
    <FooterContainer>
      <NeuroTXDisc>
        <Description>{neurotx}</Description>
        <Description>{repr}</Description>

        <FooterBold>{copyright}</FooterBold>
      </NeuroTXDisc>

      <ContactDiv>
        <FooterBold>{contact.name}</FooterBold>
        {contact.list.map((obj) => {
          return (
            <ContactItem>
              <ContactItemLink
                className="customLinks"
                target="_blank"
                href={obj.url}
              >
                {obj.title}
              </ContactItemLink>
            </ContactItem>
          );
        })}
      </ContactDiv>

      <AddressDiv>
        <FooterBold>Address</FooterBold>
        <Description>
          {address.name} <br />
          {address.co} <br />
          {address.street} <br />
          {address.postcode} {address.city} <br />
        </Description>
      </AddressDiv>
    </FooterContainer>
  );
};
// <ContactItem>
//   <FooterBold>{name}</FooterBold>
//   {links.map(({ title, url }) => (
//     <ContactItemLink href={url}>{title}</ContactItemLink>
//   ))}
// </ContactItem>
export default FooterComponent;
