import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Navigator from 'pages/NavigatorPage/NavigatorPage';

import Learn from 'pages/LearnWriting/LearnWriting';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Navigator />} />
          <Route path="/learn" element={<Learn />} />

          <Route></Route>
        </Route>
      </Routes>
    </>
  );
};
