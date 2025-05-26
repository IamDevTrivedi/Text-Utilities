import React from 'react';

const ServicesPage = ({ darkMode, toggleDarkMode }) => {

  document.title = 'Text Utilities | Services'; 


  return (
    <div className={`my-4 max-w-6xl mx-auto p-6 mt-10 
      ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg shadow-md`}>
      <h1 className={`text-4xl font-bold text-center mb-10 
        ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>
        Our Services
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Text Transformation
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Convert your text into various formats such as UPPERCASE, lowercase, Title Case, Sentence case, and more.
          </p>
        </div>

        {/* Service 2 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Word Statistics
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Get detailed text statistics like character count, word count, unique words, average word length, reading time, and more.
          </p>
        </div>

        {/* Service 3 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Text Preview
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Instantly preview the transformed text in real-time and make quick adjustments as needed.
          </p>
        </div>

        {/* Service 4 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Text-to-Speech
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Convert your text into speech and listen to the output with a click of a button.
          </p>
        </div>

        {/* Service 5 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Text Cleaning
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Automatically remove unwanted characters, clean up the text, and format it for further use.
          </p>
        </div>

        {/* Service 6 */}
        <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 
          ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h2 className={`text-2xl font-semibold mb-4 
            ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            Copy & Clear Text
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Easily copy the transformed text to your clipboard or clear it to start fresh with a single click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
