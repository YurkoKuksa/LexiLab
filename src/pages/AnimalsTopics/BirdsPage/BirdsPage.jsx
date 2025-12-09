import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
import Birds from '../../../components/Animals/Birds/Birds';
import {
  ArrowIcon,
  BackButton,
  Content,
  Cursor,
  Header,
  HeaderContent,
  HeaderFlex,
  MainContainer,
  Spacer,
  Title,
} from '../AnimalStyled';

const BirdsPage = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Birds';

  // Ефект друкування
  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < fullText.length) {
      // Друкуємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // Пауза після повного тексту
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Видаляємо по одній літері
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 100);
    } else if (isDeleting && displayText.length === 0) {
      // Пауза перед новим циклом
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  return (
    <MainContainer>
      <Header>
        <HeaderContent>
          <HeaderFlex>
            <BackButton onClick={() => navigate(-1)}>
              <ArrowIcon />
              <span>Назад</span>
            </BackButton>

            <Title>
              {displayText}
              <Cursor>|</Cursor>
            </Title>

            <Spacer />
          </HeaderFlex>
        </HeaderContent>
      </Header>

      <Content>
        <Birds />
      </Content>
    </MainContainer>
  );
  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200">
  //     {/* Заголовок з кнопкою */}
  //     <div className="bg-white shadow-md border-b border-gray-200">
  //       <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between">
  //           {/* Кнопка назад */}
  //           <button
  //             onClick={() => navigate(-1)}
  //             className="group flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg font-medium shadow-lg hover:from-slate-700 hover:to-gray-700 active:from-slate-800 active:to-gray-800 transition-all duration-200 hover:shadow-xl hover:scale-105"
  //           >
  //             <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
  //             <span>Назад</span>
  //           </button>

  //           {/* Заголовок по центру */}
  //           <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-slate-800">
  //             {displayText}
  //             <span className="animate-pulse">|</span>
  //           </h1>

  //           {/* Порожній div для балансу flex */}
  //           <div className="w-24"></div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Контент */}
  //     <div className="pt-6">
  //       <Birds />
  //     </div>
  //   </div>
  // );
};

export default BirdsPage;
