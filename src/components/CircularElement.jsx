import React, { useState } from 'react';

const CircularElement = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="relative flex items-center justify-center w-80 h-80 border-2 border-white rounded-full text-white">
      <div className="absolute flex flex-col items-center">
        <span className="text-red-600 text-xl">SpringDale AT A GLANCE</span>
        <span className="text-5xl font-bold">{data[currentIndex].value}</span>
        <span className="text-xl">{data[currentIndex].label}</span>
      </div>
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-white text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors duration-300 hover:bg-white hover:text-black"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default CircularElement;
