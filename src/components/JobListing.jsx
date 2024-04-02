import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const JobListing = ({ job }) => {
  //baslangic olarak false ayarla sonra degistircem uzun yaziyi gostermek icin
  const [showFullDescription, setShowFullDescription] = useState(false);

  // basit olarak burada aciklama kisminin tam halini aliyorum ve bunun icin let kullaniyorum. let kullanmamim sebebi daha sonra duruma gore degistirecegim icin.
  let description = job.description;

  // state false oldugunda kisa text gostericem
  if (!showFullDescription) {
    // basta let olarak kullandigim icin burada duruma gore degistiriyorum. en basit sekilde kisa text gosterme yontemlerinden biri :)
    description = job.description.slice(0, 90) + '...';
  }

  // state degistiricem full yazi ya da kisa yazi gostermek icin
  const handleShowFullText = () => {
    setShowFullDescription(prev => !prev);
  };

  return (
    <div className='relative bg-white shadow-md rounded-xl'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='my-2 text-gray-600'>{job.type}</div>
          <h3 className='text-xl font-bold'>{job.title}</h3>
        </div>

        <div className='mb-5'>{description}</div>
        <button onClick={handleShowFullText} className='mb-5 text-indigo-500 hover:text-indigo-600'>
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>

        <h3 className='mb-2 text-indigo-500'>{job.salary}</h3>

        <div className='mb-5 border border-gray-100'></div>

        <div className='flex flex-col justify-between mb-4 lg:flex-row'>
          <div className='mb-3 text-orange-700'>
            <FaMapMarker className='inline mb-1 mr-1 text-lg' />
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
