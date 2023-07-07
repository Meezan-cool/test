import './App.css';
import React from 'react';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Feedback from './Pages/Feedback/Feedback';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Services from './Pages/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <>
        <Route exact path='/' element={<Home/>}>Home</Route>
        <Route  path='/about' element={<About/>}>About</Route>
        <Route  path='/contact' element={<Contact/>}>Contact</Route>
        <Route  path='/services' element={<Services/>}>Services</Route>
        <Route  path='/feedback' element={<Feedback/>}>Feedback</Route>
        </>
      </Routes>
      <Footer/>
    </Router>
    </div >
  );
}

export default App;
