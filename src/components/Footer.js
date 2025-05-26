import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Footer({ darkMode, toggleDarkMode }) {
  return (
    <footer className={`transition-all-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} ${darkMode ? 'text-white' : 'text-gray-800'} py-8 border-t border-black`}>
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3 md:px-12">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Text Tools</h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'} mt-4 text-sm`}>
            A powerful suite of tools to manipulate and format text. Fast, secure, and easy to use.
          </p>
          <p className={`mt-4 text-sm opacity-80 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            &copy; {new Date().getFullYear()} Text Tools. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${darkMode ? 'text-white' : 'text-gray-800'} text-xl font-semibold mb-4`}>Follow Us</h3>

          <SocialLinks />

          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mt-6 mb-4`}>Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:support@texttools.com" className="">support@texttools.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+123456789" className="">+1 234 567 89</a>
          </p>
        </div>
      </div>

      <div className="pt-4 mt-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-500">
          Made with <span className="text-red-500">&hearts;</span> by Text Tools Team.
        </p>
      </div>
    </footer>
  );
}
