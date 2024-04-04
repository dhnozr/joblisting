import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// prop olarak submit function geliyor
export const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = e => {
    e.preventDefault();

    // burada kullandigim degiskenler state ile ayni oldugu icin title:title yapmama gerek kalmiyor direkt degerini bu sekilde alabiliyorum. Buna "Object Property Shorthand" deniyor. Bu özellik, bir obje oluştururken, eğer obje özelliğinin adı ile atamak istediğiniz değişkenin adı aynıysa, değeri tekrar yazmanıza gerek kalmadan doğrudan değişken adını kullanabilmenizi sağlar.
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        contactEmail,
        contactPhone,
      },
    };

    // burada prop olarak gelen functionu kullaniyorum ve newJobu servere gonderiyorum
    addJobSubmit(newJob);
    // kullanici job submit ettikten sonra onu jobs sayfasina yonlendiriyorum
    return navigate('/jobs');
  };

  return (
    <>
      <section className='bg-indigo-50'>
        <div className='container max-w-2xl py-24 m-auto'>
          <div className='px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
            <form onSubmit={submitForm}>
              <h2 className='mb-6 text-3xl font-semibold text-center'>Add Job</h2>

              <div className='mb-4'>
                <label htmlFor='type' className='block mb-2 font-bold text-gray-700'>
                  Job Type
                </label>
                <select
                  value={type}
                  onChange={e => setType(e.target.value)}
                  id='type'
                  name='type'
                  className='w-full px-3 py-2 border rounded'
                  required
                >
                  <option value='Full-Time'>Full-Time</option>
                  <option value='Part-Time'>Part-Time</option>
                  <option value='Remote'>Remote</option>
                  <option value='Internship'>Internship</option>
                </select>
              </div>

              <div className='mb-4'>
                <label htmlFor='title' className='block mb-2 font-bold text-gray-700'>
                  Job Listing Name
                </label>
                <input
                  value={title}
                  type='text'
                  id='title'
                  name='title'
                  className='w-full px-3 py-2 mb-2 border rounded'
                  placeholder='eg. Beautiful Apartment In Miami'
                  required
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='description' className='block mb-2 font-bold text-gray-700'>
                  Description
                </label>
                <textarea
                  value={description}
                  id='description'
                  name='description'
                  className='w-full px-3 py-2 border rounded'
                  rows='4'
                  placeholder='Add any job duties, expectations, requirements, etc'
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className='mb-4'>
                <label htmlFor='type' className='block mb-2 font-bold text-gray-700'>
                  Salary
                </label>
                <select
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  id='salary'
                  name='salary'
                  className='w-full px-3 py-2 border rounded'
                  required
                >
                  <option value='Under $50K'>Under $50K</option>
                  <option value='$50K - 60K'>$50K - $60K</option>
                  <option value='$60K - 70K'>$60K - $70K</option>
                  <option value='$70K - 80K'>$70K - $80K</option>
                  <option value='$80K - 90K'>$80K - $90K</option>
                  <option value='$90K - 100K'>$90K - $100K</option>
                  <option value='$100K - 125K'>$100K - $125K</option>
                  <option value='$125K - 150K'>$125K - $150K</option>
                  <option value='$150K - 175K'>$150K - $175K</option>
                  <option value='$175K - 200K'>$175K - $200K</option>
                  <option value='Over $200K'>Over $200K</option>
                </select>
              </div>

              <div className='mb-4'>
                <label htmlFor='location' className='block mb-2 font-bold text-gray-700'>
                  Location
                </label>
                <input
                  value={location}
                  type='text'
                  id='location'
                  name='location'
                  className='w-full px-3 py-2 mb-2 border rounded'
                  placeholder='Company Location'
                  required
                  onChange={e => setLocation(e.target.value)}
                />
              </div>

              <h3 className='mb-5 text-2xl'>Company Info</h3>

              <div className='mb-4'>
                <label htmlFor='company' className='block mb-2 font-bold text-gray-700'>
                  Company Name
                </label>
                <input
                  value={companyName}
                  type='text'
                  id='company'
                  name='company'
                  className='w-full px-3 py-2 border rounded'
                  placeholder='Company Name'
                  onChange={e => setCompanyName(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='company_description' className='block mb-2 font-bold text-gray-700'>
                  Company Description
                </label>
                <textarea
                  value={companyDescription}
                  id='company_description'
                  name='company_description'
                  className='w-full px-3 py-2 border rounded'
                  rows='4'
                  placeholder='What does your company do?'
                  onChange={e => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className='mb-4'>
                <label htmlFor='contact_email' className='block mb-2 font-bold text-gray-700'>
                  Contact Email
                </label>
                <input
                  value={contactEmail}
                  type='email'
                  id='contact_email'
                  name='contact_email'
                  className='w-full px-3 py-2 border rounded'
                  placeholder='Email address for applicants'
                  required
                  onChange={e => setContactEmail(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='contact_phone' className='block mb-2 font-bold text-gray-700'>
                  Contact Phone
                </label>
                <input
                  value={contactPhone}
                  type='tel'
                  id='contact_phone'
                  name='contact_phone'
                  className='w-full px-3 py-2 border rounded'
                  placeholder='Optional phone for applicants'
                  onChange={e => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className='w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
