import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';

const testPage = () => {
  const pageName = 'Testing Lerneres app';

  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="test"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default testPage;
