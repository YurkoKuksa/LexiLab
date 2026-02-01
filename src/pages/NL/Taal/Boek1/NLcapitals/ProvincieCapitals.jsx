import VocabularyTrainer from '../../../../../components/VocabularyTrainer/VocabularyTrainer';

const ProvincieCapitals = () => {
  const pageName = 'Hoofdsteden en Provincies';

  return (
    <>
      <VocabularyTrainer
        sheetId="1Xp4ss73_LCsWnTGH2lfTa_jb9vG1mKBd4OrFSKQOcw8"
        sheetName="capitals"
        name={pageName}
        from="Provs"
        to="Hfdst"
      />
    </>
  );
};

export default ProvincieCapitals;
