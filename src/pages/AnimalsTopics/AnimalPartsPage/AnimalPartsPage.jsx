import PageHeader from '../../../components/PageHeader/PageHeader';
import AnimParts from '../../../components/Animals/AnimalParts/AnimalParts';
import { MainContainer, Content } from '../AnimalStyled';

const AnimalParts = () => {
  return (
    <MainContainer>
      <PageHeader title="Animal Parts" />

      <Content>
        <AnimParts />
      </Content>
    </MainContainer>
  );
};

export default AnimalParts;
