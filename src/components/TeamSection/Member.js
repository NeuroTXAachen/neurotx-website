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
  const name = props.name;
  const image = props.image;
  const description = props.description;
  const jobTitle = props.title;
  const linkedIn = props.socials.linkedIn;
  const github = props.socials.github;

  //don't display any social icons if member hasn't entered any
  if(props.socials.linkedIn === "#" && props.socials.github === "#"){
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
        </MemberItem>
      </>
    );
  //don't display linkedin icon if no member has not entered one
  }else if(props.socials.linkedIn === "#"){
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
            <Social target="_blank" href={github}>
              <FaGithubSquare />
            </Social>
          </Socials>
        </MemberItem>
      </>
    );
  //don't display github icon if no member has not entered one
}else if(props.socials.github === "#"){
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
        </Socials>
      </MemberItem>
    </>
  );
  //member has entered both profile links
}else{
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
}
};

export default Member;
