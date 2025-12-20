// src/data/taalSections.js
// import Deel7 from '../pages/NL/Taal/Boek1/Deel7/Deel7';
import Provincies from '../components/NLcomponents/Dutch/ProvincieCapitals';
import Deel7 from '../components/NLcomponents/TaalCompleet/BookA1/Deel7.jsx';

export const taalSectionsData = [
  {
    id: 'boek1',
    title: 'TaalCompleet Boek1',
    subtitle: 'A1 - Початковий рівень',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500',
    blocks: [
      {
        id: 'hallo',
        title: 'Thema 1',
        description: 'Hallo',
        lessons: 15,
        duration: '15 години',
        icon: '🔤',
      },
      {
        id: 'school',
        title: 'Thema 2',
        description: 'De school',
        lessons: 12,
        duration: '3 години',
        icon: '👋',
      },
      {
        id: 'wonen',
        title: 'Thema 3',
        description: 'Wonen',
        lessons: 6,
        duration: '1.5 години',
        icon: '🔢',
      },
      {
        id: 'eten-en-drinken',
        title: 'Thema 4',
        description: 'Eten en drinken',
        lessons: 10,
        duration: '2.5 години',
        icon: '👤',
      },
      {
        id: 'docter',
        title: 'Thema 5',
        description: 'De docter',
        lessons: 10,
        duration: '2.5 години',
        icon: '👤',
      },
      {
        id: 'kleren',
        title: 'Thema 6',
        description: 'De kleren',
        lessons: 10,
        duration: '2.5 години',
        icon: '👤',
      },
      {
        id: 'reizen',
        title: 'Thema 7',
        description: 'Reizen',
        lessons: 10,
        duration: '2.5 години',
        icon: '👤',
        component: Deel7,
      },
      {
        id: 'vrije-tijd',
        title: 'Thema 8',
        description: 'Vrije tijd',
        lessons: 10,
        duration: '2.5 години',
        icon: '👤',
      },
      {
        id: 'provincies',
        title: 'De kaart van Nederland',
        description: 'De hoofdsteden van de provincies.',
        lessons: 10,
        duration: '2.5 години',
        icon: '🏢',
        component: Provincies,
      },
    ],
  },
  {
    id: 'boek2',
    title: 'TaalCompleet Boek2',
    subtitle: 'A2 - Граматичні основи',
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
];

// export default taalSectionsData;
