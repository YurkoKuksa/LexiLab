import { useOutletContext } from 'react-router-dom';
// import VocabularyTrainer from '../../VocabularyTrainer/VocabularyTrainer';
import { useEffect } from 'react';
import { GOOGLE_SHEETS } from '../../../config/googleSheets';
import SheetTrainer from '../../VocabularyTrainer/SheetTrainer';

const WildCats = () => {
  const { setPageTitle } = useOutletContext();

  const pageName = 'Wild Cats';

  useEffect(() => {
    setPageTitle(pageName);
  }, [setPageTitle]);

  return <SheetTrainer sheet={GOOGLE_SHEETS.WILD_CATS} name={pageName} />;

  // return (
  //   <>
  //     <VocabularyTrainer
  //       sheetId="1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE"
  //       sheetName="Wild_cats"
  //       name={pageName}
  //       from="ENG"
  //       to="УКР"
  //     />
  //     {/* <VocabularyTrainer
  //       sheetId={sheet.id}
  //       sheetName={sheet.sheetName}
  //       name={pageName}
  //       from={sheet.from}
  //       to={sheet.to}
  //     /> */}
  //   </>
  // );
};

export default WildCats;
