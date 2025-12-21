import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const Pets = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Pets';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="Pets"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default Pets;
