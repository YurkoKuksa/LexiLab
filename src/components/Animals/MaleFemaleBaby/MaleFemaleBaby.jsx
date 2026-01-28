import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const MaleFemaleBaby = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Male Female Baby';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="male_female_baby"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default MaleFemaleBaby;
