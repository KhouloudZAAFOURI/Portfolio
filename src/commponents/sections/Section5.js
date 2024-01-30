import React from 'react'
import "./Section5.css"; 
import video from "../../imges/INSPIRATION.mp4";
import  { useState } from 'react';


export default function Section5() {

  const initialProjectsToShow = 2;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const handleLoadMore = () => {
    // Increase the number of projects to show when "Load More" is clicked
    setProjectsToShow(projectsToShow + 2);
  };

  return (
    <>
        <div id='section5'>

            <div id = 'title'>
        PORTFOLIO  
            </div>

            <div id='container5'>
              <div id='projects'>
                 {/*an array with a length equal to projectsToShow  */}
              {[...Array(projectsToShow)].map((_, index) => (
          
                 <div id='project' key={index}>
            <div id='info'>  
              <div id='information'>
                <h2> Project {index + 1} </h2>
                <h2 id='titr'> PORTFOLIO</h2> 
                <p id='tools'> HTML/ CSS/ JS/ REACT </p>
              </div>
            </div>
            <video controls preload='metadata' width="100%" height="auto" src={video} >
              Your browser does not support the video tag.
            </video>
                 </div>
          
              ))}
              </div>
              
              <div id='boutton'>
              {projectsToShow < 6 && (<button id='pagination' onClick={handleLoadMore}> Load More </button> )}
              </div>

            </div>
        </div>

    </>
  )
}
