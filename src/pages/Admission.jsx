// src/Admission.js
const backgroundImage = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259365/bg-admission_dtqbsf.jpg';
const calendar = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259238/calendar_zqsnou.jpg';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admission = () => {
    const [openSections, setOpenSections] = useState({
        process: false,
        importantDates: false,
        tuitionFees: false,
        scholarships: false,
        contactInfo: false,
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
      <>
      <Header/>
      <section className="bg-gray-900 text-white py-16 relative" style={{ height: '80vh' }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div className="relative container mx-auto px-4 flex flex-col justify-center h-full">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Welcome to Springdale School Admissions</h1>
                <p className="text-xl mb-6">
                    Join our vibrant community of learners. Discover how Springdale School can nurture your child's potential and guide them toward a successful future. Apply now for the upcoming academic year!
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white text-black py-2 border-2 px-4 rounded  hover:border-white hover:bg-transparent hover:text-white">Learn More</button>
                    <button className="bg-white text-black py-2 border-2 px-4 rounded  hover:border-white hover:bg-transparent hover:text-white">Download Form</button>
                </div>
            </div>
          </div>
      </section>


      <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Admission Criteria</h2>
                  <p className="text-xl mb-6">
                      At Springdale School, we seek students who demonstrate a passion for learning, a commitment to personal growth, and a respect for our community values. Learn more about our criteria for admission.
                  </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">Age Requirements</h3>
                      <p className="text-gray-600 mb-4">
                          Applicants should meet specific age requirements for each grade level. Please refer to our detailed age chart for more information.
                      </p>
                      <button className="bg-gray-900 text-white py-2 px-4 rounded border-2 ">More Info</button>
                  </div>
                  <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">Academic Records</h3>
                      <p className="text-gray-600 mb-4">
                          We consider past academic performance to ensure students can thrive in our rigorous academic environment. Transcripts and report cards are required.
                      </p>
                      <button className="bg-gray-900 text-white py-2 px-4 rounded">More Info</button>
                  </div>
                  <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">Extracurricular Activities</h3>
                      <p className="text-gray-600 mb-4">
                          Participation in extracurricular activities is a plus. Demonstrate your child's involvement in sports, arts, clubs, or community service.
                      </p>
                      <button className="bg-gray-900 text-white py-2 px-4 rounded">More Info</button>
                  </div>
              </div>
          </div>
      </section>
      <div className="flex flex-col items-center py-12 px-4 md:px-8 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={calendar}
                alt="admission calendar"
                className="w-full h-auto rounded-b-2xl md:rounded-r-none md:rounded-l-2xl"
              />
            </div>
            <div className="md:w-1/2 bg-white rounded-2xl md:rounded-l-none m-4 md:m-6 p-6">
              <div className="space-y-6">
                <div>
                  <button
                    className="w-full flex justify-between items-center py-3 px-5 focus:outline-none border-b-2 border-gray-300 transition duration-150 ease-in-out"
                    onClick={() => toggleSection('process')}>
                    <span className="text-xl font-semibold">Process</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openSections.process ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M15.293 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openSections.process && (
                    <div className="p-4">
                      <p className="text-gray-700">
                        Admission forms are available for download. Submit the completed form along with required documents at the school office. <a href='#' className='text-purple-700 underline'>Download</a>
                      </p>
                    </div>
                  )}
                </div>


                <div>
                  <button
                    className="w-full flex justify-between items-center py-3 px-5 focus:outline-none border-b-2 border-gray-300 transition duration-150 ease-in-out"
                    onClick={() => toggleSection('importantDates')}
                  >
                    <span className="text-xl font-semibold">Important Dates</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openSections.importantDates ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M15.293 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openSections.importantDates && (
                    <div className="p-4">
                      <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Admission Form Availability:</strong> March 1st</li>
                        <li><strong>Last Date for Submission:</strong> March 31st</li>
                        <li><strong>Entrance Test:</strong> April 15th</li>
                        <li><strong>Announcement of Results:</strong> April 30th</li>
                      </ul>
                    </div>
                  )}
                </div>

              {/* Tuition Fees Section */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-3 px-5 focus:outline-none border-b-2 border-gray-300 transition duration-150 ease-in-out"
                  onClick={() => toggleSection('tuitionFees')}
                >
                  <span className="text-xl font-semibold">Tuition Fees</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openSections.tuitionFees ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M15.293 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293z" clipRule="evenodd" />
                  </svg>
                </button>
                {openSections.tuitionFees && (
                  <div className="p-4">
                    <p className="text-gray-700">
                      Our tuition fees are designed to provide quality education and resources. Please contact the admissions office for detailed information on fees and payment options.
                    </p>
                  </div>
                )}
              </div>

              {/* Scholarships Section */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-3 px-5 focus:outline-none border-b-2 border-gray-300 transition duration-150 ease-in-out"
                  onClick={() => toggleSection('scholarships')}
                >
                  <span className="text-xl font-semibold">Scholarships</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openSections.scholarships ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M15.293 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293z" clipRule="evenodd" />
                  </svg>
                </button>
                {openSections.scholarships && (
                  <div className="p-4">
                    <p className="text-gray-700">
                      Springdale offers a range of scholarships to support talented students. Eligibility criteria and application processes vary, so please consult our scholarship guide or contact the admissions office for more details.
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Information Section */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-3 px-5 focus:outline-none border-b-2 border-gray-300 transition duration-150 ease-in-out"
                  onClick={() => toggleSection('contactInfo')}
                >
                  <span className="text-xl font-semibold">Contact Information</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openSections.contactInfo ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M15.293 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293z" clipRule="evenodd" />
                  </svg>
                </button>
                {openSections.contactInfo && (
                  <div className="p-4">
                    <p className="text-gray-700">
                      For more information, please contact our admissions office at:
                      <br />Phone: (123) 456-7890
                      <br />Email: admissions@springdale.edu
                      <br />Address: 123 Springdale Road, City, State, ZIP
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
   </>
    );
};

export default Admission;
