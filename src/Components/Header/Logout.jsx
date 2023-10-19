import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';

const Logout = () => {
  const { handleLogOut, loggedUser } = useContext(AuthContext);
  const handleButton = () => {
    handleLogOut()
      .then(() => toast.success('Logged out successfully'))
      .catch(() => toast.error('Failed to log out'));
  };
  return (
    <>
      <div className="bg-gray-200 h-12 flex justify-center items-center rounded-sm">
        <img
          src={loggedUser?.photoURL}
          className="w-12 h-12 object-cover rounded-s-sm"
          alt={loggedUser?.displayName}
        />
        <span className="pl-3 pr-4 font-semibold text-gray-700">{loggedUser?.displayName}</span>
      </div>
      <button
        onClick={handleButton}
        className="rounded-sm border-gray-700 border-2 px-4 py-2 text-lg font-semibold text-gray-700 uppercase transition-all hover:scale-95 hover:bg-gray-700 hover:text-white"
      >
        Log Out
      </button>
    </>
  );
};

export default Logout;
