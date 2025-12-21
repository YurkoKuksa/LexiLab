// import PageHeader from '../../../components/PageHeader/PageHeader';
import Pets from '../../../components/Animals/Pets/Pets.jsx';
import { MainContainer, Content } from '../AnimalStyled';

const PetsPage = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Pets" /> */}

      <Content>
        <Pets />
      </Content>
    </MainContainer>
  );
};

export default PetsPage;
