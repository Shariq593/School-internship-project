import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-lg font-bold">SPRINGDALE PUBLIC SCHOOL</span>
          <p className="text-sm mt-2">© 2024 All rights reserved.</p>
          <p className="text-sm mt-2">1234 School Address, City, State, 56789</p>
        </div>
        <nav className="flex flex-wrap justify-center space-x-3 md:space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/academics" className="hover:underline">Academics</Link>
          <Link to="/admission" className="hover:underline">Admissions</Link>
          <Link to="/faculty" className="hover:underline">Faculty</Link>
          <Link to="/students" className="hover:underline">Students</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/contactus" className="hover:underline">Contact Us</Link>
        </nav>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-3 mb-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          </div>
          <iframe
            className="mt-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0208402047165!2d144.96305791531794!3d-37.81410797975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed18!2sVictoria%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1649362889072!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
