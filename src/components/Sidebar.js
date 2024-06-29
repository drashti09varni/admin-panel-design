import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UilEstate, UilFilesLandscapes, UilEdit } from '@iconscout/react-unicons';
import companyLogo from '../img/logo.png';

const Sidebar = ({ isOpen, toggleSidebar, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav
      className={`h-screen bg-gray-800 shadow-md border-r ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 flex flex-col`}
    >
      <div className="flex items-center justify-center p-4">
        <img src={companyLogo} alt="Company Logo" className="h-auto max-w-full" />
      </div>
      <ul className="space-y-2 p-2 flex-grow">
        <li>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <UilEstate className="text-white" />
            {isOpen && <span className="ml-2 text-white">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/table" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <UilFilesLandscapes className="text-white" />
            {isOpen && <span className="ml-2 text-white">Table</span>}
          </Link>
        </li>
        <li>
          <Link to="/form" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <UilEdit className="text-white" />
            {isOpen && <span className="ml-2 text-white">Form</span>}
          </Link>
        </li>
      </ul>
      <button onClick={handleLogout} className="flex items-center p-2 hover:bg-gray-700 rounded">
        <UilEdit className="text-white" />
        {isOpen && <span className="ml-2">Logout</span>}
      </button>
    </nav>
  );
};

export default Sidebar;
