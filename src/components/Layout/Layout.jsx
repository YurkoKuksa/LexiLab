// import Navigator from 'components/Navigator/Navigator';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpButton';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
      <ScrollUpBtn />
    </>
  );
};

export default Layout;
