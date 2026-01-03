import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LayoutDu from './components/Layout/LayoutDu';
import LayoutAnimals from './components/Layout/LayoutAnimals';

import Navigator from 'pages/NavigatorPage/NavigatorPage';
import BlocksMenu from 'pages/DutchPages/Blocks/Bloks';

import LearnNL from 'pages/NL/Taal/Boek1/NLcapitals/CapitalsNL';
import Menu from 'pages/MenuPage/MenuPage';
import AmericanWelcomPage from 'pages/Am/StartingPage/HolographicCard';

import Birds from 'pages/AnimalsTopics/BirdsPage/BirdsPage';
import Wild from 'pages/AnimalsTopics/WildPage/WildPage';
import Domestic from 'pages/AnimalsTopics/DomesticPage/DomesticPage';
import TestPage from 'pages/testPage/testPage';
import TestPage1 from 'pages/Am/StartingPage/HolographicCard';

import SeaAnim from 'pages/AnimalsTopics/SeaAnimalsPage/SeaAnimalsPage';

import Parts from 'pages/AnimalsTopics/AnimalPartsPage/AnimalPartsPage';
import Sounds from 'pages/AnimalsTopics/AnimalSoundsPage/AnimalSoundsPage';
import Words from 'pages/AnimalsTopics/AnimalsWords/AnimalsWords';
import Dinosaurs from 'pages/AnimalsTopics/DinosaursPage/DinosaursPage';
import Fish from 'pages/AnimalsTopics/FishPage/FishPage';
import Group from 'pages/AnimalsTopics/GroupsAnimalsPage/GroupsAnimalsPage';
import Insects from 'pages/AnimalsTopics/InsectsPage/InsectsPage';
import Micro from 'pages/AnimalsTopics/MicroorganismsPage/MicroorganismsPage';
import Myth from 'pages/AnimalsTopics/MythicalCreaturesPage/MythicalCreaturesPage';
import Pets from 'pages/AnimalsTopics/PetsPage/PetsPage';
import Cats from 'pages/AnimalsTopics/WildCatsPage/WildCatsPage';
import Welcome from 'pages/DutchPages/LounchPage/DutchLounchPage';
import Taal from 'pages/DutchPages/Sections/TaalSections';
import Zo from 'pages/DutchPages/Sections/ZoSections';
import Soon from 'pages/ComingSoon/ComingSoonPage';
import LessonPage from 'components/Dutch/LessonPage/LessonPageAutoBg';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigator />} />
          <Route path="nl" element={<LearnNL />} />

          <Route path="am" element={<Menu />} />
          <Route path="test" element={<TestPage />} />
          <Route path="testtwo" element={<TestPage1 />} />

          <Route path="/" element={<LayoutAnimals />}>
            <Route path="birds" element={<Birds />} />
            <Route path="wild" element={<Wild />} />
            <Route path="domestic" element={<Domestic />} />
            <Route path="seaanim" element={<SeaAnim />} />
            <Route path="parts" element={<Parts />} />
            <Route path="sounds" element={<Sounds />} />
            <Route path="words" element={<Words />} />
            <Route path="dinos" element={<Dinosaurs />} />
            <Route path="fish" element={<Fish />} />
            <Route path="group" element={<Group />} />
            <Route path="insects" element={<Insects />} />
            <Route path="micro" element={<Micro />} />
            <Route path="myth" element={<Myth />} />
            <Route path="pets" element={<Pets />} />
            <Route path="cats" element={<Cats />} />
          </Route>
        </Route>
        <Route path="soon" element={<Soon />} />
        <Route path="menu" element={<AmericanWelcomPage />} />
        <Route path="welcomeam" element={<AmericanWelcomPage />} />

        <Route path="/dutch" element={<LayoutDu />}>
          <Route index element={<BlocksMenu />} />
          <Route path="soon" element={<Soon />} />
          <Route path="taal" element={<Taal />} />
          <Route path="taal/:bookId/:themeId" element={<LessonPage />} />

          <Route path="zo" element={<Zo />} />
        </Route>

        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
};
