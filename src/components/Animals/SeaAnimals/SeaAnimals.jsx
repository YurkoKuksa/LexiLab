import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const SeaAnimals = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Sea Animals';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Sea_animals"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default SeaAnimals;
