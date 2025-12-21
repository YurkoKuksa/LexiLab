// import PageHeader from '../../../components/PageHeader/PageHeader';
import Wild from '../../../components/Animals/Wild/Wild';
import { MainContainer, Content } from '../AnimalStyled';

const WildPage = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Wild Animals" /> */}

      <Content>
        <Wild />
      </Content>
    </MainContainer>
  );
};

export default WildPage;
