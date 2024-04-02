import React from 'react';
import jobs from '../jobs.json';
import { JobListing } from './JobListing';

// isHome propunu eger anasayfa degilse tum job listini maplamak icin kullanacagim.
// bu componenti JobsPage icerisinde de joblari gostermek icin de kullanacagim o yuzden eger anasayfa ise 3 tane goster degilse hepsini goster gibi bir mantigi var

export const JobListings = ({ isHome = false }) => {
  // HomePage icinden props olarak true yolladim boylece anasayfaya gidince 3 tane mapliyacam
  const jobListings = isHome ? jobs.jobs.slice(0, 3) : jobs.jobs;

  return (
    <section className='px-4 py-10 bg-blue-50'>
      <div className='m-auto container-xl lg:container'>
        <h2 className='mb-6 text-3xl font-bold text-center text-indigo-500'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {jobListings.map(job => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};
