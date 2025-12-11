import PageHeader from '../../../components/PageHeader/PageHeader';
import Words from '../../../components/Animals/AnimalsWords/AnimalsWords';
import { MainContainer, Content } from '../AnimalStyled';

const AnimalsWords = () => {
  return (
    <MainContainer>
      <PageHeader title="Animals Words" />

      <Content>
        <Words />
      </Content>
    </MainContainer>
  );
};

export default AnimalsWords;
