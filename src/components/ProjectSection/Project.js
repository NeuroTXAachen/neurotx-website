import {
  Name,
  Image,
  Description,
  ProjectItem,
  ProjectText,
  ImageWrapper,
  RedAccent,
} from "./ProjectElements";

const Member = ({ name, image, description, compact }) => {
  return (
    <>
      <ProjectItem $compact={compact}>
        {image && <ImageWrapper>
          <RedAccent />
          <Image src={image}></Image>
        </ImageWrapper>}
        <ProjectText $compact={compact}>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </ProjectText>
      </ProjectItem>
    </>
  );
};

export default Member;
