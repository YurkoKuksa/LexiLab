import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import TopicPage from '../../../components/VocabularyTrainer/TopicPage';

const Domestic = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Domestic';
  const sheetId = '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE';
  const sheetName = 'Domestic';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <TopicPage sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
};

export default Domestic;
