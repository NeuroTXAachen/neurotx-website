import {
  MemberItem,
  Name,
  Social,
  Socials,
  RedAccent,
  ImageNameDiv,
  Image,
  Description,
  NameWrapper,
} from "./TeamElements";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Alumni = ({ props, width }) => {
  const name = props.name;
  const image = props.image;
  const description = props.description;
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

  return (
    <MemberItem width={width}>
      <ImageNameDiv>
        <Image $squareImage={squareImage} src={image}></Image>
        <NameWrapper>
          <RedAccent />
          <Name>{renderedName}</Name>
        </NameWrapper>
      </ImageNameDiv>
      <Description>{description}</Description>
      {linkedIn !== "#" || github !== "#" ? (
        <Socials>
          {linkedIn !== "#" && <Social target="_blank" href={linkedIn}><FaLinkedin /></Social>}
          {github !== "#" && <Social target="_blank" href={github}><FaGithubSquare /></Social>}
        </Socials>
      ) : null}
    </MemberItem>
  );
};

export default Alumni;
