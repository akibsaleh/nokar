import RegistrationForm from '../Forms/RegistrationForm';

const Register = () => {
  return (
    <div className="flex justify-center items-center max-w-8xl py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 flex flex-col items-end">
        <RegistrationForm />
      </div>
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

export default Register;
