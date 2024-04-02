import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const MainLayout = () => {
  // outlet route altinda eslesen tum routelari sayfada gostermek icin kullaniliyor.
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
