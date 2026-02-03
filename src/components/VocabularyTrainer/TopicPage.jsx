import WordList from 'pages/Am/WordListPage/WordListPage';
import VocabularyTrainer from './VocabularyTrainer';

const { useState, useEffect } = require('react');

const TopicPage = ({ pageName, sheetId, sheetName }) => {
  const [step, setStep] = useState('list');

  // 1️⃣ Автоперехід, якщо вже бачили список
  useEffect(() => {
    const seen = localStorage.getItem(`seen_${sheetName}`);
    if (seen === 'true') {
      setStep('trainer');
    }
  }, [sheetName]);

  // 2️⃣ Обробник кнопки Go
  const handleGo = () => {
    localStorage.setItem(`seen_${sheetName}`, 'true');
    setStep('trainer');
  };

  return step === 'list' ? (
    <WordList
      sheetId={sheetId}
      sheetName={sheetName}
      // onGo={() => setStep('trainer')}
      onGo={handleGo}
    />
  ) : (
    <VocabularyTrainer
      sheetId={sheetId}
      sheetName={sheetName}
      name={pageName}
      from="ENG"
      to="УКР"
      onBack={() => {
        localStorage.setItem(`seen_${sheetName}`, 'false');
        setStep('list');
      }}
    />
  );
};

export default TopicPage;
