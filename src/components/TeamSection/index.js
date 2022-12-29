import {
  Container,
  Heading,
  Subtitle,
  MemberWrapper,
  RedDotImg,
} from "./TeamElements";

import Member from "./Member";
import React, { useState } from "react";


const MemberSection = ({ children, memberopts }) => {
  const [counter, setcounter] = useState(-1);

  return (
      <MemberWrapper>
        {
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "23%" })
          }) 
        }
      </MemberWrapper>
    )
}

const TeamSection = ({ memberData, redBgPoint }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>{"team"}</Heading>
      <Subtitle>
        {
          "Our team members are engaging, international students from different field of study and backgrounds, mostly studying at RWTH Aachen University or FH Aachen."
        }
      </Subtitle>
      <MemberSection>
        {memberData.map((props) => {
            return (
              <Member props={props}></Member>
            );
          })}
      </MemberSection>
    </Container>
  );
};
export default TeamSection;
