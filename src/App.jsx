import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Navigator from 'pages/NavigatorPage/NavigatorPage';

import LearnNL from 'pages/NL/NLcapitals/CapitalsNL';
import Menu from 'pages/MenuPage/MenuPage';
import Birds from 'pages/AnimalsTopics/BirdsPage/BirdsPage';
import Wild from 'pages/AnimalsTopics/WildPage/WildPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigator />} />
          <Route path="nl" element={<LearnNL />} />
          <Route path="menu" element={<Menu />} />
          <Route path="birds" element={<Birds />} />
          <Route path="wild" element={<Wild />} />
        </Route>
      </Routes>
    </>
  );
};
