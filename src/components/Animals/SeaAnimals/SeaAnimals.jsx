import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import TopicPage from '../../../components/VocabularyTrainer/TopicPage';

const SeaAnimals = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Sea Animals';
  const sheetId = '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE';
  const sheetName = 'Sea_animals';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <TopicPage sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
};

export default SeaAnimals;
