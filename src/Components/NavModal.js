import SocialItemContainer from './SocialItemContainer';
// Images
import instagram from '../Assets/images/instagram.svg';
import github from '../Assets/images/github.svg';
import twitter from '../Assets/images/twitter.svg';
import { LogOut } from './Styled/NavModalItems';
import { CancelModal } from './Styled/NavModalItems';

const NavModal = ({ logOut, changeVisible }) => {
  return (
    <div
      style={{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SocialItemContainer
        img={instagram}
        text='Instagram'
        url='instagram.com/isupp.gg'
      />
      <SocialItemContainer
        img={github}
        text='Github'
        url='github.com/isuppgg'
      />
      <SocialItemContainer
        img={twitter}
        text='Twitter'
        url='twitter.com/isuppgg'
      />

      <LogOut onClick={logOut}>Log out</LogOut>
      <CancelModal onClick={changeVisible}>x</CancelModal>
    </div>
  );
};

export default NavModal;
