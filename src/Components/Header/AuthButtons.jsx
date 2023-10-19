import { NavLink } from 'react-router-dom';

const AuthButtons = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/login"
      >
        <button
          type="button"
          className="login rounded-sm border-gray-700 border-2 px-4 py-2 text-lg font-semibold text-gray-700 uppercase transition-all hover:scale-95 hover:bg-gray-700 hover:text-white"
        >
          Login
        </button>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/register"
      >
        <button
          type="button"
          className="register rounded-sm border-transparent border-2 bg-gray-700 px-4 py-2 text-lg font-semibold text-white uppercase transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent"
        >
          Register
        </button>
      </NavLink>
    </>
  );
};

export default AuthButtons;
