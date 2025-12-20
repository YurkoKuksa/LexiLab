import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpButton';
import Footer from '../Footer/Footer';
import Header from '../Am/HeaderAm/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
      <ScrollUpBtn />
    </>
  );
};

export default Layout;
