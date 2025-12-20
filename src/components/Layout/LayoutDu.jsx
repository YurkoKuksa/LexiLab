import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpButton';
import Footer from '../Footer/Footer';
import DutchHeader from '../Dutch/HeaderDu/DutchTypingHeader';

const Layout = () => {
  return (
    <>
      <DutchHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
      <ScrollUpBtn />
    </>
  );
};

export default Layout;
