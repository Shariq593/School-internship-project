import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Student from './pages/Student';
import Faculty from './pages/Faculty';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/students" element={<Student />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  )
}

