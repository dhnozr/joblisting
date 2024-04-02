import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center text-center h-96'>
        <i className='mb-4 text-yellow-400 fas fa-exclamation-triangle fa-4x'></i>
        <h1 className='mb-4 text-6xl font-bold'>404 Not Found</h1>
        <p className='mb-5 text-xl'>This page does not exist</p>
        <Link to='/' className='px-3 py-2 mt-4 text-white bg-indigo-700 rounded-md hover:bg-indigo-900'>
          Go Back
        </Link>
      </section>
    </>
  );
};
