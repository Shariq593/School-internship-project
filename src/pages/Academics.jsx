import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Academics = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Academics</h2>
          <div className='flex'>
            <div className="mb-12 w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
              <p className="mb-4">We offer a comprehensive curriculum that spans from primary to senior secondary levels. <br/> Our curriculum is designed to foster critical thinking, creativity, and a love for learning.</p>
              <ul className="list-disc list-inside">
                <li>Primary: Grades 1-5</li>
                <li>Secondary: Grades 6-10</li>
                <li>Senior Secondary: Grades 11-12</li>
              </ul>
            </div>
            <div className='mb-12 w-1/2'>
              <img src='src\assets\Academics\academics.jpg' alt='academics' className='rounded-lg' ></img>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Subjects Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Primary Level</h4>
                <ul className="list-disc list-inside">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Studies</li>
                  <li>Arts and Crafts</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Secondary Level</h4>
                <ul className="list-disc list-inside">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>History</li>
                  <li>Geography</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Senior Secondary Level</h4>
                <ul className="list-disc list-inside">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Economics</li>
                  <li>Business Studies</li>
                  <li>Accountancy</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Teaching Methodologies</h3>
            <p>Our teaching methodologies are centered around student engagement and active learning. We use a mix of traditional and modern teaching techniques to ensure that students grasp concepts effectively and retain knowledge longer.</p>
            <ul className="list-disc list-inside">
              <li>Interactive Classroom Sessions</li>
              <li>Project-Based Learning</li>
              <li>Use of Technology in Teaching</li>
              <li>Regular Assessments and Feedback</li>
              <li>Extracurricular Activities</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Academics;
