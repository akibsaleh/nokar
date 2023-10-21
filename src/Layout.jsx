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
        gutter={20}
        toastOptions={{
          className: '!bg-gray-900 !text-white !px-8 !py-5 !leading-tight',
          duration: 5000,
        }}
      />
      <Header />
      <main className="w-full min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
      <AuthProvider />
    </>
  );
};

export default Layout;
