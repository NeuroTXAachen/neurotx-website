import styled from "styled-components";

export const BciSectionWrapper = styled.div`
  @media screen and (max-width: 789px) {
    padding-top: 68px;
  }
`;


export const TeamHeading = styled.h2`
  font-size: 50px;
  font-weight: 400;
  line-height: 77px;
  text-align: center;
  width: 100%;
  letter-spacing: 0em;
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : "40px"};
  @media screen and (max-width: 789px) {
    padding-top: 68px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }
  `;
export const BciHeading = styled.h2`
  font-size: 50px;
  font-weight: 400;
  line-height: 77px;
  text-align: center;
  width: 100%;
  letter-spacing: 0em;
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : "40px"};
  @media screen and (max-width: 789px) {
    padding-top: 68px;
    font-size: 24px;
    font-weight: 400;
    width: 60%;
    line-height: 30px;
  }
  `;
export const Description = styled.p`
  font-family: Montserrat;
  width: 100%;
  font-size: 24px;
  align-self: center;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  @media screen and (max-width: 769px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
  `;

export const DescriptionWrapper = styled.div`
  width: 36%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 180px;
  @media screen and (max-width: 769px) {
    width: 70%;
    margin-left: 15px;
    margin-right: auto;
    justify-content: left;
  }
  `;



export const BciTextWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width ? width : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    align-items: left;
    justify-content: left;
  }

  `;

export const BciWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `; 


export const SquaredWrapper = styled.div`
  padding: 30px;
  width: 350px;
  text-align: center;
  `;



export const SquaredImg = styled.img`
  width: 283px;
  height: 259px;
`;

export const DottedImg = styled.img`
  margin-bottom: 20px;
`;

export const DottedWrapper = styled.div`
  height: 259px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoldDescription = styled.div`
  margin-bottom: 70px;
  font-family: Chivo;
  font-size: 30px;
  font-weight: bold;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: center;
`;
