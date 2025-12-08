import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navig, NavLinks, NavWrapper } from './Navigator.Styled';

const Navigator = () => {
  return (
    <div>
      <Navig role="navigation">
        <NavWrapper>
          <ul className="space-y-2">
            {/* <li className="group">
              <NavLink
                to="/home"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Home
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/intro"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.2s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Intro
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/tasks"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.4s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Tasks
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/scrolldown"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.6s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  SmoothScrollDown
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/animation"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.8s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Animation Page
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/animation2"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-green-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Animation Page 2
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/fin"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1.2s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  FIn Model
                </span>
              </NavLink>
            </li> */}

            <li className="group">
              <NavLink
                to="/learn"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1.4s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Learn Writing
                </span>
              </NavLink>
            </li>
            {/* <li className="group">
              <NavLink
                to="/qr"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  QR
                </span>
              </NavLink>
            </li> */}

            {/* <li className="group">
              <NavLink
                to="/intro"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.2s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Intro
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/tasks"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.4s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Tasks
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/scrolldown"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.6s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  SmoothScrollDown
                </span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink
                to="/animation"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.8s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Animation Page
                </span>
              </NavLink>
            </li> */}
          </ul>

          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}</style>
        </NavWrapper>
      </Navig>
    </div>
  );
};

export default Navigator;
