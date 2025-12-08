import React from 'react';

import { AnimatedNavLink, Navig, NavWrapper } from './Navigator.Styled';

const Navigator = () => {
  return (
    <div>
      <Navig role="navigation">
        <NavWrapper>
          <ul className="space-y-2">
            <li className="group">
              <AnimatedNavLink
                to="/learn"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1.4s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Learn Writing
                </span>
              </AnimatedNavLink>
            </li>
          </ul>
        </NavWrapper>
      </Navig>
    </div>
  );
};

export default Navigator;
