import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

// burada useLoaderData hook cagiriyoruz ve yaptigimiz fetch isteginin sonucunu aliyoruz.
export const JobPage = ({ deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteJob = jobId => {
    // kullaniciya soru sorucam
    const confirm = window.confirm('Are you sure you want to delete this listing?');

    // eger false ise function cikmak icin
    if (!confirm) return;

    // burada id geciriyoruz boylece id gecirilen job listeden kaldirilacak
    // bunu direkt button uzerinden de verebilirdim ancak burada bu sekilde kullaninca kullaniciya silmek isteyip istemedigine dair soru sorabiliyorum
    deleteJob(jobId);

    toast.success('Job deleted successfully');

    // sildikten sonra kullaniciyi jobs sayfasina yonlendirmek icin
    navigate('/jobs');
  };

  return (
    <>
      <section>
        <div className='container px-6 py-6 m-auto'>
          <Link to='/jobs' className='flex items-center text-indigo-500 hover:text-indigo-600'>
            {/* bu iconlara className ekleyerek style verebiliyoruz */}
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container px-6 py-10 m-auto'>
          <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
            <main>
              <div className='p-6 text-center bg-white rounded-lg shadow-md md:text-left'>
                <div className='mb-4 text-gray-500'>{job.type}</div>
                <h1 className='mb-4 text-3xl font-bold'>{job.title}</h1>
                <div className='flex justify-center mb-4 text-gray-500 align-middle md:justify-start'>
                  <FaMapMarker className='mr-1 text-orange-700' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-lg font-bold text-indigo-800'>Job Description</h3>

                <p className='mb-4'>{job.description}</p>

                <h3 className='mb-2 text-lg font-bold text-indigo-800'>Salary</h3>

                <p className='mb-4'>{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className='p-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-xl font-bold'>Company Info</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='p-2 my-2 font-bold bg-indigo-100'>{job.company.contactEmail}</p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='p-2 my-2 font-bold bg-indigo-100'>{job.company.contactPhone}</p>
              </div>

              <div className='p-6 mt-6 bg-white rounded-lg shadow-md'>
                <h3 className='mb-6 text-xl font-bold'>Manage Job</h3>
                <Link
                  // edit sayfasina gitmek icin bu sekilde kullandim
                  to={`/edit-job/${job.id}`}
                  className='block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteJob(job.id)}
                  className='block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline'
                >
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
// <Route></Route> bileseninde 'loader' propu kullanildiginda, params otomatik olarak saglanir. useParams hooku loader kullanirken gerekli degil
export const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
