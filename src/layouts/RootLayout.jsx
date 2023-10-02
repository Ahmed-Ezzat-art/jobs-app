import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <main className="container grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
