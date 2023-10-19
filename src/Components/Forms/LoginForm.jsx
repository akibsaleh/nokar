import { useContext } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const { handleSignIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    handleSignIn(email, password)
      .then(() => toast.success('Logged in successfully'))
      .catch(() => toast.error('Failed to Log in'));
  };
  return (
    <>
      <div className="text-center max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Login to Nokar</h2>
        <p className="text-lg text-gray-700">Enter your email and password</p>
      </div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col max-w-lg w-full p-10 my-5 bg-gray-50 border border-gray-100 rounded-sm gap-y-5"
      >
        <div className="flex justify-center items-start gap-y-3 w-full drop-shadow-sm">
          <label
            htmlFor="email"
            className="px-4 py-3 bg-gray-100 rounded-s-md w-32 font-semibold text-gray-700 border border-gray-200 border-r-0"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-e-md border border-gray-200"
            placeholder="Enter your email"
            {...register('email')}
          />
        </div>
        <div className="flex justify-center items-start gap-y-3 w-full drop-shadow-sm">
          <label
            htmlFor="password"
            className="px-4 py-3 bg-gray-100 rounded-s-md w-32 font-semibold text-gray-700 border border-gray-200 border-r-0"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 rounded-e-md border border-gray-200"
            placeholder="Enter Password"
            {...register('password')}
          />
        </div>
        <div className="flex flex-col justify-center my-5 gap-y-4">
          <button
            className="rounded-sm border-transparent border-2 bg-gray-700 px-4 py-3 font-medium text-white transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent  flex items-center justify-center gap-x-2"
            type="submit"
          >
            Login <BsBoxArrowRight />
          </button>
          <button
            className="rounded-sm border-gray-700 border-2 px-4 py-3 font-semibold text-gray-700 transition-all hover:scale-95 hover:bg-gray-700 hover:text-white flex items-center justify-center gap-x-2"
            type="submit"
          >
            <FcGoogle className="text-xl" />
            Log in with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
