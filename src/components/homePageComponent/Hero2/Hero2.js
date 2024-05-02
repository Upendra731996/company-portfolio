import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import "./hero2.css"
// import Contact from '../contact/Contact';

const Hero2 = () => {
    const navigate=useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };



    return (
        <div>
            <div className='textContent'>
                <div><img src='logo2.png' className='midLogo'  alt='img'></img></div>
                <h1 style={{ fontFamily: "-moz-initial", color: "#444444" }}>Welcome to <span style={{ color: "#1ABC9C" }}>Royal Trade Zone</span>.</h1>
                <p style={{ textAlign: "center", fontWeight: "200", fontSize: "25px" }}>ISO 9001: 2015 certified company the major project held on <br />Tiruchirappalli City corporation Class A Contractor</p>
                <div className='BTNLinks' >

                    <Button variant="contained"   onClick={()=>{scrollToTop()}} style={{ background: "#444444" }}>BROWSER SERVICE</Button>
                    <Button onClick={()=>{navigate('/contact')}} variant="contained" style={{ background: "#1ABC9C" }}>CONTACT</Button>
                </div>

            </div>
            <div className='aboutUs'>
                <h1 style={{ color: "#333333", marginBottom: "0vw" }}>ABOUT US.</h1>
                <p style={{ color: "#777777", fontFamily: "-moz-initial" }}>Everything you need to know about us.</p>
            </div>
            <div className='mainBox'>
                <div className='box' style={{ background: "#1ABC9C" }}>
                    <h2>WHY CHOOSE US</h2>
                    <p>Transform, agency working families thinkers who make change happen communities. Developing nations legal aid public sector our ambitions future aid The Elders economic security Rosa.

                        READ MORE</p>
                    <button  onClick={()=>{navigate('/about')}} >READ MORE</button>
                </div>
                <div className='box' style={{ background: "#34495E" }}>
                    <h2>OUR MISSION</h2>
                    <p>Frontline respond, visionary collaborative cities advancement overcome injustice, UNHCR public-private partnerships cause. Giving, country educate rights-based approach; leverage disrupt solution</p>
                    <button  onClick={()=>{navigate('/about')}} >READ MORE</button>
                </div>
                <div className='box' style={{ background: "#E74C3C" }}>
                    <h2>WHAT YOU GET</h2>
                    <p>Sustainability involvement fundraising campaign connect carbon rights, collaborative cities convener truth. Synthesize change lives treatment fluctuation participatory monitoring underprivileged equal.</p>
                    <button   onClick={()=>{navigate('/about')}} >READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Hero2