import React from 'react';
import mobile from "C:\\Users\\admin\\logo-zone\\src\\images\\mobile.png"

const Customization = () => {
  return (
    <section className="bg-secondary pt-20">
      <div className="container mx-auto">
        <div className="flex md:flex-row justify-between">
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold">The only logo maker</h2>
            <h2 className="text-3xl font-bold">with free</h2>
            <h2 className="text-3xl font-bold mb-8">customization</h2>
            <p className='text-slate-500'>We’ll personally help you customize your</p>
            <p className='mb-6 text-slate-500'>logo with the purchase of any package.</p>
          </div>
          <div >
            <img src={mobile} alt="Mobile-image" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;