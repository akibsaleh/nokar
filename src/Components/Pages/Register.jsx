import { useContext } from 'react';
import RegistrationForm from '../Forms/RegistrationForm';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center max-w-1440 py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 flex flex-col justify-center items-end">{!loggedUser ? <RegistrationForm /> : <p className="w-full text-center text-2xl font-bold">You are Already logged in</p>}</div>
      <div className="w-1/2 flex justify-start items-center">
        <img
          src="https://i.ibb.co/T1Yw6pG/access-bg.webp"
          alt="Get Access to Nokar"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Register;
