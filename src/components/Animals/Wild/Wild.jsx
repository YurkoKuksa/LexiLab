import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import TopicPage from '../../../components/VocabularyTrainer/TopicPage';

const Wild = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Wild Animals';
  const sheetId = '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE';
  const sheetName = 'Wild';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <TopicPage sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
};

export default Wild;
