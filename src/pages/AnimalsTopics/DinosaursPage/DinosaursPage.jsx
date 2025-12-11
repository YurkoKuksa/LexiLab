import PageHeader from '../../../components/PageHeader/PageHeader';
import Dinosaurs from '../../../components/Animals/Dinosaurs/Dinosaurs';
import { MainContainer, Content } from '../AnimalStyled';

const DinosaursPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Dinosaurs" />

      <Content>
        <Dinosaurs />
      </Content>
    </MainContainer>
  );
};

export default DinosaursPage;
