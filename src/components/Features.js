import React from 'react';
import { FaPalette, FaMagic, FaFileExport, FaIdCard, FaArrowRight } from 'react-icons/fa';
import laptop_img from "C:\\Users\\admin\\logo-zone\\src\\images\\laptop-image.jpg"

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="text-xl text-blue-500">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 mr-10">
          <img src={laptop_img} alt="Laptop-image" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left">Build a beautiful brand</h2>
          <h2 className="text-3xl font-bold text-center md:text-left mb-2">on time and on budget</h2>
          <h2 className="text-xl text-center md:text-left">Kickstart your business with thousands of </h2>
          <h2 className="text-xl text-center md:text-left mb-10"><b>ready-to-use</b> design assets.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <FeatureItem
              icon={<FaPalette />}
              title="Professional designs"
              description="High-quality templates, customizable options, and instant preview"
            />
            <FeatureItem
              icon={<FaMagic />}
              title="Easy to use"
              description="Intuitive interface, no design skills required, and quick results"
            />
            <FeatureItem
              icon={<FaFileExport />}
              title="Export options"
              description="Download your logo in various formats suitable for print and digital use"
            />
            <FeatureItem
              icon={<FaIdCard />}
              title="Business card designs"
              description="Design your business cards in various format suitable for your business"
            />
            <div className="text-center md:text-left mt-8">
              <button className="bg-blue-300 text-black px-8 py-2 rounded-full
               hover:bg-blue-200 transition duration-300 font-bold flex items-center justify-center space-x-2">
                <FaArrowRight className="text-xl" />
                <span>See example assets</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;