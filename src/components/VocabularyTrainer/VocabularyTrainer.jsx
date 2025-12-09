import React from 'react';
import { Clock, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { useVocabularyTrainer } from '../../hooks/useVocabularyTraining';

const VocabularyTrainer = ({ sheetId, sheetName, name }) => {
  const {
    currentWord,
    userInput,
    setUserInput,
    timeLeft,
    feedback,
    learnedWords,
    queue,
    loading,
    error,
    inputRef,
    handleSubmit,
    handleResetProgress,
  } = useVocabularyTrainer(sheetId, sheetName, name);

  const getFeedbackColor = () => {
    if (!feedback) return '';
    switch (feedback.type) {
      case 'correct':
        return 'text-green-600 bg-green-50 border border-green-200';
      case 'wrong':
        return 'text-red-600 bg-red-50 border border-red-200';
      case 'timeout':
        return 'text-orange-600 bg-orange-50 border border-orange-200';
      case 'learned':
        return 'text-blue-600 bg-blue-50 border border-blue-200';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-200">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Завантаження слів...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-200">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Помилка</h1>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (queue.length === 0 && currentWord === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-200">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Вітаємо!</h1>
          <p className="text-slate-600 mb-4">
            Ви вивчили всі слова з теми "{sheetName}"!
          </p>
          <div className="text-left bg-slate-50 rounded-lg p-4 border border-slate-200 max-h-96 overflow-y-auto">
            {learnedWords.map((word, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700">
                  {word.word} - {word.translation}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={handleResetProgress}
            className="mt-4 w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 transition shadow-lg"
          >
            Почати заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Вивчення: {name}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">
              Залишилось:{' '}
              <span className="font-bold text-slate-700">{queue.length}</span>
            </div>
            <div className="text-sm text-slate-600">
              Вивчено:{' '}
              <span className="font-bold text-green-600">
                {learnedWords.length}
              </span>
            </div>
            {learnedWords.length > 0 && (
              <button
                onClick={handleResetProgress}
                className="text-xs text-red-500 hover:text-red-700 underline transition"
                title="Скинути весь прогрес"
              >
                Скинути
              </button>
            )}
          </div>
        </div>

        {currentWord && (
          <>
            <div className="bg-gradient-to-br from-slate-600 via-gray-500 to-slate-700 rounded-xl p-6 mb-6 text-center shadow-2xl border border-slate-400">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-white" />
                <span
                  className={`text-2xl font-bold ${
                    timeLeft <= 2 ? 'text-red-200' : 'text-white'
                  }`}
                >
                  {timeLeft}s
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {currentWord.word}
              </h2>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < currentWord.correctCount
                        ? 'bg-white shadow-md'
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !feedback && userInput.trim()) {
                    handleSubmit();
                  }
                }}
                placeholder="Введіть переклад..."
                disabled={!!feedback}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-lg disabled:bg-gray-100 transition bg-gray-50"
              />
              <button
                onClick={handleSubmit}
                disabled={!!feedback || !userInput.trim()}
                className="w-full mt-3 bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-700 active:from-slate-800 active:to-gray-800 transition shadow-lg disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Перевірити
              </button>
            </div>

            {feedback && (
              <div
                className={`${getFeedbackColor()} rounded-lg p-4 flex items-center gap-2 font-semibold shadow-sm`}
              >
                {feedback.type === 'correct' || feedback.type === 'learned' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                {feedback.message}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VocabularyTrainer;
