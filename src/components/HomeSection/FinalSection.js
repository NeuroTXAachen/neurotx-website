import styled from "styled-components";

export const SplitDiv = styled.div`
  width: 90%;
  justify-content: left;
  align-items: left;
  margin: auto;
  position: relative;
  display: flex;
  @media screen and (max-width: 789px) {
    flex-direction: column;
  }
`;

export const SplitSectionWrapper = styled.div`
  width: ${({ width }) => (width ? width : "none")};
  justify-content: left;
  align-items: left;
  z-index: 2;
  @media screen and (max-width: 789px) {
    width: 100%;
    margin: auto;
  }
`;

export const SplitSectionTextWrapper = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : "60%")};
  flex-direction: row;
  justify-content: end;
  align-items: right;
`;

export const SplitSectionImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 789px) {
    flex-direction: column;
  }
`;

export const PartnerImg = styled.img`
  width: 13%;
  margin: 0 5%;
  @media screen and (max-width: 789px) {
    width: 50%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
