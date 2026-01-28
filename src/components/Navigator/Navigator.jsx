import { AnimatedNavLink, Navig, NavWrapper } from './Navigator.Styled';

const Navigator = () => {
  return (
    <div
      className="bg-gradient-to-br 
                    from-cyan-500/10 via-transparent to-grey-600/10"
    >
      <Navig role="navigation">
        <NavWrapper>
          <ul className="space-y-2">
            <li className="group">
              <AnimatedNavLink
                to="/am"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Menu Topics
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/dutch"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.2s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Dutch Learning
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/test"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.4s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Test Programm
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/welcome"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.6s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Welcome
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/testtwo"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_0.8s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Test Pages
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/birdgame"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Bird Game
                </span>
              </AnimatedNavLink>
            </li>
            <li className="group">
              <AnimatedNavLink
                to="/wordlist"
                className="block px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
                 hover:translate-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500
                 hover:shadow-lg hover:scale-105
                 animate-[float_3s_ease-in-out_infinite_1.2s]"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Word List
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
