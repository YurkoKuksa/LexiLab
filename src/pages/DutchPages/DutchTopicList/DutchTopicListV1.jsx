import React, { useState } from 'react';

const DutchTopicsList = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

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
  ];

  const topics = [
    {
      id: 1,
      title: 'Алфавіт і вимова',
      level: 'A1',
      icon: '🔤',
      description: 'Голландський алфавіт, особливості вимови, дифтонги',
      subtopics: [
        '26 букв алфавіту',
        'Голосні та приголосні',
        'Дифтонги: ui, ij, ou',
        'Наголос у словах',
      ],
    },
    {
      id: 2,
      title: 'Знайомство і привітання',
      level: 'A1',
      icon: '👋',
      description: 'Базові фрази для знайомства та спілкування',
      subtopics: [
        'Hallo, goedemorgen, goedemiddag',
        'Hoe heet je? Ik heet...',
        'Hoe gaat het?',
        'Tot ziens, doei',
      ],
    },
    {
      id: 3,
      title: 'Цифри і числа',
      level: 'A1',
      icon: '🔢',
      description: 'Числівники від 0 до мільйона',
      subtopics: ['0-20', 'Десятки 20-100', 'Сотні та тисячі', 'Дати та час'],
    },
    {
      id: 4,
      title: "Сім'я та друзі",
      level: 'A1',
      icon: '👨‍👩‍👧‍👦',
      description: "Члени сім'ї, опис людей",
      subtopics: [
        'Vader, moeder, broer, zus',
        'Opa, oma, oom, tante',
        'Vrienden en kennissen',
        'Опис зовнішності',
      ],
    },
    {
      id: 5,
      title: 'Дієслова в теперішньому часі',
      level: 'A1-A2',
      icon: '⚡',
      description: 'Présens, дієвідміна правильних і неправильних дієслів',
      subtopics: [
        'Zijn, hebben, worden',
        'Правильні дієслова',
        'Неправильні дієслова',
        'Модальні дієслова',
      ],
    },
    {
      id: 6,
      title: 'Їжа та напої',
      level: 'A1',
      icon: '🍕',
      description: 'Назви продуктів, в ресторані, на кухні',
      subtopics: [
        'Brood, kaas, melk',
        'Groenten en fruit',
        'В ресторані замовлення',
        'Smakelijk!',
      ],
    },
    {
      id: 7,
      title: 'Дім і житло',
      level: 'A1-A2',
      icon: '🏠',
      description: 'Кімнати, меблі, побутові предмети',
      subtopics: [
        'Kamer, keuken, badkamer',
        'Meubels: tafel, stoel, bed',
        'Опис житла',
        'Huren of kopen',
      ],
    },
    {
      id: 8,
      title: 'Транспорт і подорожі',
      level: 'A2',
      icon: '🚲',
      description: 'Види транспорту, орієнтування в місті',
      subtopics: [
        'Fiets, auto, trein, bus',
        'NS - Nederlandse Spoorwegen',
        'Waar is...?',
        'Kaartjes kopen',
      ],
    },
    {
      id: 9,
      title: 'Робота та професії',
      level: 'A2',
      icon: '💼',
      description: 'Назви професій, розмова про роботу',
      subtopics: [
        'Beroepen: leraar, dokter...',
        'Wat doe je?',
        'Sollicitatiegesprek',
        'CV schrijven',
      ],
    },
    {
      id: 10,
      title: 'Хобі та дозвілля',
      level: 'A1-A2',
      icon: '⚽',
      description: 'Захоплення, спорт, розваги',
      subtopics: [
        'Sporten: voetbal, zwemmen',
        "Hobby's: lezen, koken",
        'Muziek en film',
        'Uitgaan',
      ],
    },
    {
      id: 11,
      title: 'Погода та природа',
      level: 'A2',
      icon: '🌤️',
      description: 'Описання погоди, пори року, природні явища',
      subtopics: [
        'Het regent, het sneeuwt',
        'Lente, zomer, herfst, winter',
        'De zon schijnt',
        'Natuur: bos, zee, bergen',
      ],
    },
    {
      id: 12,
      title: 'Минулий час (Verleden tijd)',
      level: 'A2',
      icon: '⏮️',
      description: 'Imperfectum та Perfectum',
      subtopics: [
        'Onvoltooid verleden tijd',
        'Voltooid verleden tijd',
        'Hebben/zijn + voltooid deelwoord',
        'Неправильні дієслова в минулому',
      ],
    },
    {
      id: 13,
      title: 'Майбутній час',
      level: 'A2',
      icon: '⏭️',
      description: 'Zullen + інфінітив, gaan + інфінітив',
      subtopics: ['Ik zal...', 'Ik ga...', 'Плани на майбутнє', 'Передбачення'],
    },
    {
      id: 14,
      title: 'Прикметники та прислівники',
      level: 'A2',
      icon: '✨',
      description: 'Опис предметів, людей, дій',
      subtopics: [
        'Groot, klein, mooi, lelijk',
        '-e закінчення прикметників',
        'Ступені порівняння',
        'Прислівники способу дії',
      ],
    },
    {
      id: 15,
      title: 'Прийменники',
      level: 'A2',
      icon: '📍',
      description: 'Прийменники місця, часу, напрямку',
      subtopics: [
        'In, op, aan, bij',
        'Voor, na, tijdens',
        'Naar, van, uit',
        'Onder, boven, naast',
      ],
    },
    {
      id: 16,
      title: 'Питальні речення',
      level: 'A1-A2',
      icon: '❓',
      description: 'Формування питань різних типів',
      subtopics: [
        'Wie, wat, waar, wanneer',
        'Hoe, waarom, hoeveel',
        'Ja/nee питання',
        'Інверсія',
      ],
    },
    {
      id: 17,
      title: 'Заперечення',
      level: 'A1-A2',
      icon: '🚫',
      description: 'Geen, niet, ніколи',
      subtopics: [
        'Niet: позиція в реченні',
        'Geen + іменник',
        'Nooit, nergens, niemand',
        'Подвійне заперечення',
      ],
    },
    {
      id: 18,
      title: "Здоров'я та медицина",
      level: 'A2',
      icon: '🏥',
      description: 'У лікаря, симптоми, ліки',
      subtopics: [
        'Ik ben ziek',
        'Bij de dokter',
        'Medicijnen kopen',
        'Het ziekenhuis',
      ],
    },
    {
      id: 19,
      title: 'Покупки та магазини',
      level: 'A1-A2',
      icon: '🛍️',
      description: 'В магазині, ціни, розміри',
      subtopics: [
        'Winkels: supermarkt, bakker',
        'Hoeveel kost dit?',
        'Maten en kleuren',
        'Betalen: pin of contant',
      ],
    },
    {
      id: 20,
      title: 'Культура та традиції',
      level: 'A2-B1',
      icon: '🎭',
      description: 'Голландські свята, звичаї, етикет',
      subtopics: [
        'Sinterklaas en Koningsdag',
        'Gezelligheid',
        'Nederlandse etiquette',
        'Typisch Nederlands',
      ],
    },
  ];

  const getLevelColor = level => {
    if (level === 'A1') return 'bg-green-100 text-green-700 border-green-300';
    if (level === 'A2') return 'bg-blue-100 text-blue-700 border-blue-300';
    if (level.includes('A1-A2'))
      return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    return 'bg-purple-100 text-purple-700 border-purple-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6 relative overflow-hidden">
      {/* Dutch words background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dutchWords.map((word, index) => (
          <div
            key={index}
            className="absolute text-4xl font-bold opacity-5 text-orange-600"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animation: `float ${15 + (index % 5) * 3}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${((index * 15) % 60) - 30}deg)`,
            }}
          >
            {word}
          </div>
        ))}
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📚 Теми з голландської мови
          </h1>
          <p className="text-xl text-gray-600">
            Структурована програма навчання від A1 до A2
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map(topic => (
            <div
              key={topic.id}
              className={`bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-orange-400 transition-all cursor-pointer transform hover:scale-105 ${
                selectedTopic === topic.id ? 'border-orange-500 shadow-2xl' : ''
              }`}
              onClick={() =>
                setSelectedTopic(selectedTopic === topic.id ? null : topic.id)
              }
            >
              {/* Topic Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{topic.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {topic.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mt-2 ${getLevelColor(
                        topic.level
                      )}`}
                    >
                      {topic.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{topic.description}</p>

              {/* Subtopics (expandable) */}
              {selectedTopic === topic.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-3">Підтеми:</h4>
                  <ul className="space-y-2">
                    {topic.subtopics.map((subtopic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{subtopic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Expand indicator */}
              <div className="text-center mt-4 text-sm text-gray-400">
                {selectedTopic === topic.id ? '▲ Згорнути' : '▼ Детальніше'}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            🎯 Успіхів у навчанні!
          </h2>
          <p className="text-gray-600">
            Систематичне вивчення цих тем допоможе досягти рівня A2
          </p>
        </div>
      </div>
    </div>
  );
};

export default DutchTopicsList;
