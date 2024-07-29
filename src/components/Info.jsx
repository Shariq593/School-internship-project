import React from 'react'
import CountUp from 'react-countup';
const grid = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259234/img-grid_cyx8is.jpg';
const engage = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259234/engage_zbi832.png';
const graduation = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259232/graduation_boe23t.png';
const empower = 'https://res.cloudinary.com/dnheukxzt/image/upload/v1722259231/empower_rsxjfr.png';
function Info() {
  return (
    <div>
      <section className="text-center py-16  bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">We are determined to achieve the highest standards</h2>
          <p className="text-lg mb-8">In everything that we do.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-5xl font-bold">
                <CountUp end={1954} duration={3} />
              </h3>
              <p className="text-lg">Year Founded</p>
            </div>
          <div>
            <h3 className="text-5xl font-bold">
              <CountUp end={934} duration={3} />
            </h3>
            <p className="text-lg">Certified Teachers</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">
              <CountUp end={65409} duration={3} />
            </h3>
            <p className="text-lg">Graduated Students</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">
              <CountUp end={345} duration={3} />
            </h3>
            <p className="text-lg">Awards Winner</p>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-gray-100 text-black">
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
              <div className="text-center md:text-left mb-8">
                <h2 className="text-4xl font-bold mb-4">Grandmaster Talk</h2>
                <h3 className="text-2xl font-semibold">EDUCATION IS THE MOST POWERFUL WEAPON</h3>
              </div>
              <p className="mb-8">
                Our students are talented, hard-working, and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we’re all about. Our students are busy doing things that matter. Take a look at the opportunities you’ll have at the University. The task of the modern educator is not to cut down jungles, but to irrigate deserts.
              </p>
              <div className="mb-8">
                <p className="italic mb-4">Signature</p>
                <p className="font-bold">Katherine Gonzalez</p>
                <p className="text-gray-600">Springdale Grandmaster</p>
              </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
              <div className="flex flex-wrap justify-center">
                <img src={grid} alt="Image 1" className="w-1/2 h-auto mx-2 mb-4" />
              </div>
            </div>
          </div>
          <div className="text-center my-12 ">
            <h3 className="text-2xl font-semibold mb-4">WE HAVE FAITH IN OUR STUDENT FUTURE</h3>
            <p className="max-w-2xl mx-auto mb-8">
                Our students are talented, hard-working, and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we’re all about.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="text-center mx-4 mb-8 w-1/2 md:w-1/4">
                <img src={empower} alt="Empower" className="mx-auto mb-4" />
                <h4 className="font-semibold">Empower</h4>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
            <div className="text-center mx-4 mb-8 w-1/2 md:w-1/4">
                <img src={engage} alt="Engage" className="mx-auto mb-4" />
                <h4 className="font-semibold">Engage</h4>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
            <div className="text-center mx-4 mb-8 w-1/2 md:w-1/4">
                <img src={graduation} alt="Graduation" className="mx-auto mb-4" />
                <h4 className="font-semibold">Graduation</h4>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
