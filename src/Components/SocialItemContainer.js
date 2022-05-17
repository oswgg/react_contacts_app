import {
  SocialItem,
  SocialItemImg,
  SocialItemText,
} from './Styled/NavModalItems';

const SocialItemContainer = ({ img, text, url }) => {
  return (
    <SocialItem href={`https://${url}`}>
      <SocialItemImg alt='svgImg' src={img} />
      <SocialItemText>{text}</SocialItemText>
    </SocialItem>
  );
};

export default SocialItemContainer;
