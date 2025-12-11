import PageHeader from '../../../components/PageHeader/PageHeader';
import Microorganisms from '../../../components/Animals/Microorganisms/Microorganisms.jsx';
import { MainContainer, Content } from '../AnimalStyled';

const MicroorganismsPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Microorganisms" />

      <Content>
        <Microorganisms />
      </Content>
    </MainContainer>
  );
};

export default MicroorganismsPage;
