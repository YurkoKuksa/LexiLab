import React, { useState, useEffect } from 'react';
// import { ArrowLeft } from 'lucide-react';

const DutchTypingHeader = () => {
  const phrases = React.useMemo(
    () => [
      'Goedemorgen!',
      'Tot ziens!',
      'Hoe gaat het?',
      'Dank je wel',
      'Alsjeblieft',
      'Geen probleem',
      'Fijne dag!',
      'Tot later',
      'Veel succes!',
      'Lekker weertje',
    ],
    []
  );

  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullPhrase = phrases[phraseIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < fullPhrase.length) {
          setCurrentPhrase(fullPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (!isDeleting && charIndex === fullPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
          setCurrentPhrase(fullPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <header className="w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Повернутися назад"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Назад</span>
          </button> */}

          <div className="flex-1 flex justify-center">
            <div className="text-lg font-medium text-gray-800">
              {currentPhrase}
              <span className="inline-block w-0.5 h-5 bg-gray-800 ml-1 animate-pulse"></span>
            </div>
          </div>

          <div className="w-20"></div>
        </div>
      </div>
    </header>
  );
};

export default DutchTypingHeader;
