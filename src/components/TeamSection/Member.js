import {
  MemberItem,
  Name,
  Title,
  Description,
  Social,
  Image,
} from "./TeamElements";

const Member = ({ name, title, image, description, social }) => {
  return (
    <>
      <MemberItem>
        <Image src={image}></Image>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Title>{title}</Title>
        <Social>{social}</Social>
      </MemberItem>
    </>
  );
};

export default Member;
