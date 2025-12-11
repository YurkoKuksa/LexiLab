import PageHeader from '../../../components/PageHeader/PageHeader';
import Fish from '../../../components/Animals/Fish/Fish';
import { MainContainer, Content } from '../AnimalStyled';

const FishPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Fish" />

      <Content>
        <Fish />
      </Content>
    </MainContainer>
  );
};

export default FishPage;
