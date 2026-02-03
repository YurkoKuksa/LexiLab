import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Topics } from '../../../config/Topics';
import WordList from 'pages/Am/WordListPage/WordListPage';
import VocabularyTrainer from 'components/VocabularyTrainer/VocabularyTrainer';

const TopicPage = () => {
  const { topicSlug } = useParams();
  const topic = Object.values(Topics).find(t => t.slug === topicSlug);
  const [step, setStep] = useState('list'); // 'list' | 'trainer'

  useEffect(() => {
    // Якщо користувач вже бачив wordList
    const seen = localStorage.getItem(`seen_${topicSlug}`);
    if (seen) setStep('trainer');
  }, [topicSlug]);

  if (!topic) return <div>Topic not found</div>;

  const handleGo = () => {
    localStorage.setItem(`seen_${topicSlug}`, 'true');
    setStep('trainer');
  };

  return (
    <>
      {step === 'list' && (
        <WordList
          sheetId={topic.source.sheetId}
          sheetName={topic.source.sheetName}
          onGo={handleGo}
        />
      )}

      {step === 'trainer' && (
        <VocabularyTrainer
          sheetId={topic.source.sheetId}
          sheetName={topic.source.sheetName}
          name={topic.label}
          from={topic.languages.from}
          to={topic.languages.to}
        />
      )}
    </>
  );
};

export default TopicPage;
