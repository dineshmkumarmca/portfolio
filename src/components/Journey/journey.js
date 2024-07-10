import React from 'react'
import './journey.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Journey = () => {
  return (
   <>
    <section id="journey" className="journeySection">
<p>Journey</p>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Jan 2023 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Allianz Technology - Trivandrum</h4>
     <ul>
     <li>Working as a Front End Developer</li>
     <li>Responsible for migrating app from angular 8 to Latest</li>
     <li>Active participation in sprint planning</li>
     <li>Performed code review of peer colleagues</li>
     <li>Mentored junior colleagues to improve their skill sets in Front end area</li>
     <li>Working on the insurance project</li>
     </ul>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Jan 2023 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Mobile Programming India Pvt Ltd - Chennai</h4>
     <ul>
     <li>Worked as a Front End Developer</li>
<li>Developing a pet clinic application using Angular 11</li>
<li>Participating in Client calls</li>
<li>Demonstrating the application to clients during every release</li>
<li>Performed Code review using Sonarqube</li>
<li>Responsible for providing inputs in sprint planning</li>
<li>Member of JS R&D team for incorporating new techniques in the frontend area.</li>
     </ul>
    
</VerticalTimelineElement>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Apr 2020 - Oct 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Farazon Software Technologies Pvt Ltd., - Coimbatore</h4>
     <ul>
     <li>Developed CRM Application using Angular 11.</li>
<li>Provided Python REST API for mobile application and Web Application.</li>
<li>Developed all CRM API using python.</li>
<li>Implemented the application in a dedicated server using NGINX, Apache server.</li>
<li>Developed an ecommerce application for parent company’s products using PHP.</li>
<li>Developed an admin panel to view the orders and initiate shipping.</li>
<li>Integrated third party shipping provider api for the ease of sales team.</li>
     </ul>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Apr 2017 - Feb 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Doers Tech Enterprise Solutions Pvt Ltd., - Coimbatore</h4>
     <ul>
     <li>Developed both Pre Sales and Post Sales CRM.</li>
<li>Provided web service API for mobile application.</li>
<li>Worked in all the modules of both pre sales and post sales CRM.</li>
<li>Developed Masters, Purchase and Inventory modules of ERP.</li>
<li>Designed database for Masters, Purchase and Inventory modules.</li>
<li>Developed Masters, Leave and Permission modules.</li>
<li>Designed and developed Admin and Sales application for bakery.</li>
<li>Implemented the application in the client's server and provided post
implementation support.</li>
<li>Developed an application for email marketing campaigns.</li>
<li>It is being used by the marketing team for email campaigns for marketing the
products</li>
     </ul>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Oct 2015 - Feb 2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Software Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Pricol Technologies Pvt Ltd., - Coimbatore</h4>
     <ul>
     <li>Convert code from core PHP to Codeignitor.</li>
<li>Developed a Single page application for loading data from live devices.</li>
     </ul>
    
  </VerticalTimelineElement>

 
</VerticalTimeline>

</section>
   </>
    
   
  )
}

export default Journey