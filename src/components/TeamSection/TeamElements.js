import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  opacity: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: fit-content;
  background-color: #040142;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;

export const Heading = styled.p`
  position: relative;
  line-height: 1.8;
  font-size: 120px;
  padding-top: 5rem;
  margin-left: 5rem;
  color: #fff;
  font-weight: 400;
  @media screen and (min-width: 1200px) and (max-width: 1568px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 0%;
    padding-top: 28%;
    padding-left: 0%;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  line-height: 1.2;
  z-index: 10;
  margin-left: 5rem;
  max-width: 900px;
  font-size: 24px;
  color: #fff;
  align-items:center;
  @media screen and (max-width: 800px) {
    font-size: 16pt;
  }
`;

export const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 5rem 10rem;
`;

export const ButtonServices = styled.button`
  width: 259px;
  height: 57px;
  background-color: #EB0000;
  background: #EB0000;
  opacity: 0.9;
  color: #ffff;
  border: none;
  font-size: 25px;
  margin-bottom: 5%;
  &:hover {
    background-color: #EB003f;
    color: #ffff;
    box-shadow: 0 0px 4px 4px #EB003f, 0 0px 0px 0px #EB003f;
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
      box-shadow: 0 0px 4px 4px #EB003f, 0 0px 0px 0px #63d0ff;
      cursor: pointer;
      transition-duration: 0.7s;
    }
  }
`;

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : "-190px"};
  width: ${({size}) => size ? size : "70%"};
  right: ${({right}) => right ? right : "-150px"};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const MemberItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 0 2.5rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.p`
  position: relative;
  font-size: 38px;
  color: #fff;
  font-weight: 400;
  margin-top: 1rem;
  border-left: 8px solid #FF0000;
  padding-left: 1rem;
`;

export const Description = styled.p`
  position: relative;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  margin-top: 1rem;
`;

export const Title = styled.p`
  position: relative;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  margin-top: 1rem;
`;

export const Social = styled.p`
  position: relative;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  margin-top: 1rem;
`;