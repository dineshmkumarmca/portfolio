import React from 'react';
import './intro.css';
import profile from '../../assets/profile.png';
import hire from '../../assets/hire.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className="introSection">
      <div className="introText">
      <span className="hello">Hello,</span>
      <span>I'm <span class="introName">Dinesh Kumar</span></span>
      <span>Front-End Developer</span>
      <span className="introPara">I have an overall 6 years and 7 months of experience as a Web Developer.</span>
     <Link> <button className="hireBtn">
      <img src={hire} alt="" className="hireBtnImg"/>Hire Me
    </button>
    </Link>
      </div>
      <img src={profile} alt="profile" className="profileImg"/>
    </section>
    
  )
}

export default Intro