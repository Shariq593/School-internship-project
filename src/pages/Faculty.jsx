import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const facultyProfiles = [
  {
    name: 'John Doe',
    position: 'Principal',
    education: 'M.Ed',
    experience: 20,
    description: 'John Doe has 20 years of experience in educational administration and is passionate about fostering a positive learning environment.',
    image: 'https://placehold.co/100',
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    education: 'M.Sc. in Physics',
    experience: 15,
    description: 'Jane Smith has a deep understanding of physics and has been teaching for 15 years, focusing on innovative teaching methods.',
    image: 'https://placehold.co/100',
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    education: 'M.A. in English',
    experience: 10,
    description: 'Emily Johnson specializes in English literature and language, with 10 years of teaching experience.',
    image: 'https://placehold.co/100',
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    education: 'M.Sc. in Mathematics',
    experience: 8,
    description: 'Michael Brown is passionate about mathematics and has been teaching for 8 years, helping students excel in the subject.',
    image: 'https://placehold.co/100',
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    education: 'M.Sc. in Chemistry',
    experience: 12,
    description: 'Sophia Davis brings 12 years of experience in teaching chemistry and is dedicated to making science accessible to all students.',
    image: 'https://placehold.co/100',
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    education: 'B.Tech in Computer Science',
    experience: 5,
    description: 'David Wilson, with 5 years of teaching experience, specializes in computer science and coding.',
    image: 'https://placehold.co/100',
  },
];

const Faculty = () => {
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedProfile, setSelectedProfile] = useState(null);

  const filteredProfiles = facultyProfiles.filter(profile => {
    return (
      (selectedPosition === 'All' || profile.position === selectedPosition) &&
      (selectedExperience === 'All' || profile.experience >= parseInt(selectedExperience))
    );
  });

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseDetails = () => {
    setSelectedProfile(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-800 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-6xl font-bold text-center mb-8 text-black md:text-4xl">Meet Our Faculty</h2>

          <div className="flex flex-wrap justify-center space-x-2 mb-8">
            <div className="w-1/2 sm:w-auto px-1 mb-2 sm:mb-0">
              <select
                className="w-full px-2 py-1 text-sm rounded-lg border"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                <option value="All">All Positions</option>
                <option value="Principal">Principal</option>
                <option value="Vice Principal">Vice Principal</option>
                <option value="English Teacher">English Teacher</option>
                <option value="Mathematics Teacher">Mathematics Teacher</option>
                <option value="Science Teacher">Science Teacher</option>
                <option value="Computer Science Teacher">Computer Science Teacher</option>
              </select>
            </div>
            <div className="w-1/2 sm:w-auto px-1">
              <select
                className="w-full px-2 py-1 text-sm rounded-lg border"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option value="All">All Experience Levels</option>
                <option value="5">5+ years</option>
                <option value="10">10+ years</option>
                <option value="15">15+ years</option>
                <option value="20">20+ years</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer"
                onClick={() => handleProfileClick(profile)}
              >
                <img src={profile.image} alt={profile.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-blue-700">{profile.name}</h3>
                <h4 className="text-lg font-medium text-blue-600">{profile.position}</h4>
                <p className="text-gray-700">{profile.education}</p>
                <p className="text-gray-600">Experience: {profile.experience} years</p>
              </div>
            ))}
          </div>

          {selectedProfile && (
            <div className="fixed inset-0 bg-custom bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative">
                <button
                  className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
                  onClick={handleCloseDetails}
                >
                  &times;
                </button>
                <img src={selectedProfile.image} alt={selectedProfile.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-semibold text-blue-700">{selectedProfile.name}</h3>
                <h4 className="text-lg font-medium text-blue-600">{selectedProfile.position}</h4>
                <p className="text-gray-700 mt-2">{selectedProfile.education}</p>
                <p className="text-gray-700 mt-2">Experience: {selectedProfile.experience} years</p>
                <p className="text-gray-700 mt-2">{selectedProfile.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
