import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Navigator from 'pages/NavigatorPage/NavigatorPage';

import LearnNL from 'pages/NL/NLcapitals/CapitalsNL';
import Menu from 'pages/MenuPage/MenuPage';
import Birds from 'pages/AnimalsTopics/BirdsPage/BirdsPage';
import Wild from 'pages/AnimalsTopics/WildPage/WildPage';
import Domestic from 'pages/AnimalsTopics/DomesticPage/DomesticPage';
import TestPage from 'pages/testPage/testPage';
import SeaAnim from 'pages/AnimalsTopics/SeaAnimalsPage/SeaAnimalsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigator />} />
          <Route path="nl" element={<LearnNL />} />
          <Route path="menu" element={<Menu />} />
          <Route path="test" element={<TestPage />} />
          <Route path="birds" element={<Birds />} />
          <Route path="wild" element={<Wild />} />
          <Route path="domestic" element={<Domestic />} />
          <Route path="seaanim" element={<SeaAnim />} />
        </Route>
      </Routes>
    </>
  );
};
