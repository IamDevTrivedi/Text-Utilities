import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ to, children, darkMode }) => (
  <Link
    to={to}
    className={`text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} px-3 py-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} transition-colors`}
  >
    {children}
  </Link>
);

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-md sticky top-0 z-50`}>
      <div className="px-4 max-w-8xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className='flex flex-col items-center justify-center gap-3 md:flex-row'>
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Text-Utilities</span>
              <span className={`hidden md:block text-sm font-extralight ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Manipulate Text Easily</span>
            </div>
          </Link>
          <nav className="items-center hidden md:flex">
            <NavbarItem to="/" darkMode={darkMode}>Home</NavbarItem>
            <NavbarItem to="/services" darkMode={darkMode}>Services</NavbarItem>
            <NavbarItem to="/about" darkMode={darkMode}>About Us</NavbarItem>
            <NavbarItem to="/contact" darkMode={darkMode}>Contact</NavbarItem>

            <label className="mx-3 ui-switch">
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex items-center justify-around px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavbarItem to="/" darkMode={darkMode}>Home</NavbarItem>
          <NavbarItem to="/services" darkMode={darkMode}>Services</NavbarItem>
          <NavbarItem to="/about" darkMode={darkMode}>About Us</NavbarItem>
          <NavbarItem to="/contact" darkMode={darkMode}>Contact</NavbarItem>

          <label className="ui-switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
