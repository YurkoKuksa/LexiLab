import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleSheetWords } from '../../../hooks/useGoogleSheetWords';

export default function WordList() {
  const navigate = useNavigate();
  const { words, loading, error } = useGoogleSheetWords(
    '1EEbBE2ahdX2zZ-gLUdIX6Xqz1TyI2WPRD59rWADgYOE',
    'Pets'
  );
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after data loads - ВИПРАВЛЕНО: useEffect замість useState
  useEffect(() => {
    if (!loading && words.length > 0) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [loading, words]);

  const handleGoClick = () => {
    navigate('/pets');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#45818e] border-t-transparent"></div>
          <p className="mt-4 text-[#013f4a] font-medium">
            Завантаження слів...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-[#013f4a] mb-2">Помилка</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Go Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleGoClick}
            className="bg-gradient-to-r from-[#45818e] to-[#013f4a] text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-[#013f4a] hover:to-[#45818e]"
          >
            Go!
          </button>
        </div>

        {/* Word List Table */}
        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 max-h-[5000px] translate-y-0'
              : 'opacity-0 max-h-0 -translate-y-4'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#45818e] to-[#013f4a] text-white">
                  <th className="py-4 px-6 text-left font-semibold text-lg border-r border-[#013f4a]/20">
                    Слово
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-lg">
                    Переклад
                  </th>
                </tr>
              </thead>
              <tbody>
                {words.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#45818e]/5 hover:to-[#013f4a]/5 transition-colors duration-200"
                    style={{
                      animation: isVisible
                        ? `slideIn 0.5s ease-out ${index * 0.05}s both`
                        : 'none',
                    }}
                  >
                    <td className="py-4 px-6 border-r border-gray-200">
                      <span className="text-[#013f4a] font-medium">
                        {item.words[0]}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">
                        {item.translations[0]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Word Count */}
        <div className="text-center mt-6">
          <p className="text-[#45818e] font-medium">
            Всього слів:{' '}
            <span className="font-bold text-[#013f4a]">{words.length}</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
