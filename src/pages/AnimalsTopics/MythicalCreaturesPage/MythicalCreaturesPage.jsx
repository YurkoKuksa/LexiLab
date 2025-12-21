// import PageHeader from '../../../components/PageHeader/PageHeader';
import Creatures from '../../../components/Animals/MythicalCreatures/MythicalCreatures.jsx';
import { MainContainer, Content } from '../AnimalStyled';

const MythicalCreaturesPage = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Mythical Creatures" /> */}

      <Content>
        <Creatures />
      </Content>
    </MainContainer>
  );
};

export default MythicalCreaturesPage;
