import { useNavigate } from 'react-router-dom';
import { useTypewriterEffect } from '../../hooks/useTypewriterEffect';
import {
  ArrowIcon,
  BackButton,
  Cursor,
  Header,
  HeaderContent,
  HeaderFlex,
  Spacer,
  Title,
} from './PageHeaderStyled';

const PageHeader = ({ title, typewriterOptions }) => {
  const navigate = useNavigate();
  const displayText = useTypewriterEffect(title, typewriterOptions);

  return (
    <Header>
      <HeaderContent>
        <HeaderFlex>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowIcon />
            <span>Назад</span>
          </BackButton>

          <Title>
            {displayText}
            <Cursor>|</Cursor>
          </Title>

          <Spacer />
        </HeaderFlex>
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
