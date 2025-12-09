import { AnimatedNavLink } from 'components/Navigator/Navigator.Styled';
import { Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav role="navigation">
        <ul className="space-y-2">
          <li className="group">
            <AnimatedNavLink
              to="/birds"
              className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite]"
            >
              <span
                className="
    relative inline-block 
    transition-all duration-300 
    font-semibold tracking-tight

    /* звичайний стан */
    text-transparent bg-clip-text
    bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.32)]

    /* hover: прибираємо градієнт повністю */
    group-hover:text-white group-hover:bg-none group-hover:drop-shadow-[0_0px_1px_rgba(0,0,0,0.45)]
  "
              >
                Birds
              </span>
            </AnimatedNavLink>
          </li>
          <li className="group">
            <AnimatedNavLink
              to="/wild"
              className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.2s]"
            >
              <span
                className="
    relative inline-block 
    transition-all duration-300 
    font-semibold tracking-tight

    /* звичайний стан */
    text-transparent bg-clip-text
    bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.32)]

    /* hover: прибираємо градієнт повністю */
    group-hover:text-white group-hover:bg-none group-hover:drop-shadow-[0_0px_1px_rgba(0,0,0,0.45)]
  "
              >
                Wild Animals
              </span>
            </AnimatedNavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Menu;
