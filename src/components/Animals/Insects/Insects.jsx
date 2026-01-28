import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const Insects = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Insects';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Insects"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default Insects;
