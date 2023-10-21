import { useContext } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { AuthContext } from '../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../SharedComponents/GoogleLogIn';

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    handleSignIn(email, password)
      .then(() => {
        toast.success('Logged in successfully');
        navigate('/');
      })
      .catch((error) => toast.error(`Failed to Log in. ${error.message}`));
  };

  return (
    <>
      <div className="text-center max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">Login to Nokar</h2>
        <p className="text-lg text-gray-700 dark:text-gray-100">
          Enter your email and password. Don&apos;t have an account.{' '}
          <Link
            className="text-indigo-500"
            to="/register"
          >
            Register Here
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col max-w-lg w-full pt-10 my-5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-sm gap-y-5"
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
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <p className="bg-red-300 text-black p-2 rounded-sm">Email is required. Please enter a valid email</p>}
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
            {...register('password', { required: true })}
          />
        </div>
        {errors.password && <p className="bg-red-300 text-black p-2 rounded-sm">Password is required. Please enter a valid password</p>}
        <div className="flex flex-col justify-center my-5 gap-y-4">
          <button
            className="rounded-sm border-transparent border-2 bg-gray-700 dark:bg-gray-100 px-4 py-3 font-medium text-white dark:text-gray-900 transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent  flex items-center justify-center gap-x-2"
            type="submit"
          >
            Login <BsBoxArrowRight />
          </button>
          <GoogleLogIn />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
