import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TimeToastNotification = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm w-full bg-opacity-90 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-semibold">
          Current Time
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={20} />
        </button>
      </div>
      <p className="mt-2 text-2xl font-bold text-blue-600">
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default TimeToastNotification;