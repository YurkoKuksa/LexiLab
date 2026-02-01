import VocabularyTrainer from '../../../../../components/VocabularyTrainer/VocabularyTrainer';

const Deel8Animals = () => {
  const pageName = 'Dieren';

  return (
    <>
      <VocabularyTrainer
        sheetId="1Xp4ss73_LCsWnTGH2lfTa_jb9vG1mKBd4OrFSKQOcw8"
        sheetName="A1deel8_animals"
        name={pageName}
        from="nl"
        to="ua"
      />
    </>
  );
};

export default Deel8Animals;
