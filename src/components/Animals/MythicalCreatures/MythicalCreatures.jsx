import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const MythicalCreatures = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Mythical Creatures';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Mythical_creatures"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default MythicalCreatures;
