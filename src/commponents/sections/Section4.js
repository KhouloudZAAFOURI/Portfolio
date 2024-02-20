import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./Section4.css"

export default function Section4() {
  return (
    <>
        <div id='section4'>

        <div id = 'title'>
        RESUME   
        </div>

        <section id="container4">

       <div id='experiences'>

         <div id='experience'>
       <p id='icon'><MdOutlineWork /> </p>
        <h2> Experiences </h2>
        </div>

        <div id='exps'>
        <div id='exp'>
        <h2>Front End Developer </h2>
        <h3> October 2022 - Present </h3>
        <p> Info Smile startup </p>
        </div>
        <div id='exp'>
        <h2>Web Trainer</h2>
        <h3> January 2022 - August 2022 </h3>
        <p> EPAA Academy School</p>
        </div>
        </div>

       </div> 

       <div id='educations'>
        <div id='education'>
        <p id='icon'><FaGraduationCap /></p>
        <h2> Education </h2>
        </div>

        <div id='academy'>
        <div id='educ'>
        <h2>Research Master Degree </h2>
        <h3> ENTERPRISE SYSTEM ENGINEERING </h3>
        <p> Higher Institute of Computer Science and Multimedia of Sfax</p>
        </div>
        <div id='educ'>
        <h2>Fundamental License</h2>
        <h3> Computer Science </h3>
        <p> University of Science and Technology of Sidi Bouzid </p>
        </div>
        </div> 
      </div>
        
        </section>
        </div>

    </>
  )
}
