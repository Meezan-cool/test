import React, { useState } from 'react';
// import './Navbar.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='navbar'>
            <h1><a href="">CodeWave</a></h1>
            <div className='link'>
                <ul className={`logo ${isOpen ? 'open' : ''}`}>
                    <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">SERVICES</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
                    <li><NavLink to="/feedback" activeClassName="active">FEEDBACK</NavLink></li>
                </ul>
            </div>

            <button className="toggle_btn" onClick={toggleMenu}>
                <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </button>

            <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">SERVICES</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
                <li><NavLink to="/feedback" activeClassName="active">FEEDBACK</NavLink></li>
            </div>
        </div>
    );
}

export default Navbar;