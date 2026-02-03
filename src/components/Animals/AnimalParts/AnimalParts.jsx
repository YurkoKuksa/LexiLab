import { useOutletContext } from 'react-router-dom';
// import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';
import TopicPage from '../../../components/VocabularyTrainer/TopicPage';

const AnimalParts = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Animals Parts';
  const sheetId = '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE';
  const sheetName = 'Animal_parts';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <TopicPage sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
};

export default AnimalParts;
