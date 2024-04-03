import React, { useEffect, useState } from 'react';
import jobs from '../jobs.json';
import { JobListing } from './JobListing';
import { Spinner } from './Spinner';

// isHome propunu eger anasayfa degilse tum job listini maplamak icin kullanacagim.
// bu componenti JobsPage icerisinde de joblari gostermek icin de kullanacagim o yuzden eger anasayfa ise 3 tane goster degilse hepsini goster gibi bir mantigi var

export const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      // kullanici anasayfada ise 3 tane limit koyuyorum ki kullanici 3 tane joblist gorsun ama anasayfada degilse hepsini fetch yapmak istiyorum
      // bu componenti JobsPage icinde kullandigim icin boylece o sayfaya gittigimde tum jobListleri fetchlemis olacagim
      // isHome degiskeni bu yuzden burada cok kullanisli
      const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error loading data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='px-4 py-10 bg-blue-50'>
      <div className='m-auto container-xl lg:container'>
        <h2 className='mb-6 text-3xl font-bold text-center text-indigo-500'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {jobs.map(job => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
