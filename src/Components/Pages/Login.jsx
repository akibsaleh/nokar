import { useContext } from 'react';
import LoginForm from '../Forms/LoginForm';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center max-w-8xl py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 flex flex-col items-end">{!loggedUser ? <LoginForm /> : <p className="w-full text-center text-2xl font-bold">You are Already logged in</p>}</div>
      <div className="w-1/2 flex justify-start">
        <img
          src="https://i.ibb.co/T1Yw6pG/access-bg.webp"
          alt="Get Access to Nokar"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Login;
