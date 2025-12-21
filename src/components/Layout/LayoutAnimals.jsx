import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpButton';
import LearningHeader from '../PageHeader/PageHeader';

import SnowfallBackground from '../BackGround/SnowfallBackground';
import BlueSnow from '../BackGround/SnowingV2';
import ChristmasBackground from '../BackGround/ChristmasBackground';

const Layout = () => {
  const [pageTitle, setPageTitle] = useState('');

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
  // Використовуємо сезонну тему, якщо не вказана в даних
  const backgroundType = getSeasonalTheme();
  const BackgroundComponent = backgrounds[backgroundType];

  //   const pageTitle = 'Animals Words';

  return (
    <>
      <BackgroundComponent>
        <LearningHeader title={pageTitle} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={{ setPageTitle }} />
        </Suspense>

        <ScrollUpBtn />
      </BackgroundComponent>
    </>
  );
};

export default Layout;
