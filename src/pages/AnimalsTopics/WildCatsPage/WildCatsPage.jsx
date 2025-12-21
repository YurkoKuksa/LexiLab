// import PageHeader from '../../../components/PageHeader/PageHeader';
import Cats from '../../../components/Animals/WildCats/WildCats.jsx';
import { MainContainer, Content } from '../AnimalStyled';

const WildCatsPage = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Wild Cats" /> */}

      <Content>
        <Cats />
      </Content>
    </MainContainer>
  );
};

export default WildCatsPage;
