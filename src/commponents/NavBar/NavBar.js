import React, { useState } from "react";
import "./NavBar.css";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link } from "react-scroll";


function NavBar() {


  //  Function of the dark mode 
  const[open,setopen]=useState(false);
  const[dark,setdark]=useState(false);
  function mode() {
    setdark(!dark);
  if(dark){
     document.documentElement.style.setProperty("--SpanColr","#FE5993");
  
  }else{
     document.documentElement.style.setProperty("--SpanColr","#fec544");
    }  
  }


  //  is the function that replace a set of line of code 
  //  set of values as an array 
  const dataNav =[
    {title:"home",path:"section1"},
    {title:"about", path:"section2"},
    {title:"services", path:"section3"},
    {title:"resume", path:"section4"},
    {title:"portfolio", path:"section5"},
    {title:"contact", path:"section6"}
]
//  for desktop screen 
//  it is important to make in fornt of the return a such code 
const dataNavShow= dataNav.map((e, index)=>{
  return   <li key={index}>
    <Link
       to={e.path}
       spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}>    
       {e.title}
     </Link>
  </li>
     })

 // for mobile screen 
 const dataNavShowMobile= dataNav.map((e, index)=>{
  return <li style={{transform:open?"translateX(0)":"translateX(-200%)"}} key={index} >
  <Link to={e.path}
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={-70}
    duration={500}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}>
     {e.title}</Link> 
  </li>
  
 })
   
  return (
  <>
    <nav>
      <div className="container">

        <div className="logo">
          <GiTwirlyFlower id="flower"fontSize={"25px"} />
          <p>khouloud</p>
          <WiMoonAltThirdQuarter id='dark' fontSize={"25px"} onClick={mode} cursor={"pointer"}/>
        </div>

{/* le navBar on the normal screen */}
       <ul id="navlist"> {dataNavShow} </ul>

{/* the animation that replace the 3 spans to X sign */}
        <div onClick={()=>setopen(!open)}  className="bars">
          <span style={{transform:open && "translateY(10px) rotate(-45deg)",backgroundColor:open &&"red"}}></span>
          <span style={{ transform:open ?"scale(0)":"scale(1)"}} ></span>
          <span style={{transform:open && "translateY(-10px) rotate(45deg)",backgroundColor:open &&"red"}}></span>
        </div>

{/* le navBar on the mobile screen */}
         <ul className="mobileLink" style={{display:open?"flex":"none"}}> {dataNavShowMobile} </ul>
         
      </div>

    </nav>

 </> 
 );
}

export default NavBar;

