import React from 'react'
import "././section3.css"
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineInteraction } from "react-icons/ai";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Slide from 'react-reveal/Slide';



export default function Section3() {

const Icons = {
    iconA: <TiHtml5 />,
    iconB: <IoLogoJavascript />,
    iconC: <AiOutlineInteraction />,
    iconD: <FaReact />,
    iconE: <FaBootstrap />,
    iconF: <FaGithub />,
  };
  
  const data = [
    { icon: Icons.iconA, title: "HTML/CSS", para: "Creating the structure and styling of web pages using HTML and CSS." },
    { icon: Icons.iconB, title: "JavaScript", para: "Implementing dynamic and interactive elements on the webpage, handling user interactions." },
    { icon: Icons.iconC, title: "Animation and Interaction", para: "Implementing animations and interactive elements to enhance user engagement and create a more dynamic user interface." },
    { icon: Icons.iconD, title: "React", para: "Building user interfaces efficiently using popular frontend frameworks and libraries." },
    { icon: Icons.iconE, title: "Bootstrap", para: "Implementing and customizing frontend frameworks for consistent and responsive designs." },
    { icon: Icons.iconF, title: "GitHub", para: "Collaborating with other developers using version control systems like Git to manage and track changes to the codebase." },
  ];
  
  const dataShow = data.map((e, index) => {
    return (
      <div id='service' key={index}>
        <div id='icon'> {e.icon} </div>
        <h3>{e.title}</h3>
        <p>{e.para}</p>
      </div>
    );
  });
  

  return (
    <>
    <section id='section3'>
    <div id = 'title'>
        SERVICES  
    </div>

    <Slide left>
    <div id = 'container3' >
        {dataShow}
    </div>
    </Slide>

    </section>

    </>
  )}