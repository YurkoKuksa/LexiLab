import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const Wild = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Wild Animals';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Wild"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default Wild;
