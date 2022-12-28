import { MemberItem, Name, Social, Socials, RedAccent } from "./TeamElements";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Alumni = ({ props, width }) => {
  // console.log(props)
  const name = props.name;
  const linkedIn = props.socials.linkedIn;
  const github = props.socials.github;
  // console.log(github)

  return (
    <>
      <MemberItem width={width}>
        <RedAccent />
        <Name>{name}</Name>
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

export default Alumni;
