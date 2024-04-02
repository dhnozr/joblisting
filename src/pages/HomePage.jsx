import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HomeCards } from '../components/HomeCards';
import { JobListings } from '../components/JobListings';
import { ViewAll } from '../components/ViewAll';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAll />
    </>
  );
};
