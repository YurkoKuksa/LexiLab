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
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Groups_of_animals"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default GroupsAnimals;
