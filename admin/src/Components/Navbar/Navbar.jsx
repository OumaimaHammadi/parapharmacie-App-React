import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg' 
import logo from '../../assets/logo.png'



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
            <div className="nav-text">
              <p>PHARMA</p>
              <span>Admin Panel</span>
            </div>

      </div> 
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}
 