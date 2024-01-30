import React from 'react'
import '../sections/section2.css';
import imge from './../../imges/image_s22.jpg';
import cv from './../../imges/CV.pdf';

export default function Section2() {

const data =[
{label:"Birthday",info:": 25.01.1997"},
{label:"Phone",info:": +216 97138936"},
{label:"Email",info:": khouloudzaafouri1@gmail.com"},
{label:"From",info:": Tunisia"},
{label:"Languages",info:": French - English"},
{label:"Freelace",info:": Available"},
]  

const dataShow = data.map((e, index)=>{
  return   <li key={index}>           
  <p style={{width:"100px",padding:"0px",margin:"0px"}}>{e.label}</p>
 <span style={{paddingLeft:"30px"}}> {e.info} </span> </li>
     })


  return (
    <>
    <section id='section2'>
    <div id = 'title'>
       ABOUT ME 
    </div> 

    <container id = 'container2'>  

    <div id='image'>
           <img id='photo' src={imge} alt=""></img>
    </div> 

    <div id ='information'>
        <h1> Hi There! I'm Khouloud Zaafouri </h1>
        <h3> Front-End Depeloper</h3>
        <p> Proven ability to ensure responsiveness,
            and deliver seamless user interactions.
            Passionate about staying updated with the latest frontend technologies 
            and best practices. </p>

        <ul>
        {dataShow}           
        </ul>

        <div className='download'>
        < a href= {cv} id='cv' download={"cv Khouloud Zaafouri.pdf"}> Download CV </a>
        </div>
    </div>
    </container> 
    </section>    

    </>
  )
}


// {/* <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}>Birthday</p> <span style={{paddingLeft:"30px"}}> : 25.01.1997 </span> </li>
// <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}> Phone </p>  <span style={{paddingLeft:"30px"}}> : +216 97138936 </span> </li>
// <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}> Email </p>  <span style={{paddingLeft:"30px"}}> : khouloudzaafouri1@gmail.com </span> </li>
// <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}> From </p>  <span style={{paddingLeft:"30px"}}> : Tunisia </span> </li>
// <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}> Language </p>  <span style={{paddingLeft:"30px"}}> : French - English  </span> </li>
// <li> <p style={{width:"100px",padding:"0px",margin:"0px"}}> Freelance </p>  <span style={{paddingLeft:"30px"}}> : Available  </span> </li> */}