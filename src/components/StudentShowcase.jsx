import React, { useState } from 'react';

const StudentShowcase = () => {
  const studentData = [
    {
      name: 'Amy Parker (Grade XII) - President',
      description: 'Amy is a highly decorated athlete and community leader, with a strong commitment to the school motto: "Not to be served, but to serve."',
      image: 'src/assets/Student/Amy.jpg', 
    },
    {
      name: 'Rajiv Mehta (Grade XI) - Vice President',
      description: 'Rajiv is an outstanding student with a passion for science and technology. She has won several awards in science fairs and is the president of the robotics club.',
      image: 'src/assets/Student/rajiv.jpg', 
    },
    {
      name: 'Lisa Wong (Grade X) - Secretary',
      description: 'Lisa excels in both academics and sports. She is the captain of the soccer team and a secretary of the student council.',
      image: 'src/assets/Student/Lisa.jpg', 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? studentData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === studentData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentStudent = studentData[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center bg-custom text-white p-8">
        <h1 className='text-6xl font-bold py-12'>The Student Council</h1>

      <div className="flex w-full max-w-6xl mb-8">
        <div className="w-1/3 flex-shrink-0">
            
          <img src={currentStudent.image} alt={currentStudent.name} className="w-full h-auto" />
        </div>
        <div className="w-2/3 flex-grow flex flex-col justify-center px-8">
          <h2 className="text-red-500 uppercase">Meet a Student</h2>
          <h1 className="text-4xl font-bold mt-2">{currentStudent.name}</h1>
          <p className="mt-4">{currentStudent.description}</p>
          <a href="#" className="mt-4 text-red-500 hover:underline">Read More</a>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-6xl">
        <button onClick={handlePrev} className="text-2xl p-2">‹</button>
        <div className="flex space-x-4">
          {studentData.map((student, index) => (
            <img
              key={index}
              src={student.image}
              alt={student.name}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-32 h-32 object-cover ${index === currentIndex ? 'border-4 border-red-500' : 'border-2 border-transparent'}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="text-2xl p-2">›</button>
      </div>
    </div>
  );
};

export default StudentShowcase;
