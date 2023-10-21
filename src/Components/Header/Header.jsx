import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import logo from '../../assets/nokarlogo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import AuthButtons from './AuthButtons';
import Logout from './Logout';
const Header = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="relative w-full bg-neutral-100">
      <div className="mx-auto flex max-w-1440 items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[80px]">
        <div className="inline-flex items-center space-x-2">
          <img
            src={logo}
            alt="NOKAR"
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li className="`text-lg uppercase font-semibold text-gray-800 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Home</span>
              </NavLink>
            </li>
            <li className="`text-lg uppercase font-semibold text-gray-800 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/add-products"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">Add Products</span>
              </NavLink>
            </li>
            <li className="`text-lg uppercase font-semibold text-gray-800 hover:text-gray-500`">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/my-cart"
              >
                <span className="py-3 border-y-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:py-2 ">My Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">{!loggedUser ? <AuthButtons /> : <Logout />}</div>
        <div className="lg:hidden">
          <HiOutlineMenuAlt1 />
        </div>
      </div>
    </div>
  );
};

export default Header;
