import React from 'react';
import { Link } from 'react-router-dom';

export const ViewAll = () => {
  return (
    <section className='max-w-lg px-6 m-auto my-10'>
      <Link to={`/jobs`} className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'>
        View All Jobs
      </Link>
    </section>
  );
};
