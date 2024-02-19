import React from 'react'
import "../sections/sectio1.css"
import { FaLinkedin} from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import imge from "../../imges/dev.jpg";
import { IconContext } from 'react-icons';

// jquery
import $ from 'jquery';
import {ripples} from 'jquery.ripples';

// for the animation 
import Pulse from 'react-reveal/Pulse';


function Section1() {
    $(document).ready(function () {
        $("#section1").ripples({
        interactive:true,
        dropRadius: 40,
        perturbance: 0.04 ,
        resolution: 400,
       
      });})
   
  return (
    <section id='section1'>
        <div>
   
      <Pulse>
         <img id='imge' src={imge} alt=""/>
        </Pulse> 
            <h1> Hi,  I am
                 <span id='typed'></span>
            </h1>
            <p>  My proficiency spans HTML, CSS, and JavaScript,
                and I have a strong foundation in popular frontend frameworks
                like React. I thrive on creating visually stunning interfaces
                that seamlessly blend aesthetics with functionality.
            </p>
            <ul id='social'>
            <IconContext.Provider value={{ style: {  cursor:'pointer',fontSize:"35px", color:"white"} }}>
                <li><a href="https://github.com/" target=""><GrGithub/></a></li>
                <li> <a href="https://www.linkedin.com/in/zaafouri-khouloud-3bb455151/" target=""><FaLinkedin/> </a></li>
            </IconContext.Provider>
            </ul>
        </div>        
        </section>
  )
}

export default Section1