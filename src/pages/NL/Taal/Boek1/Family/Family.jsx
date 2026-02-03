import TopicPageDu from '../../../../../components/VocabularyTrainer/TopicPageDu';

const Family = () => {
  const pageName = 'Familie';
  const sheetId = '1Xp4ss73_LCsWnTGH2lfTa_jb9vG1mKBd4OrFSKQOcw8';
  const sheetName = 'family';

  return (
    <TopicPageDu sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );
};

export default Family;
