import {
  Category,
  CategoryDescription,
  CategoryTitle,
  Container,
  Heading,
  Position,
  PositionList,
  Positions,
  RedDotImg,
  Subtitle,
} from "./JoinUsElements";

const JoinUsSection = ({ redBgPoint }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>join us</Heading>
      <Subtitle>
        Join NeuroTX and gain hands-on experience in neurotechnology through
        one of our project teams.
      </Subtitle>
      <Positions>
        <h2>Current Open Positions</h2>
        <Category>
          <CategoryTitle>Bucky</CategoryTitle>
          <CategoryDescription>No positions currently available.</CategoryDescription>
        </Category>
        <Category>
          <CategoryTitle>Xavier</CategoryTitle>
          <CategoryDescription>No positions currently available.</CategoryDescription>
        </Category>
        <Category>
          <CategoryTitle>Research</CategoryTitle>
          <PositionList>
            <Position>Materials Engineering (Bachelor or Master)</Position>
            <Position>
              Biology / Molecular Biotechnology (Bachelor or Master)
            </Position>
            <Position>Chemistry (Bachelor or Master)</Position>
          </PositionList>
        </Category>
      </Positions>
    </Container>
  );
};

export default JoinUsSection;
