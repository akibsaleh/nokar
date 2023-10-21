import { useContext } from 'react';
import LoginForm from '../Forms/LoginForm';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center max-w-1440 py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end">{!loggedUser ? <LoginForm /> : <p className="w-full text-center text-2xl font-bold">You are Already logged in</p>}</div>
      <div className="w-full lg:w-1/2 flex justify-center pb-5 lg:pb-0 lg:justify-start items-center">
        <img
          src="https://i.ibb.co/T1Yw6pG/access-bg.webp"
          alt="Get Access to Nokar"
          className="w-56 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Login;
