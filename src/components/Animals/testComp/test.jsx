import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';

const testPage = () => {
  const pageName = 'Testing Lerneres app';

  return (
    <>
      <VocabularyTrainer
        sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
        sheetName="test"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default testPage;
