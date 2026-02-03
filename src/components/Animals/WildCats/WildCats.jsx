import { useOutletContext } from 'react-router-dom';
// import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';
// import { GOOGLE_SHEETS } from '../../../config/googleSheets';
// import SheetTrainer from '../../VocabularyTrainer/SheetTrainer';
import TopicPage from '../../../components/VocabularyTrainer/TopicPage';

const WildCats = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Wild Cats';
  const sheetId = '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE';
  const sheetName = 'Wild_cats';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);
  return (
    <TopicPage sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
  // return <SheetTrainer sheet={GOOGLE_SHEETS.WILD_CATS} name={pageName} />;
};

export default WildCats;
