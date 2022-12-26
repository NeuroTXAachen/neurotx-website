import styled from "styled-components";

export const Viewport = styled.div`
  white-space: nowrap; 
  transition: transform 0.3s; 
`;

export const Slider = styled.div`
  overflow: hidden;
  display: relative;
  width: 100%;
`;

export const CarouselItem = styled.div`
  width: ${( {width} ) => width ? width : "100%"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  color: black;
`;

export const Indicators= styled.div`
  position: relative;
  z-index: 5;
`;

export const AbsIndicators = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  
  `;

export const PrevButton = styled.button`
  order: 1;
  height: 100px;
  width: 40px;
  border: none;
  z-index: 4;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0%);
  &:hover {
    background-color: rgba(0, 0, 0, 80%);
  }
`;

export const NextButton = styled.button`
  order: 2;
  z-index: 4;
  height: 100px;
  width: 40px;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0%);
  &:hover {
    background-color: rgba(0, 0, 0, 80%);
  }
`;

export const MemberTape = styled.div`
  width: auto;
`;
export const MiniImage = styled.img`
  width: 90%;
`;
