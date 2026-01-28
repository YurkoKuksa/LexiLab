import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const Dinosaurs = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = ' Dinosaurs';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="Dinosaurs"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default Dinosaurs;
