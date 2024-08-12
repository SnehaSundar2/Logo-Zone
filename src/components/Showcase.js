import React from 'react';
import one from '../images/w-one.jpg';
import two from '../images/w-two.jpg';
import three from '../images/w-three.jpg';

const Showcase = () => {
  return (
    <section className="bg-secondary pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold">Latest customer</h2>
            <h2 className="text-3xl font-bold">creations</h2>
            <p className='text-slate-500'>See why over 108,704 users have</p>
            <p className='mb-6 text-slate-500'>created a logo with Brandmark.io</p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row gap-4 md:pl-12">
            <div className="md:w-1/2 flex flex-col gap-4">
              <img src={one} alt="Customer creation 1" className="rounded-lg w-full" />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <img src={two} alt="Customer creation 2" className="rounded-lg w-full" />
              <img src={three} alt="Customer creation 3" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
