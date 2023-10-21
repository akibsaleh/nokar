import { NavLink } from 'react-router-dom';

const AuthButtons = () => {
  return (
    <>
      <div className="hidden md:inline-flex gap-x-4">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/login"
        >
          <button
            type="button"
            className="login rounded-sm border-gray-700 dark:border-gray-100 border-2 px-4 py-2 text-lg font-semibold text-gray-700 dark:text-gray-100 uppercase transition-all hover:scale-95 hover:bg-gray-700 hover:text-white"
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
            className="register rounded-sm border-transparent border-2 bg-gray-700 dark:bg-gray-100 px-4 py-2 text-lg font-semibold text-white dark:text-gray-900 uppercase transition-all hover:border-gray-700 dark:hover:border-gray-100 hover:text-gray-700 dark:hover:text-gray-700 hover:scale-95 hover:bg-transparent"
          >
            Register
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AuthButtons;

// AuthButtons.propTypes = {
//   theme: PropTypes.string,
//   handleTheme: PropTypes.func,
// };
