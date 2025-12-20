import { useParams, useNavigate } from 'react-router-dom';
import { taalSectionsData } from '../../../data/taalSectionsData';
import SnowfallBackground from '../../BackGround/SnowfallBackground';
import BlueSnow from '../../BackGround/SnowingV2';
import ChristmasBackground from '../../BackGround/ChristmasBackground';

const LessonPage = () => {
  const backgrounds = {
    winter: SnowfallBackground,
    blueSnow: BlueSnow,
    christmas: ChristmasBackground,
    // spring: SpringBackground,
    // fall: AutumnBackground,
    //
    //
  };

  // Функція для визначення теми залежно від дати
  const getSeasonalTheme = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();

    // Різдво (24-26 грудня)
    if (month === 12 && day >= 24 && day <= 26) {
      return 'christmas';
    }

    // Новий рік (27 грудня - 7 січня)
    if ((month === 12 && day >= 27) || (month === 1 && day <= 7)) {
      return 'winter';
    }

    // Зима (грудень, січень, лютий)
    if (month === 12 || month === 1 || month === 2) {
      return 'blueSnow';
    }

    // Весна (березень, квітень, травень)
    if (month >= 3 && month <= 5) {
      return 'spring'; // потрібно створити SpringBackground
    }

    // Літо (червень, липень, серпень)
    if (month >= 6 && month <= 8) {
      return 'blueSnow'; // або створіть літню тему
    }

    // Осінь (вересень, жовтень, листопад)
    if (month >= 9 && month <= 11) {
      return 'blueSnow'; // або створіть осінню тему
    }

    // За замовчуванням
    return 'blueSnow';
  };

  const { bookId, themeId } = useParams();
  const navigate = useNavigate();

  const book = taalSectionsData.find(b => b.id === bookId);
  const lesson = book?.blocks.find(b => b.id === themeId);

  // Використовуємо сезонну тему, якщо не вказана в даних
  const backgroundType = lesson?.backgroundType || getSeasonalTheme();
  const BackgroundComponent = backgrounds[backgroundType];

  if (!lesson || !lesson.component) {
    return (
      <BackgroundComponent>
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Урок не знайдено</h1>
          <button
            onClick={() => navigate('/dutch/taal')}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Повернутися до тем
          </button>
        </div>
      </BackgroundComponent>
    );
  }

  const LessonComponent = lesson.component;

  return (
    <BackgroundComponent>
      <div className="max-w-6xl mx-auto px-6 pt-8 sm:px-6 pt-4 sm:pt-8">
        <button
          onClick={() => navigate('/dutch/taal')}
          className="mb-4 sm:mb-6 text-xs sm:text-sm text-white hover:text-gray-200"
        >
          ← Назад
        </button>

        <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white leading-tight">
          {lesson.title}
        </h1>
        <p className="text-gray-300">{book.subtitle}</p>
      </div>

      <div className=" text-sm sm:text-base text-gray-300 mt-[-20px] sm:mt-0">
        <LessonComponent />
      </div>
    </BackgroundComponent>
  );
};
export default LessonPage;
