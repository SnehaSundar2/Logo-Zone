import React from 'react';
import { FaPalette, FaQuestionCircle, FaTools } from 'react-icons/fa';

const FooterSection = ({ icon, title, description, titleColor, iconColor, underlineTitle }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`text-3xl mb-2 ${iconColor}`}>{icon}</div>
    <h3 className={`text-lg font-semibold mb-1 ${titleColor} ${underlineTitle ? 'underline' : ''}`}>{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <FooterSection
            icon={<FaPalette />}
            title="Create your logo"
            description="Try Brandmark for free, no account needed"
            titleColor="text-amber-500"
            iconColor="text-yellow-400"
          />
          <FooterSection
            icon={<FaQuestionCircle />}
            title="Support"
            description="Have questions or need help? Start here."
            titleColor="text-fuchsia-600"
            iconColor="text-fuchsia-600"
          />
          <FooterSection
            icon={<FaTools />}
            title="Tools"
            description="Check out our free tools for color, font, and logo design"
            titleColor="text-green-400"
            iconColor="text-green-400"
          />
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-white">Terms of service</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-yellow-300" aria-label="Yellow color block"></div>
            <div className="w-8 h-8 bg-pink-500" aria-label="Pink color block"></div>
            <div className="w-8 h-8 bg-green-400" aria-label="Green color block"></div>
            <div className="w-8 h-8 bg-blue-300" aria-label="Blue color block"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;