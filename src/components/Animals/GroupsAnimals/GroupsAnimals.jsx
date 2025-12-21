import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const GroupsAnimals = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Groups of Animals';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="Groups_of_animals"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default GroupsAnimals;
