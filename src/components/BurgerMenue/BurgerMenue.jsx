import {
  CloseBtn,
  EmailLink,
  ExtraPicture,
  ImgSvg,
  LiContacts,
  // LinkStyle,
  MainModalBox,
  MainPicture,
  Navigator,
  PhoneLink,
  UlContacts,
} from './BurgerMenue.styled';
import closeBtn from '../../../assets/svg/close.svg';

import mainpicture from '../../../assets/images/chemistry44.png';
import extrapicture from '../../../assets/images/chemistry16.png';
import { useEffect } from 'react';

export const BurgerMenue = ({ close, open, toggleModal }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (
        event.key === 'Escape'
        // event.key === " " ||
        // event.key === "Enter" ||
        // event.key === "+"
      ) {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  return (
    <MainModalBox>
      <CloseBtn type="button" onClick={toggleModal}>
        <ImgSvg src={closeBtn} alt="закрити" />
      </CloseBtn>

      <MainPicture src={mainpicture} alt="головна декоративна" />

      <Navigator onClick={toggleModal} />
      {/* <Navigator role="navigation">
        <ul>
          <li>
            <LinkStyle to="/" onClick={toggleModal}>
              Головна
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/biography" onClick={toggleModal}>
              Автор
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/interesting" onClick={toggleModal}>
              Цікава хімія
            </LinkStyle>
          </li>
          <li>
            <LinkStyle to="/contacts" onClick={toggleModal}>
              Контакти
            </LinkStyle>
          </li>
        </ul>
      </Navigator> */}

      <ExtraPicture src={extrapicture} alt="органічна формула" />

      <UlContacts>
        <LiContacts>
          <PhoneLink href="tel:+380968103053">+38 (096) 810-30-53</PhoneLink>
        </LiContacts>

        <LiContacts>
          <EmailLink href="mailto:kuksasergey55@gmail.com">
            kuksasergey55@gmail.com
          </EmailLink>
        </LiContacts>
      </UlContacts>
    </MainModalBox>
  );
};
