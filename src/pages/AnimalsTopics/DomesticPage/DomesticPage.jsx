// import React from 'react'

// const DomesticPage = () => {
//   return (
//     <div>DomesticPage</div>
//   )
// }

// export default DomesticPage

import PageHeader from '../../../components/PageHeader/PageHeader';
import Domestic from '../../../components/Animals/Domestic/Domestic';
import { MainContainer, Content } from '../AnimalStyled';

const DomesticPage = () => {
  return (
    <MainContainer>
      <PageHeader title="Domestic Animals" />

      <Content>
        <Domestic />
      </Content>
    </MainContainer>
  );
};

export default DomesticPage;
