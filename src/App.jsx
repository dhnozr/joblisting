import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { NotFound } from './pages/NotFound';
import { JobPage, jobLoader } from './pages/JobPage';
import { AddJobPage } from './pages/AddJobPage';
import { EditJobPage } from './pages/EditJobPage';

function App() {
  // yeni job eklemek icin
  const addJob = async newJob => {
    // yeni job eklerken method post oluyor
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // burada sting cevirip servere yolluyoruz bu
      body: JSON.stringify(newJob),
    });
    return;
  };

  // job silmek icin
  const deleteJob = async id => {
    // fetch ile server istek atiyoruz sondaki "id" ile hangi adrese attigimizi belirtiyoruz. "id" burada dinamik olarak hangi adrese deletee istegi gonderdigimizi belirler.
    // fetch icindeki method:"DELETE" ifadesi URL'deki kaynagin silinmesi gerektigini belirtir. Burad header falan yok cunku sildigimiz icin cokda  gerekli degil.
    const res = await fetch(
      `http://localhost:8000/jobs/${id}
    `,
      { method: 'DELETE' }
    );
    return;
  };

  // updateJob

  const updateJob = async job => {
    const res = await fetch(`http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

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
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        {/* :id yazimi buranin dinamik oldugunu belirtiyor. */}
        <Route path='/edit-job/:id' element={<EditJobPage updateJubSubmit={updateJob} />} loader={jobLoader} />
        {/* burada iki yerde loader kullanma sebebim ikisinde de ayni job fetch islemini yapiyoruz. jobLoader bizim icin job fetchledegi icin alttaki ve ustteki ayni gorevi goruyor alttaki tikladigim id'deki job detail gidiyor yukarida ki ise edite tikladigimda o id'deki job fetcheleyip edit sayfasina getiriyor o yuzden ikisinde de ayni loaderi kullaniyorum */}
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
