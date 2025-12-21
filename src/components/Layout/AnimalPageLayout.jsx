import { MainContainer } from 'pages/AnimalsTopics/AnimalStyled';

const PageLayout = ({ Background, children }) => {
  if (Background) {
    return (
      <Background>
        <MainContainer>{children}</MainContainer>
      </Background>
    );
  }

  return <MainContainer>{children}</MainContainer>;
};

export default PageLayout;
