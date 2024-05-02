import React from 'react';
import { NavLink } from 'react-router-dom';
import "./heder.css"
 

function Header() {
  return (
    <div  >
     <div className='homeContainer'>
    <div>
    <img src="logo2.png"    className='homeLogo'  alt='img'/>
    </div>
    
   
    
     <div className='homeLinkContainer'>
      <NavLink className="navLinks" to="/home">HOME</NavLink>
      <NavLink className="navLinks" to="/about">ABOUT</NavLink>
      <NavLink className="navLinks" to="/service">SERVICE</NavLink>
      <NavLink className="navLinks" to="/solution">OUR SOLUTION</NavLink>
      <NavLink className="navLinks" to="/career">CAREER</NavLink>
      <NavLink className="navLinks" to="/contact">CONTACT US</NavLink>
     </div>
     </div>
    </div>
  );
}

export default Header;
