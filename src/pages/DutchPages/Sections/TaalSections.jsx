import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { taalSectionsData } from '../../../data/taalSectionsData';
import { dutchWords } from '../../../data/dutchWordsV2';
import { useRef } from 'react';

const TaalSections = () => {
  const navigate = useNavigate();
  const scrollYRef = useRef(0);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // const scrollToId = id => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  useEffect(() => {
    if (activeSection) {
      const el = document.getElementById(`section-${activeSection}`);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      const topEl = document.getElementById('sections-top');
      if (topEl) {
        topEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6 relative overflow-hidden ">
      {/* Dutch words background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dutchWords.map((word, index) => {
          const left = (index * 37) % 100;
          const top = (index * 53) % 100;

          return (
            <div
              key={index}
              className="absolute text-5xl font-bold opacity-10 text-orange-500"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${
                  12 + (index % 4) * 2
                }s ease-in-out infinite`,
                animationDelay: `${(index * 0.4) % 10}s`,
                transform: `rotate(${((index * 23) % 60) - 30}deg)`,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateY(-50px) translateX(-20px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) translateX(30px) rotate(3deg);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10" id="sections-top">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎓 Навчальна програма з голландської
          </h1>
          <p className="text-xl text-gray-600">
            Структуровані блоки від початкового до середнього рівня
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {taalSectionsData.map(section => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
            >
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r ${section.color} p-6 cursor-pointer hover:shadow-lg transition-all`}
                onClick={() => {
                  scrollYRef.current = window.scrollY;

                  setActiveSection(prev =>
                    prev === section.id ? null : section.id
                  );
                }}
              >
                <div
                  className="flex items-center justify-between text-white"
                  // id={`section-${section.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{section.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                      <p className="text-lg opacity-90">{section.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-3xl transition-transform">
                    {activeSection === section.id ? '▼' : '▶'}
                  </div>
                </div>
              </div>

              {/* Section Content */}
              {activeSection === section.id && (
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  {section.blocks.map(block => (
                    <div
                      key={block.id}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{block.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {block.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {block.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              📚 {block.lessons} уроків
                            </span>
                            <span className="flex items-center gap-1">
                              ⏱️ {block.duration}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              scrollToTop();
                              navigate(`/dutch/taal/${section.id}/${block.id}`);
                            }}
                            className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
                          >
                            Почати навчання
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 bg-gradient-to-r from-orange-100 to-blue-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600">6</div>
              <div className="text-gray-600">Секцій</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24</div>
              <div className="text-gray-600">Блоків навчання</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">282</div>
              <div className="text-gray-600">Уроків</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">~75</div>
              <div className="text-gray-600">Годин контенту</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaalSections;
