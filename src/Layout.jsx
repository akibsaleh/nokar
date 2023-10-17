import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-8xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
