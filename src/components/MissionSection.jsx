import React from 'react';
import CircularElement from './CircularElement';


const missionData = [
  { value: '60', label: 'Foreign student countries' },
  { value: '131', label: 'faculty members' },
  {value: '3', label: 'Times Best School of the Year'}
];

const MissionSection = () => {
  return (
    <div className="bg-custom text-white p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h2 className="text-red-600">LIVING OUR MOTTO</h2>
          <h3 className="text-3xl font-bold">Our Mission</h3>
          <p className="mt-4">
            In 1954, Mr. Taft founded our school with a broad but singular mission: to educate the whole student. At its core, our mission means that education at Taft is personal, moral, and ethical, as well as academic. It means that we value high scholarship and intellectual endeavor along with a belief that character, above all else, determines success in life.
          </p>
          <p className="mt-4">
            While the world and the school have changed dramatically over the past 125 years, Mr. Springdale founders fundamental values endure: work hard, without regard for public acclaim; develop all your talents—academic, artistic, and athletic; and most importantly, give of yourself to others. Our culture is inseparable from both our mission and our motto: non ut sibi ministraretur sed ut ministret—not to be served, but to serve. Our community is fundamentally shaped by this dedication to helping young people become lifelong learners, thoughtful world citizens, and caring people.
          </p>
          <button className="mt-4 px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-black hover:border-current">Learn More</button>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <CircularElement data={missionData} />
        </div>
      </div>
    </div>
    
  );
};

export default MissionSection;
