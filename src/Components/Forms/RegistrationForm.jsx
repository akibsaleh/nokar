import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsBoxArrowRight } from 'react-icons/bs';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../SharedComponents/GoogleLogIn';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { handleRegistration, profileUpdate } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      photo: '',
      email: '',
      password: '',
    },
  });

  const handleOnSubmit = (data) => {
    const { name, photo, email, password } = data;

    console.log(errors);

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Password must have atleast 1 uppercase');
    } else if (!/[!@#$%^&*()-+={}[\]|\\;:'",<.>/?]/.test(password)) {
      toast.error('Password must have atleast 1 special character');
    } else {
      handleRegistration(email, password)
        .then(() => {
          profileUpdate(name, photo).then(() => {
            toast.success('Successfully Registered');
            navigate('/');
          });
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(`Registration Failed, try again ${err.message}`);
        });
    }
  };

  return (
    <>
      <div className="text-center max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Register Here</h2>
        <p className="text-lg text-gray-700">
          Fill up the form below and register to Nokar. Already have an account?{' '}
          <Link
            className="text-indigo-500"
            to="/login"
          >
            Login Here
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col max-w-lg w-full pt-10 my-5 bg-gray-50 border border-gray-100 rounded-sm gap-y-5"
      >
        <div className="flex justify-center items-start gap-y-3 w-full drop-shadow-sm">
          <label
            htmlFor="full-name"
            className="px-4 py-3 bg-gray-100 rounded-s-md w-32 font-semibold text-gray-700 border border-gray-200 border-r-0"
          >
            Name
          </label>
          <input
            type="text"
            id="full-name"
            className="w-full px-4 py-3 rounded-e-md border border-gray-200"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
        </div>
        {errors.name && <p className="bg-red-300 text-black p-2 rounded-sm">Name is required. Please enter your full name</p>}
        <div className="flex justify-center items-start gap-y-3 w-full drop-shadow-sm">
          <label
            htmlFor="profile-photo"
            className="px-4 py-3 bg-gray-100 rounded-s-md w-32 font-semibold text-gray-700 border border-gray-200 border-r-0"
          >
            Photo
          </label>
          <input
            type="text"
            id="profile-photo"
            className="w-full px-4 py-3 rounded-e-md border border-gray-200"
            placeholder="Enter image URL of display photo"
            {...register('photo', {
              required: true,
            })}
          />
        </div>
        {errors.photo && <p className="bg-red-300 text-black p-2 rounded-sm">Photo is required. Please enter your photo URL</p>}
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
            {...register('email', {
              required: true,
            })}
          />
        </div>
        {errors.email && <p className="bg-red-300 text-black p-2 rounded-sm">Valid email is required. Please enter a valid email</p>}
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
        {errors.password && <p className="bg-red-300 text-black p-2 rounded-sm">Password is required. Please enter password</p>}
        <div className="flex flex-col justify-center my-5 gap-y-4">
          <button
            className="rounded-sm border-transparent border-2 bg-gray-700 px-4 py-3 font-medium text-white transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent  flex items-center justify-center gap-x-2"
            type="submit"
          >
            Register <BsBoxArrowRight />
          </button>
          <GoogleLogIn />
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
