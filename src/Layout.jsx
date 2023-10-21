import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Components/Providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const Layout = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
      <Header
        theme={theme}
        handleTheme={handleTheme}
      />
      <main className="w-full min-h-[85vh] flex flex-col justify-center items-center bg-white dark:bg-gray-800 dark:text-white">
        <Outlet />
      </main>
      <Footer />
      <AuthProvider />
    </>
  );
};

export default Layout;
