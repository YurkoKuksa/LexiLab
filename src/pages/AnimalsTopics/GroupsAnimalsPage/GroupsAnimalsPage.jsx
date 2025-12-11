import PageHeader from '../../../components/PageHeader/PageHeader';
import Groups from '../../../components/Animals/GroupsAnimals/GroupsAnimals';
import { MainContainer, Content } from '../AnimalStyled';

const GroupsAnimalsPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Groups of Animals" />

      <Content>
        <Groups />
      </Content>
    </MainContainer>
  );
};

export default GroupsAnimalsPage;
