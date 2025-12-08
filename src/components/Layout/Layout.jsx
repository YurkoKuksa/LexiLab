// import Navigator from 'components/Navigator/Navigator';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        {/* <Navigator /> */}
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
