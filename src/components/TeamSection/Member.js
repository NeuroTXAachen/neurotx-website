import {
  MemberItem,
  Name,
  Title,
  ImageNameDiv,
  Description,
  Social,
  Socials,
  Image,
  RedAccent,
  NameWrapper,
} from "./TeamElements";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Member = ({ props, width }) => {
  const name = props.name;
  const image = props.image;
  const description = props.description;
  const jobTitle = props.title;
  const squareImage = props.squareImage;
  const linkedIn = props.socials.linkedIn;
  const github = props.socials.github;
  const nameParts = name.trim().split(" ");
  const renderedName = (
    <>
      {nameParts.slice(0, -1).join(" ")}
      <br />
      {nameParts[nameParts.length - 1]}
    </>
  );

  const content = (
    <>
      <MemberItem width={width}>
        <ImageNameDiv>
          <Image $squareImage={squareImage} src={image}></Image>
          <NameWrapper>
            <RedAccent />
            <Name>{renderedName}</Name>
          </NameWrapper>
        </ImageNameDiv>
        <Description>{description}</Description>
        <Title>{jobTitle}</Title>
        {linkedIn !== "#" || github !== "#" ? (
          <Socials>
            {linkedIn !== "#" && <Social target="_blank" href={linkedIn}><FaLinkedin /></Social>}
            {github !== "#" && <Social target="_blank" href={github}><FaGithubSquare /></Social>}
          </Socials>
        ) : null}
      </MemberItem>
    </>
  );

  return content;
};

export default Member;
