import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footerContainer'>
    <div>
        <img src='logo2.png' alt='img'/>
        <div>Copyrights © 2024 All Rights Reserved by Royal Trade Zone.</div>
    </div>
    <div >
        <div className='links'>
        <NavLink className="navLink" to="/home">Home</NavLink>
        <div className='slash'>/</div>
        <NavLink className="navLink" to="/about">About</NavLink>
        <div>/</div>
        <NavLink className="navLink" to="/service">Service</NavLink>
        <div>/</div>
        <NavLink className="navLink" to="/solution">Solution</NavLink>
        <div>/</div>
        <NavLink className="navLink" to="/career">Career</NavLink>
        <div>/</div>
        <NavLink className="navLink" to="/contact">Contact</NavLink>
        </div>
        <div className='icons'>
            <NavLink  className="MainIcons" to="/home"><FacebookIcon/></NavLink>
            <NavLink className="MainIcons" to="/Home"><TwitterIcon/></NavLink>
           <NavLink className="MainIcons" to="/Home"> <GoogleIcon/></NavLink>
            <NavLink className="MainIcons" to="/home"><GitHubIcon/></NavLink>
            <NavLink className="MainIcons" to="home"><LinkedInIcon/></NavLink>
        </div>

    </div>

    </div>
  )
}

export default Footer
