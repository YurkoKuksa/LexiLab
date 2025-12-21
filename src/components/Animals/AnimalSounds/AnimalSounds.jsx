import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const AnimalSounds = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Animals Sounds';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="Animal_sounds"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default AnimalSounds;
