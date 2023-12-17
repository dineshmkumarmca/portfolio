import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src={logo} alt="logo" className="logo" />
    <div className="desktopElement">
   <Link className="desktopMenuItem" activeClass="active" to="intro" spy={true} smooth={true} offset={-100}>Home</Link>
   <Link className="desktopMenuItem" activeClass="active" to="skills" spy={true} smooth={true} offset={-50}>About</Link>
   <Link className="desktopMenuItem">Journey</Link>
   <Link className="desktopMenuItem">Recognitions</Link>
   
   
    </div>
    <button className="desktopBtn">
      <img src={contact} alt="" className="desktopimg"/>Contact Me
    </button>

    </nav>
    
    
   
  )
}

export default Navbar