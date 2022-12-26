 import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MiniImage } from "./Carousel";

const MiniMember = ({ props, width }) => {
  // console.log(props)
  const name = props.name;
  const image = props.image;
  const description = props.description;
  const jobTitle = props.jobTitle;
  const linkedIn = props.socials.linkedIn;
  const github= props.socials.github;
  // console.log(image)

  
  return (
    <>
        <MiniImage src={image}/>
    </>
  )


};


export default MiniMember;
