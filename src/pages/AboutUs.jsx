import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold mb-16 text-center text-gray-800">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex justify-center md:justify-end">
              <img src="src/assets/About/history.jpg" alt="Springdale Public School Building" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold underline mb-4 text-gray-800">Our History</h3>
              <p className="text-gray-700">
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. The Board of Trustees develops periodic strategic plans to ensure that the School remains true to its founding mission, reaffirm the School's strengths, and map a plan for the future. Thanks to this careful financial stewardship and parent and alumni family support, the School purchased the Dent Building from DC in 1997, and modernized the century-old building over the next three summers. The 2011-2012 renovation gave the School a new science lab, improved Early Childhood classrooms, an upgraded music room and welcoming lobby reception, seamless wireless access and smart board technology, and an elevator.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-4xl font-bold underline mb-4 text-gray-800">Vision</h3>
              <p className="text-gray-700">
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values. A School Vision and Mission statements are a school’s aspirations and guiding principles. The mission statement speaks of the school’s operations in the present. It gives an outline of the school’s fundamental purpose, detailing the specific actions, educational practices, and values it upholds to achieve its vision. The Vision statement describes the school’s long-term goals and the impact it aims to have on its students and community, often reflecting ideals of academic excellence, personal growth, and societal contribution. The vision statement speaks of the school’s hopes and intentions for the future. Together, they provide a clear direction, inspire stakeholders, and create a balanced educational environment focused on promoting all round, responsible, and capable individuals.
              </p>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img src="src/assets/About/Vision.jpg" alt="Vision" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex justify-center md:justify-end">
              <img src="src/assets/About/Motto_New.jpg" alt="Mission" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold underline mb-4 text-gray-800">Mission</h3>
              <p className="text-gray-700 mb-8">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. More than 75 years have passed since Mr. Taft founded our school. While the world and the school have changed dramatically, his fundamental values endure: work hard, without regard for public acclaim; develop all of your talents, academic, artistic, and athletic; and most important, give of yourself to others.
              </p>
              <h3 className="text-4xl font-bold underline mb-4 text-gray-800">Motto</h3>
              <p className="text-gray-700">
                Our Principal, himself, crafted the schools motto—words that continue to shape school life more than 75 years later. He wrote, "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future." That principle, coupled with his belief that character, above all else, determines success in life, forms the foundation of our enduring school motto.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-4xl font-bold underline mb-4 text-gray-800">Infrastructure and Facilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img src="src/assets/About/infrastructure.jpeg" alt="Facilities" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
