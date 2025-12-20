import React, { useState } from 'react';

const DutchLearningSections = () => {
  const [activeSection, setActiveSection] = useState(null);

  const dutchWords = [
    'hallo',
    'dankjewel',
    'goedemorgen',
    'tot ziens',
    'alsjeblieft',
    'ja',
    'nee',
    'fiets',
    'kaas',
    'gezellig',
    'lekker',
    'mooi',
    'water',
    'brood',
    'huis',
    'zon',
    'regen',
    'vrienden',
    'liefde',
    'vader',
    'moeder',
    'kind',
    'werk',
    'school',
    'boek',
    'auto',
    'straat',
    'stad',
    'land',
    'eten',
    'drinken',
    'slapen',
    'leren',
    'spreken',
    'luisteren',
    'schrijven',
    'lezen',
    'denken',
    'weten',
    'dag',
    'avond',
    'nacht',
    'morgen',
    'middag',
    'week',
    'maand',
    'jaar',
    'tijd',
    'nu',
    'later',
    'vroeg',
    'laat',
    'snel',
    'langzaam',
    'groot',
    'klein',
    'oud',
    'jong',
    'nieuw',
    'goed',
    'slecht',
    'veel',
    'weinig',
    'alles',
    'niets',
    'iets',
    'hier',
    'daar',
    'links',
    'rechts',
    'boven',
    'onder',
    'voor',
    'achter',
    'tussen',
  ];

  const sections = [
    {
      id: 1,
      title: 'Основи мови',
      subtitle: 'A1 - Початковий рівень',
      icon: '🌱',
      color: 'from-green-400 to-emerald-500',
      blocks: [
        {
          id: 'a1-1',
          title: 'Алфавіт та вимова',
          description: 'Освоєння голландської абетки та звуків',
          lessons: 8,
          duration: '2 години',
          icon: '🔤',
        },
        {
          id: 'a1-2',
          title: 'Базові фрази',
          description: 'Привітання, прощання, ввічливість',
          lessons: 12,
          duration: '3 години',
          icon: '👋',
        },
        {
          id: 'a1-3',
          title: 'Цифри 0-100',
          description: 'Числа, рахунок, базова арифметика',
          lessons: 6,
          duration: '1.5 години',
          icon: '🔢',
        },
        {
          id: 'a1-4',
          title: 'Про себе',
          description: "Ім'я, вік, звідки я, моя сім'я",
          lessons: 10,
          duration: '2.5 години',
          icon: '👤',
        },
      ],
    },
    {
      id: 2,
      title: 'Граматика для початківців',
      subtitle: 'A1 - Граматичні основи',
      icon: '📝',
      color: 'from-blue-400 to-cyan-500',
      blocks: [
        {
          id: 'a1-g1',
          title: 'Дієслова zijn і hebben',
          description: 'Найважливіші дієслова та їх використання',
          lessons: 10,
          duration: '3 години',
          icon: '⚡',
        },
        {
          id: 'a1-g2',
          title: 'Теперішній час',
          description: 'Présens - дієвідміна правильних дієслів',
          lessons: 15,
          duration: '4 години',
          icon: '⏰',
        },
        {
          id: 'a1-g3',
          title: 'Іменники та артиклі',
          description: 'De/het, множина, присвійні займенники',
          lessons: 12,
          duration: '3 години',
          icon: '📚',
        },
        {
          id: 'a1-g4',
          title: 'Базові питання',
          description: 'Як запитувати та відповідати',
          lessons: 8,
          duration: '2 години',
          icon: '❓',
        },
      ],
    },
    {
      id: 3,
      title: 'Повсякденне спілкування',
      subtitle: 'A1-A2 - Практичні теми',
      icon: '💬',
      color: 'from-orange-400 to-red-500',
      blocks: [
        {
          id: 'a2-1',
          title: 'Їжа та напої',
          description: 'В ресторані, покупки, рецепти',
          lessons: 14,
          duration: '3.5 години',
          icon: '🍕',
        },
        {
          id: 'a2-2',
          title: 'Дім та житло',
          description: 'Кімнати, меблі, оренда квартири',
          lessons: 12,
          duration: '3 години',
          icon: '🏠',
        },
        {
          id: 'a2-3',
          title: 'Транспорт',
          description: 'Їзда на велосипеді, громадський транспорт',
          lessons: 10,
          duration: '2.5 години',
          icon: '🚲',
        },
        {
          id: 'a2-4',
          title: 'Покупки',
          description: 'Магазини, ціни, розміри, оплата',
          lessons: 11,
          duration: '3 години',
          icon: '🛍️',
        },
      ],
    },
    {
      id: 4,
      title: 'Середня граматика',
      subtitle: 'A2 - Поглиблене вивчення',
      icon: '🎓',
      color: 'from-purple-400 to-pink-500',
      blocks: [
        {
          id: 'a2-g1',
          title: 'Минулий час',
          description: 'Imperfectum та Perfectum',
          lessons: 18,
          duration: '5 годин',
          icon: '⏮️',
        },
        {
          id: 'a2-g2',
          title: 'Майбутній час',
          description: 'Zullen та gaan для майбутнього',
          lessons: 10,
          duration: '2.5 години',
          icon: '⏭️',
        },
        {
          id: 'a2-g3',
          title: 'Прикметники',
          description: 'Опис, ступені порівняння, закінчення',
          lessons: 12,
          duration: '3 години',
          icon: '✨',
        },
        {
          id: 'a2-g4',
          title: 'Прийменники',
          description: 'Місце, час, напрямок руху',
          lessons: 14,
          duration: '3.5 години',
          icon: '📍',
        },
      ],
    },
    {
      id: 5,
      title: 'Розмовна практика',
      subtitle: 'A2 - Реальні ситуації',
      icon: '🗣️',
      color: 'from-yellow-400 to-orange-500',
      blocks: [
        {
          id: 'a2-c1',
          title: 'На роботі',
          description: 'Співбесіда, офіс, колеги',
          lessons: 15,
          duration: '4 години',
          icon: '💼',
        },
        {
          id: 'a2-c2',
          title: 'У лікаря',
          description: 'Симптоми, ліки, запис на прийом',
          lessons: 10,
          duration: '2.5 години',
          icon: '🏥',
        },
        {
          id: 'a2-c3',
          title: 'Хобі та дозвілля',
          description: 'Спорт, розваги, подорожі',
          lessons: 12,
          duration: '3 години',
          icon: '⚽',
        },
        {
          id: 'a2-c4',
          title: 'Голландська культура',
          description: 'Свята, традиції, etiquette',
          lessons: 8,
          duration: '2 години',
          icon: '🎭',
        },
      ],
    },
    {
      id: 6,
      title: 'Підготовка до екзамену',
      subtitle: 'A2 - Сертифікація',
      icon: '🎯',
      color: 'from-indigo-400 to-blue-500',
      blocks: [
        {
          id: 'exam-1',
          title: 'Читання (Lezen)',
          description: 'Стратегії та практика читання',
          lessons: 10,
          duration: '3 години',
          icon: '📖',
        },
        {
          id: 'exam-2',
          title: 'Аудіювання (Luisteren)',
          description: 'Розуміння на слух різних акцентів',
          lessons: 12,
          duration: '3 години',
          icon: '🎧',
        },
        {
          id: 'exam-3',
          title: 'Письмо (Schrijven)',
          description: 'Листи, повідомлення, есе',
          lessons: 14,
          duration: '4 години',
          icon: '✍️',
        },
        {
          id: 'exam-4',
          title: 'Розмова (Spreken)',
          description: 'Діалоги, презентації, монологи',
          lessons: 16,
          duration: '4 години',
          icon: '🎤',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
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
          {sections.map(section => (
            <div
              key={section.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
            >
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r ${section.color} p-6 cursor-pointer hover:shadow-lg transition-all`}
                onClick={() =>
                  setActiveSection(
                    activeSection === section.id ? null : section.id
                  )
                }
              >
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{section.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                      <p className="text-lg opacity-90">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-3xl">
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
                          <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
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

export default DutchLearningSections;
