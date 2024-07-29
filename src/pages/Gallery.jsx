import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';



const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { src: 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722261003/sports_e3787f.jpg', alt: 'Students participating in various sports events.' },
    { src: 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722260972/science_ur3a8p.jpg', alt: 'Students presenting their science projects.' },
    { src: 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722260971/cultural_qotdv1.jpg', alt: 'Students performing in the cultural fest.' },
    { src: 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722261000/classroom_hlk8lf.jpg', alt: 'A glimpse of our interactive classrooms.' },
    { src: 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722261011/library_ud6dvz.jpg.', alt:'Library'},
  ];

  const videos = [
    { src: "#", title: 'Virtual tour of Springdale Public School' },
    { src: "#", title: 'Highlights from the Annual Function 2023' },
  ];

  const filteredContent = filter === 'all' ? [...photos, ...videos] : filter === 'photos' ? photos : videos;

  return (
    <>
      <Header />
      <div className={`py-12 bg-gray-100 ${filter !== 'videos' ? 'min-h-screen' : 'h-auto'} flex flex-col justify-between`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="mb-6 flex justify-center space-x-4">
            <button className={`px-4 py-2 font-semibold ${filter === 'all' ? 'text-blue-600 underline' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`px-4 py-2 font-semibold ${filter === 'photos' ? 'text-blue-600 underline' : ''}`} onClick={() => setFilter('photos')}>Photos</button>
            <button className={`px-4 py-2 font-semibold ${filter === 'videos' ? 'text-blue-600 underline' : ''}`} onClick={() => setFilter('videos')}>Videos</button>
          </div>

          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredContent.map((item, index) => (
              <li key={index}>
                <figure className="relative overflow-hidden">
                  {item.src.endsWith('.jpeg') || item.src.endsWith('.jpg') ? (
                    <img src={item.src} alt={item.alt} loading='lazy' className="w-full h-full object-cover transition-transform duration-500" />
                  ) : (
                    <video src={item.src} controls className="w-full h-full object-cover" />
                  )}
                  <figcaption className="absolute inset-0 bg-custom bg-opacity-50 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <p>{item.alt || item.title}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
        {filter == 'videos' &&<div className='mt-[50ch]'> <Footer /> </div>}
        {filter != 'videos' &&<div> <Footer /> </div>}
      
    </>
  );
};

export default Gallery;
