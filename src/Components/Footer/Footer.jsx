import { Link } from 'react-router-dom';
import logoLight from '../../assets/nokarlogolight.svg';
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-gray-700 py-5 mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <img
          src={logoLight}
          alt="NOKAR"
          className="h-5 w-auto"
        />
      </div>
      <p className="text-white">
        &copy; Copyright {new Date().getFullYear()}. Developed by{' '}
        <Link
          className="text-indigo-200"
          to="https://github.com/akibsaleh"
        >
          Akib Saleh
        </Link>
      </p>
      <div>
        <ul className="inline-flex gap-x-3">
          <li className="text-white text-xl">
            <Link to="/">
              <FaFacebook />
            </Link>
          </li>
          <li className="text-white text-xl">
            <Link to="/">
              <FaXTwitter />
            </Link>
          </li>
          <li className="text-white text-xl">
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
