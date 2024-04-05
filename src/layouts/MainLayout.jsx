import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = () => {
  // outlet route altinda eslesen tum routelari sayfada gostermek icin kullaniliyor.
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};
