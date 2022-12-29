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
} from "./TeamElements";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Member = ({ props, width }) => {
  // console.log(props)
  const name = props.name;
  const image = props.image;
  const description = props.description;
  const jobTitle = props.title;
  const linkedIn = props.socials.linkedIn;
  const github = props.socials.github;
  // console.log(github)

  return (
    <>
      <MemberItem width={width}>
        <ImageNameDiv>
          <Image src={image}></Image>
          <div style={{ display: "inline-block" }}>
            <RedAccent />
            <Name>{name}</Name>
          </div>
        </ImageNameDiv>
        <Description>{description}</Description>
        <Title>{jobTitle}</Title>
        <Socials>
          <Social target="_blank" href={linkedIn}>
            <FaLinkedin />
          </Social>
          <Social target="_blank" href={github}>
            <FaGithubSquare />
          </Social>
        </Socials>
      </MemberItem>
    </>
  );
};

export default Member;
