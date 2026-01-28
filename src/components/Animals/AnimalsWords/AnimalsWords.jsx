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
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Animals_words"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default AnimalsWords;
