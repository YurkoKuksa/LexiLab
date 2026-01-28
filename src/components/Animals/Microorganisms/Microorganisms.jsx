import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const Microorganisms = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Microorganisms';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Microorganisms"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default Microorganisms;
