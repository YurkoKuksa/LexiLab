// import PageHeader from '../../../components/PageHeader/PageHeader';
import Insects from '../../../components/Animals/Insects/Insects.jsx';
import { MainContainer, Content } from '../AnimalStyled';

const InsectsPage = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Insects" /> */}

      <Content>
        <Insects />
      </Content>
    </MainContainer>
  );
};

export default InsectsPage;
