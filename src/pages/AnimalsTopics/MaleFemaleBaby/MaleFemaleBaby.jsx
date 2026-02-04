import Baby from '../../../components/Animals/MaleFemaleBaby/MaleFemaleBaby';
import { MainContainer, Content } from '../AnimalStyled';

const MaleFemaleBaby = () => {
  return (
    <MainContainer>
      {/* <PageHeader title="Insects" /> */}

      <Content>
        <Baby />
      </Content>
    </MainContainer>
  );
};

export default MaleFemaleBaby;
