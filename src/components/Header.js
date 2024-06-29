import React from 'react';
import { UilBars } from '@iconscout/react-unicons';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-gray-800 shadow-md flex items-center justify-between px-4">
      <button onClick={toggleSidebar} className="p-2 focus:outline-none">
        <UilBars className="text-2xl text-white" />
      </button>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        <span className="ml-2 text-lg font-semibold">CodingLab</span>
      </div>
    </header>
  );
};

export default Header;
