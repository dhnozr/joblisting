import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter(
  // mainlayout sayfayi dinamik olarak gostermek icin kullaniliyor navbari heryerde gostermek istiyorum ancak geri kalani outlet esletikce gosterecegim
  // outlet hatirlatma: outlet alt route esletikce gostermeye yariyor
  // burada MainLayout Outlet olarak HomePage gosteriyor index ise bunun ilk gosterilecek sayfa oldugunu belirtiyor
  // surekli yaziyorum ki daha sonra basktigimda sip diye hatirliyayim ney neydi diye :)
  // * tum sayfalari kapliyor boylece eger olmayan bir sayfaya giderse NotFound sayfasi kullaniciya gosteriliyor

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
