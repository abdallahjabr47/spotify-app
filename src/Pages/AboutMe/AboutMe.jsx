import * as React from 'react';
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';
import './AboutMe.css';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from './AboutMeStyle';


function AboutUs () {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_ME)
  }, [])
  
  return (
    <div className="body">
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Who's Abdallah?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "14px"}}>
          My name is Abdallah Jabr, an ambitious person who loves to learn and evolve. I’m 22 years old and I recently graduated from Birzeit University with a B.A. in Computer Science. I always seek to develop myself through experiences, and I am a Co-founder of Global Shapers - Birzeit Hub.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What about his educational background?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "14px"}}>
          Through my journey in University and after, I got some hands-on experience in front-end development and translating designs and wireframes into highly-responsive code by implementing app user interface components via Javascript and React js workflows in addition to subjects of OOP, Data Structure, Algorithms, Databases, Problem-solving, Programming paradigms, Design Principles, Patterns, System design, and more. I have trained in frontend development at Blue Ltd. company, where I improved my technical skills. Also, I was a marketing team member as a Designer in the Google Developer Students Club (GDSC) at Birzeit University.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What about his graduation project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "14px"}}>
          My classmate's and my graduation project revolved around a website that was developed to be used to expand the global reach of the online auction marketplace which allows sellers and customers to obtain various products online and overcome geographical and financial constraints.
          </Typography>
          
          <Typography style={{marginTop: '10px', fontSize: "14px"}}>
          The project has developed the back end using Java(Spring-boot framework), the front end using Angular framework, and phpMyAdmin for the database with security measures for the server side          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What about his experience while traveling?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{  fontSize: "14px"}}>
          I participated with a group of youth that got selected for training programs. one in Seoul, South Korea to enhance Palestinian and Korean students' technical and cultural knowledge, and the second in Washington D.C., and New York, USA to represent the Palestinian emerging youth in a Professional Development Immersion Program (PDIP). 
          </Typography>
          <Typography style={{ marginTop: '10px', fontSize: "14px"}}>
          I got information about how to stand out in the global workplace, design innovative solutions for our community's problems, learn about USA culture and history, gain resources and knowledge, and emphasize professional development through assessment, self-awareness, and behavior, the transformation of perspective, and coaching support. Through workshops, hands-on individual and team exercises, discussions, site visits, meetings, job-shadowing, a tech and innovation hackathon, and so on.
          </Typography>
          <Typography style={{ marginTop: '10px', fontSize: "14px"}}>
          I got about workplace culture and the best practices to develop our communication, planning, decision-making, and collaboration skills, complex challenges, and capitalize on emerging opportunities for career success, and to improve leadership skill development, effective communication, critical thinking, cross-cultural understanding, public speaking, project management, how to create a good CV or Resume, and entrepreneurial frameworks within a global framework.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>About experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontSize: "14px"}}>
          I held the part-time position of IT coordinator in the technical team at Paltel Group Foundation (PGF), to provide the foundation with technical input and support operations while implementing coding and entrepreneurship projects and activities. 
          </Typography>

          <Typography style={{ marginTop: '10px', fontSize: "14px"}}>
          Also, I have worked as a teaching assistant (TA) in teaching the basics of coding and artificial intelligence to young kids and students with multiple software companies in Palestine (PGF, Palestine EdTech Hub) to help them build their own projects.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>


  )
}

export default AboutUs
