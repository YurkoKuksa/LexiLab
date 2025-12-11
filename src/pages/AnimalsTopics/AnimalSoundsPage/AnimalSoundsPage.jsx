import PageHeader from '../../../components/PageHeader/PageHeader';
import Sounds from '../../../components/Animals/AnimalSounds/AnimalSounds';
import { MainContainer, Content } from '../AnimalStyled';

const AnimalSoundsPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Animal Sounds" />

      <Content>
        <Sounds />
      </Content>
    </MainContainer>
  );
};

export default AnimalSoundsPage;
