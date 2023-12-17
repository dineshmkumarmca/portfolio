import React from 'react';
import './skills.css';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import erp from '../../assets/erp.png';

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
     <span className="skillTitle">What I do</span>
     <span className="skillDesc">I am a skilled frontend developer</span>
     <div className="skillBars">
      <div className="skillBar">
        <img src={frontend} alt="" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>
          Front-end Development
          </h2>
          <p>
          Design and develop frontend pages with HTML, CSS, Bootstrap, Javascript, Typescript, Angular, React
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={backend} alt="" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>
          Backend Development
          </h2>
          <p>
          Write and develop RESTfull APIs' using PHP and Python and integrate with MySql and Mongo DB.
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={erp} alt="" className="skillBarImg"/>
        <div className="skillBarText">
          <h2>
          Enterprise Applications
          </h2>
          <p>
          Develop Enterprise applications like CRM, ERP , Inventory, POS and Payroll.
          </p>
        </div>
      </div>
     </div>
     
     
     
      </section>
  )
}

export default Skills