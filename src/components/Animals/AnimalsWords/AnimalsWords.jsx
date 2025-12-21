import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const AnimalsWords = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Animals Words';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="Animals_words"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default AnimalsWords;
