import React from "react"
import styled from "styled-components"

const NeuroTXDisc = styled.div`
  width: 40%;
  margin: auto;
`;

const Description = styled.p`
  width: 90%;
`;

const ContactDiv = styled.div`
  width: 20%;
  display: block;
  justify-content: left;
  align-items: left;
  margin: auto;
`;

const ContactItem = styled.div`

`;

const FooterBold = styled.p`
  font-style: italic;
  font-weight: 800;
  line-height: 39.5px;
  `;

const ContactItemLink = styled.a`
  text-decoration: none; /* no underline */
  color: #040142;
`;

const AddressDiv = styled.div`
  width: 20%;
  left: 200px;
  margin: auto;
  `;

const FooterContainer = styled.div`
  font-size: 22px;
  color: #040142;
  width: 100%;
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
  }
`;


const FooterComponent = ({
  neurotx,
  repr,
  copyright,
  contact,
  address,
}) => {


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
              <ContactItemLink target="_blank" href={obj.url}>{obj.title}</ContactItemLink>
            </ContactItem>
          )
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
  )
}
// <ContactItem>
//   <FooterBold>{name}</FooterBold>
//   {links.map(({ title, url }) => (
//     <ContactItemLink href={url}>{title}</ContactItemLink>
//   ))}
// </ContactItem>
export default FooterComponent;