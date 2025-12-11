import PageHeader from '../../../components/PageHeader/PageHeader';
import SeaAnimals from '../../../components/Animals/SeaAnimals/SeaAnimals';
import { MainContainer, Content } from '../AnimalStyled';

const SeaAnimalsPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Sea Animals" />

      <Content>
        <SeaAnimals />
      </Content>
    </MainContainer>
  );
};
export default SeaAnimalsPage;
