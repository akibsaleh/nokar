import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {
  const navigate = useNavigate();
  const { handleGoogleLogin } = useContext(AuthContext);
  const handleGoogleAuth = () => {
    handleGoogleLogin()
      .then((result) => {
        console.log(result);
        toast.success('Successfully logged in with Google');
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to log in with Google');
      });
  };

  return (
    <>
      <button
        onClick={handleGoogleAuth}
        className="rounded-sm border-gray-700 border-2 px-4 py-3 font-semibold text-gray-700 transition-all hover:scale-95 hover:bg-gray-700 hover:text-white flex items-center justify-center gap-x-2"
        type="button"
      >
        <FcGoogle className="text-xl" />
        Log in with Google
      </button>
    </>
  );
};

export default GoogleLogIn;
