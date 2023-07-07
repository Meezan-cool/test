import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer>
        <div class="row">
            <div class="col">
            <h3>CodeWave <div class="underline"><span></span></div></h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eius quia
                    odio dolorem ipsam corporis quasi, error quo blanditiis, quis illo
                    necessitatibus repellat?
                </p>
            </div>
            <div class="col">
                <h3>Home <div class="underline"><span></span></div>
                </h3>
                <p>60 Feet Road</p>
                <p>Kareli,Allahabad</p>
                <p>Uttar Pradesh,PIN 211016,India</p>
                <p class="email-id">nmeezan4@outlook.com</p>
                <h4>+91-9559099854</h4>
            </div>
            <div class="col">
                <h3>Navigation <div class="underline"><span></span></div></h3>
                <ul>
                <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">SERVICES</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
                    <li><NavLink to="/feedback" activeClassName="active">FEEDBACK</NavLink></li>
                </ul>
            </div>
            <div class="col">
                <h3>Newsletter <div class="underline"><span></span></div></h3>
                <form >
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Enter your email id" required/>
                <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <div class="social-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
        <hr/>
        <p class="copyright">CodeWave  &#169; 2023 - All Right Reserved</p>
    </footer>
  )
}

export default Footer