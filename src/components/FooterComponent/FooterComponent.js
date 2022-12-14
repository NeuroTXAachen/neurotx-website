import React from "react"
import styled from "styled-components"

const NeuroTXDisc = styled.div`
  width: 50%;
`;

const Description = styled.p`
  
`;

const ContactDiv = styled.div`
  width: 20%;
  display: block;
  justify-content: left;
  align-items: left;
`;

const ContactItem = styled.div`
`;

const FooterBold = styled.p``;

const ContactItemLink = styled.a``;

const AddressDiv = styled.div`
  width: 25%;
`;

const FooterContainer = styled.div`
  height: 200px;
  background-color: #ffff;
  display: flex;
  flex-direction: row;
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
              {console.log(obj.title)}
              <ContactItemLink href={obj.url}>{obj.title}</ContactItemLink>
            </ContactItem>
          )
        })}
      </ContactDiv>

      <AddressDiv>
        <Description>
          {address.name} <br/>
          {address.co} <br/>
          {address.street} <br/>
          {address.postcode} {address.city} <br/>
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