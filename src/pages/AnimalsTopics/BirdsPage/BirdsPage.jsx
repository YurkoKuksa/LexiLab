import PageHeader from '../../../components/PageHeader/PageHeader';
import Birds from '../../../components/Animals/Birds/Birds';
import { MainContainer, Content } from '../AnimalStyled';

const BirdsPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Birds" />

      <Content>
        <Birds />
      </Content>
    </MainContainer>
  );
};

export default BirdsPage;
