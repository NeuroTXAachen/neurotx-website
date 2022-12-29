import styled from "styled-components";

export const BciSectionWrapper = styled.div`
  @media screen and (max-width: 789px) {
    padding-top: 68px;
    margin-bottom: 120px;
  }
`;

export const TeamHeading = styled.h2`
  font-size: 50px;
  font-weight: 400;
  line-height: 77px;
  text-align: center;
  width: 100%;
  letter-spacing: 0em;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "40px"};
  @media screen and (max-width: 789px) {
    padding-top: 68px;
    line-height: 30pt;
    font-size: 24pt;
    font-weight: 400;
  }
`;
export const BciHeading = styled.h2`
  font-size: 50px;
  font-weight: 400;
  line-height: 77px;
  text-align: center;
  width: 100%;
  text-align: center;
  letter-spacing: 0em;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "40px"};
  @media screen and (max-width: 789px) {
    padding-top: 68px;
    text-align: center;
    font-size: 24pt;
    font-weight: 400;
    line-height: 30pt;
  }
`;
export const Description = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  max-width: 80%;
  font-weight: 500;
  line-height: 165%;
  margin-bottom: 40px;
  letter-spacing: 0em;
  @media screen and (max-width: 769px) {
    font-size: 16pt;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 55%;
  padding-top: 60px;
  display: flex;
  gap: 10%;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 769px) {
    margin-left: 0px;
    justify-content: left;
    flex-direction: column;
  }
`;

export const BciTextWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => (width ? width : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 769px) {
    flex-direction: row;
  }
`;

export const BciWrapper = styled.div`
  margin-top: -120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    margin-top: -70px;
    flex-direction: column;
  }
`;

export const SetEndWrapper = styled.div`
  padding: 30px;
  width: fit-content;
  height: 299px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 769px) {
    height: auto;
    width: 100%;
    justify-content: flex-start;
    margin-left: -7px;
  }
`;
export const SetTopWrapper = styled.div`
  padding: 30px;
  width: fit-content;
  height: 299px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 769px) {
    width: 100%;
    justify-content: flex-end;
    height: auto;
  }
`;

export const SquaredImg = styled.img`
  width: 128px;
  height: 128px;
  @media screen and (max-width: 769px) {
    height: 40px;
    width: 40px;
  }
`;

export const DottedImg = styled.img`
  margin-bottom: 20px;
  width: 1111px;
  height: 197px;
  @media screen and (max-width: 769px) {
    margin-bottom: 0px;
    width: 356px;
    height: 70.82px;
  }
`;

export const DottedWrapper = styled.div`
  height: 259px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    height: 300px;
    width: 40px;
    transform: rotate(90deg);
  }
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
