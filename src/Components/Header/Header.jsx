import { PropTypes } from 'prop-types';
import logo from '../../assets/nokarlogo.svg';
import logoLight from '../../assets/nokarlogolight.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import AuthButtons from './AuthButtons';
import Logout from './Logout';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const Header = ({ theme, handleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="relative w-full bg-neutral-100 dark:bg-gray-950">
      <div className="mx-auto flex max-w-1440 items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[80px]">
        <div className="inline-flex items-center space-x-2">
          <img
            src={theme === 'dark' ? logoLight : logo}
            alt="NOKAR"
            className="h-8 w-auto"
          />
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleTheme}
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {theme === 'dark' ? (
                  <BsFillMoonStarsFill
                    className="text-white"
                    onClick={handleTheme}
                  />
                ) : (
                  <BsSun
                    className="text-black text-xl"
                    onClick={handleTheme}
                  />
                )}
              </span>
            </label>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Home</span>
              </NavLink>
            </li>
            <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/add-products"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Add Products</span>
              </NavLink>
            </li>
            <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/my-cart"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">My Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:gap-x-4 items-center">
          {!loggedUser ? (
            <AuthButtons
              theme={theme}
              handleTheme={handleTheme}
            />
          ) : (
            <Logout />
          )}
        </div>
        <div className="lg:hidden ml-5 relative">
          <HiOutlineMenuAlt1
            className="text-2xl text-gray-900 dark:text-white"
            onClick={handleMobileMenu}
          />
          <div className={`${showMenu ? 'block' : 'hidden'} absolute right-0 z-50 bg-gray-200 dark:bg-gray-600 px-5 py-10 w-60 top-12`}>
            <ul className="flex flex-col space-y-8">
              <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/"
                >
                  <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Home</span>
                </NavLink>
              </li>
              <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add-products"
                >
                  <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Add Products</span>
                </NavLink>
              </li>
              <li className="`text-lg uppercase font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-500`">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/my-cart"
                >
                  <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">My Cart</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  theme: PropTypes.string,
  handleTheme: PropTypes.func,
};
