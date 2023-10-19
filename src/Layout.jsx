import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Components/Providers/AuthProvider';

const Layout = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Header />
      <Outlet />
      <Footer />
      <AuthProvider />
    </>
  );
};

export default Layout;
