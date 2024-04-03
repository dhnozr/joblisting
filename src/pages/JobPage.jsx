import { useParams, useLoaderData } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

// burada useLoaderData hook cagiriyoruz ve yaptigimiz fetch isteginin sonucunu aliyoruz.
export const JobPage = () => {
  const job = useLoaderData();
  return (
    <>
      <section>
        <div className='container px-6 py-6 m-auto'>
          <a href='/jobs.html' className='flex items-center text-indigo-500 hover:text-indigo-600'>
            <i className='mr-2 fas fa-arrow-left'></i> Back to Job Listings
          </a>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container px-6 py-10 m-auto'>
          <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
            <main>
              <div className='p-6 text-center bg-white rounded-lg shadow-md md:text-left'>
                <div className='mb-4 text-gray-500'>Full-Time</div>
                <h1 className='mb-4 text-3xl font-bold'>Senior React Developer</h1>
                <div className='flex justify-center mb-4 text-gray-500 align-middle md:justify-start'>
                  <i className='mr-2 text-lg text-orange-700 fa-solid fa-location-dot'></i>
                  <p className='text-orange-700'>Boston, MA</p>
                </div>
              </div>

              <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-lg font-bold text-indigo-800'>Job Description</h3>

                <p className='mb-4'>
                  We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will
                  have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript
                  frameworks such as React or Angular.
                </p>

                <h3 className='mb-2 text-lg font-bold text-indigo-800'>Salary</h3>

                <p className='mb-4'>$70k - $80K / Year</p>
              </div>
            </main>

            <aside>
              <div className='p-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-xl font-bold'>Company Info</h3>

                <h2 className='text-2xl'>NewTek Solutions</h2>

                <p className='my-2'>
                  NewTek Solutions is a leading technology company specializing in web development and digital
                  solutions. We pride ourselves on delivering high-quality products and services to our clients while
                  fostering a collaborative and innovative work environment.
                </p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='p-2 my-2 font-bold bg-indigo-100'>contact@newteksolutions.com</p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='p-2 my-2 font-bold bg-indigo-100'>555-555-5555</p>
              </div>

              <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-xl font-bold'>Manage Job</h3>
                <a
                  href='/add-job.html'
                  className='block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
                >
                  Edit Job
                </a>
                <button className='block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline'>
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// React-Router data loader icin gerekli olan fetch yapisi bunu export ediyoruz ve route yazdigimiz yerde loader icinde kullaniyoruz boylece bizim icin sayfa yuklenmeden fetch yapiyor
// basta biraz karisik gorunuyor burda fetch yapip route sayfasinda kullanmak ama mantik kolay
// fetch yap route sayfasinda loader olarak kullan daha sonra gel yukarida hooku kullanarak fetchledigin dataya ulas
export const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
