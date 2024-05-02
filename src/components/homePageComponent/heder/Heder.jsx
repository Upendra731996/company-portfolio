import React from 'react';
import { NavLink } from 'react-router-dom';
import "./heder.css"
 

function Header() {
  return (
    <div  >
     <div className='homeContainer'>
    <div>
    <img src="logo2.png"    className='homeLogo'/>
    </div>
    
   
    
     <div className='homeLinkContainer'>
      <NavLink className="navLinks" to="/home">HOME</NavLink>
      <NavLink className="navLinks" to="/about">ABOUT</NavLink>
      <NavLink className="navLinks" to="/home">SERVICE</NavLink>
      <NavLink className="navLinks" to="/home">OUR SOLUTION</NavLink>
      <NavLink className="navLinks" to="/home">CAREER</NavLink>
      <NavLink className="navLinks" to="/contact">CONTACT US</NavLink>
     </div>
     </div>
    </div>
  );
}

export default Header;
