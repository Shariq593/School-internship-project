import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
const grad = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259239/grad_abicvh.jpg';

const Events = () => {
  const [events, setEvents] = useState([
    { date: '07 • 28', description: 'Library Open 5:15pm-9:30pm', time: 'All day' },
    { date: '07 • 29', description: 'Library Open 7:45am-9:30pm', time: 'All day' },
    { date: '07 • 30', description: 'Library Open 7:45am-9:30pm', time: 'All day' },
  ]);

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-200">
      <div className="relative w-full md:w-2/3 h-64 md:h-auto">
        <LazyLoad height={400} offset={100}>
          <img src={grad} alt="Virtual Tour" className="w-full h-full object-cover" />
        </LazyLoad>
        <div className="absolute inset-0 flex flex-col justify-center md:justify-between p-4 bg-black bg-opacity-50 text-white">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl mt-12 font-bold">THE SPRINGDALE SCHOOL</h1>
            <h2 className="text-lg md:text-xl font-light">A Path to Success</h2>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 md:p-8 text-gray-700">
        <h2 className="text-lg font-bold text-red-600 mb-4">UPCOMING EVENTS</h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index}>
              <h3 className="text-xl md:text-3xl">{event.date}</h3>
              <p>{event.description}</p>
              <p className="text-xl">{event.time}</p>
              <a href="#" className="text-blue-700 text-sm">More Info</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
