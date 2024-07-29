import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-custom w-full text-white p-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-between w-full md:w-auto items-center mb-2 md:mb-0">
        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="focus:outline-none md:hidden mr-3">
          {isOpen ? (
            <span className="text-2xl">✖️</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="Springdale Public School Logo" className="h-12 w-auto mr-3" />
          </Link>
          <span className="text-xl font-bold">SPRINGDALE PUBLIC SCHOOL</span>
        </div>
      </div>
      
      <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col text-xl md:flex-row md:space-x-6">
          {['/', '/about', '/academics', '/admission', '/gallery', '/students', '/faculty', '/contactus'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="relative p-2 md:p-0 flex items-center group"
            >
              <span className="relative z-10">{
                {
                  '/': 'Home',
                  '/about': 'About',
                  '/academics': 'Academics',
                  '/admission': 'Admission',
                  '/gallery': 'Gallery',
                  '/students': 'Students',
                  '/faculty': 'Faculty',
                  '/contactus': 'Contact Us',
                }[path]
              }</span>
              <span className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute inset-0"></span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="hidden md:flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Search" 
          className="p-2 text-black rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
        />
        <button className="bg-purple-700 text-white p-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-all flex items-center">
          <span className="text-lg">🔍</span>
        </button>
      </div> 
    </header>
  );
};

export default Header;
