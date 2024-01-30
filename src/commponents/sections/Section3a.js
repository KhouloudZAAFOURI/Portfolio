import React from 'react'
import { useState } from 'react';
import "./Section3a.css"
import robert from "../../imges/robert.jpg";

export default function Section3a() {

// SKILLS PROGRESS 
// to manage the animation of % when the scroll is on it 

const[scrol,setscrol]=useState(false);

window.onscroll=()=>{
  console.log(window.scrollY);
if(window.innerWidth > 950 &&  window.scrollY >= 1500 ){
  setscrol(true)
  console.log(scrol,1);
}
if(window.innerWidth <= 950 && window.scrollY >= 3000  ){
 setscrol(true)
 console.log(scrol,0);
}
}
const dataProgress = [
{title:"HTML",value:"80%"},
{title:"CSS",value:"90%"},
{title:"JAVASCRIPT",value:"80%"},
{title:"BOOTSTRAP",value:"70%"},
{title:"JQUERY",value:"80%"},
{title:"REACT",value:"80%"},
]
const dataShow=  dataProgress.map((e,index)=>{
return  <div id="progresses" key={index}>
 <h4>{e.title}</h4>
 <div  id="progess">
 
 {/* <div style={{width: scrol ? `${e.value}`% : "0"}} id="level"> */}
  <div id="level" style={{width:scrol ? `${e.value}`:"0"}}> 

     <span>{e.value}</span>
   </div>
 </div>
</div>    

 })


   return (
    <>
    <section id="section3a">

         <div id = 'title'>
        SKILLS  
         </div>

    <section id="coontainer3a">

        <div id="skills">
         <h1>All the skills that I have in that field of work are mentioned.</h1>
         <div id="tooltip">
          <p id='quote'>" The future belongs to those who learn more skills and combine them
          in creative ways."
          </p>
         <span></span> 
         <img id='img' src={robert} alt=""/>
        </div>
        </div>


      <div id="skillsProgress">
          {dataShow}
      </div>

      </section>
    </section>
    </>
  );
}