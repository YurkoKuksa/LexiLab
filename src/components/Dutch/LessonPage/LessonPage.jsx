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
  };

  const { bookId, themeId } = useParams();
  const navigate = useNavigate();

  const book = taalSectionsData.find(b => b.id === bookId);
  const lesson = book?.blocks.find(b => b.id === themeId);

  // Отримуємо з даних або стану
  const backgroundType = lesson.backgroundType || 'blueSnow';
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
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-white hover:text-gray-200"
        >
          ← Назад
        </button>

        <h1 className="text-4xl font-bold mb-2 text-white">{lesson.title}</h1>
        <p className="text-gray-300">{book.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <LessonComponent />
      </div>
    </BackgroundComponent>
  );
};
export default LessonPage;

// <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 ">
