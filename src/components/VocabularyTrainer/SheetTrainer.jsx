import VocabularyTrainer from './VocabularyTrainer';

const SheetTrainer = ({ sheet, name }) => {
  return (
    <VocabularyTrainer
      sheetId={sheet.id}
      sheetName={sheet.sheetName}
      from={sheet.from}
      to={sheet.to}
      name={name}
      {...sheet.options}
    />
  );
};

export default SheetTrainer;
