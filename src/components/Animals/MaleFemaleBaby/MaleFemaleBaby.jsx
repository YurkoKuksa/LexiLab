import { useOutletContext } from 'react-router-dom';
import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';

const MaleFemaleBaby = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Male Female Baby';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return (
    <>
      <VocabularyTrainer
        sheetId="17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ"
        sheetName="male_female_baby"
        name={pageName}
        from="ENG"
        to="УКР"
      />
    </>
  );
};

export default MaleFemaleBaby;
