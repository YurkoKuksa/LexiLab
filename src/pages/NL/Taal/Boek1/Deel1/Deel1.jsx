// import VocabularyTrainer from '../../../../../components/VocabularyTrainer/VocabularyTrainer';
import TopicPageDu from '../../../../../components/VocabularyTrainer/TopicPageDu';

const Deel1 = () => {
  const pageName = 'Hallo';
  const sheetId = '1Xp4ss73_LCsWnTGH2lfTa_jb9vG1mKBd4OrFSKQOcw8';
  const sheetName = 'A1deel1';

  return (
    <TopicPageDu sheetId={sheetId} sheetName={sheetName} pageName={pageName} />
  );

  // return (
  //   <>
  //     <VocabularyTrainer
  //       sheetId="1Xp4ss73_LCsWnTGH2lfTa_jb9vG1mKBd4OrFSKQOcw8"
  //       sheetName="A1deel1"
  //       name={pageName}
  //       from="nl"
  //       to="ua"
  //     />
  //   </>
  // );
};

export default Deel1;
