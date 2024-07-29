import React, { useState } from 'react';
import StudentShowcase from './StudentShowcase';

// Updated Dummy Data for Achievements
const achievements = [
  {
    name: 'John Smith',
    title: 'National Level Math Olympiad Winner',
    description: 'John has consistently shown excellence in mathematics, achieving top ranks in numerous competitions.',
    image: 'src/assets/Student/tech.jpg',
  },
  {
    name: 'Sarah Lee',
    title: 'Gold Medalist in State Swimming Championship',
    description: 'Sarah has demonstrated outstanding athletic abilities, particularly in swimming where she won a gold medal.',
    image: 'src/assets/Student/sarah.jpg',
  },
  {
    name: 'Tech Innovators Club',
    title: 'Winners of Inter-School Robotics Competition',
    description: 'The club has been at the forefront of innovation, recently winning a prestigious robotics competition.',
    image: 'https://github.com/Shariq593/School-internship-project/blob/deploy/src/assets/Student/john.jpg',
  },
];

const extracurricularActivities = [
  { name: 'Music', icon: '🎵', description: 'Join the school choir or learn to play various instruments.' },
  { name: 'Dance', icon: '💃', description: 'Explore different dance forms and perform at school events.' },
  { name: 'Drama', icon: '🎭', description: 'Participate in school plays and improve your acting skills.' },
  { name: 'Art', icon: '🎨', description: 'Express your creativity through painting, sculpting, and more.' },
  { name: 'Sports', icon: '⚽', description: 'Join sports teams like soccer, basketball, and more.' },
  { name: 'Robotics', icon: '🤖', description: 'Build and program robots for competitions and fun.' },
  { name: 'Debate Club', icon: '🗣️', description: 'Hone your debating skills and participate in inter-school debates.' },
  { name: 'Science Club', icon: '🔬', description: 'Explore the wonders of science through experiments and projects.' },
];

const clubsAndSocieties = [
  { name: 'Literary Society', icon: '📚', description: 'Discuss and analyze literature, and write creatively.' },
  { name: 'Environmental Club', icon: '🌿', description: 'Work on projects to promote environmental awareness.' },
  { name: 'Astronomy Club', icon: '🌌', description: 'Learn about stars, planets, and the universe.' },
  { name: 'Coding Club', icon: '💻', description: 'Learn coding languages and work on software projects.' },
];

const StudentLife = () => {
  const [activeCategory, setActiveCategory] = useState('Extracurricular');

  const renderActivities = (activities) => {
    return activities.map((activity, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 mb-4 hover:bg-gray-100 transition">
        <span className="text-3xl">{activity.icon}</span>
        <div>
          <h4 className="text-xl font-semibold">{activity.name}</h4>
          <p className="text-gray-700">{activity.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-12  text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center mb-8 text-black">Celebrating Student Achievements</h2>
        <p className="text-lg text-center mb-12">Discover the inspiring journeys and remarkable accomplishments of our top students.</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
              <img src={achievement.image} alt={achievement.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-custom">{achievement.name}</h3>
              <h4 className="text-lg font-medium text-red-700">{achievement.title}</h4>
              <p className="text-gray-700 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      <StudentShowcase/>
      <div className="container  mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center my-12 text-custom">Life at Springdale</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveCategory('Extracurricular')}
            className={`px-4 py-2 rounded-lg ${activeCategory === 'Extracurricular' ? 'bg-purple-700 text-white' : 'bg-white text-purple-700'} hover:bg-purple-800 hover:text-white transition`}
          > Extracurricular Activities
          </button>
          <button
            onClick={() => setActiveCategory('Clubs')}
            className={`px-4 py-2 rounded-lg ${activeCategory === 'Clubs' ? 'bg-purple-700 text-white' : 'bg-white text-purple-700'} hover:bg-purple-800 hover:text-white transition`}
          >Clubs and Societies
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activeCategory === 'Extracurricular' ? renderActivities(extracurricularActivities) : renderActivities(clubsAndSocieties)}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
