import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='aboutMainContainer'>
        <div className='contact'>
            <h2>CONTACT US</h2>
            <p>ROYAL TRADE ZONE</p>
        </div>
        <div className='details'>
            <div className='adress'>
                <h2>Address</h2>
                <p>Building No./Flat No.: C/O RAJ KUMAR AGRAWAL <br/>
Road/Street: BAJNA ROAD <br/>
City/Town/Village: Nauhjheel Banger  <br/>

District: Mathura <br/>

State: Uttar Pradesh <br/>
PIN Code: 281203 </p>
            </div>
            <div className='adress'>
                <h2>Phone</h2>
                <p> 9837243498,<br/>
                7017640500</p>
            </div>
            <div className='adress'>
                <h2 >E-Mail</h2>
                <p style={{color:"#1ABC9C"}}>royaltradezone021@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact