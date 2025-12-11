// import Navigator from 'components/Navigator/Navigator';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollUpBtn } from '../ScrollUpButton/ScrollUpButton';

const Layout = () => {
  return (
    <div>
      <div>
        {/* <Navigator /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ScrollUpBtn />
      </div>
    </div>
  );
};

export default Layout;
