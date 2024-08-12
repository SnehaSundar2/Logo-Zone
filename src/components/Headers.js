import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-300 py-20 relative">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-white">LOGO  
          <span className="text-black"> ZONE</span> 
          </div>
        <ul className="flex space-x-10">
          <li><a href="#" className="hover:underline:None hover:bg-white hover:rounded-lg font-bold">Tools</a></li>
          <li><a href="#" className="hover:underline:None hover:bg-white hover:rounded-lg font-bold">Pricing</a></li>
          <li><a href="#" className="hover:underline:None hover:bg-white hover:rounded-lg font-bold">Support</a></li>
          <li><a href="#" className="bg-white rounded-lg font-bold">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;