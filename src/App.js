import React from 'react';
import './App.css';
import NavBar from "./commponents/NavBar/NavBar";
import Section1 from "./commponents/sections/Section1";
import Section2 from "./commponents/sections/Section2"; 
import Section3 from "./commponents/sections/Section3";
import Section3a from "./commponents/sections/Section3a"; 
import Section4 from "./commponents/sections/Section4"; 
import Section5 from "./commponents/sections/Section5"; 
import Section6 from "./commponents/sections/Section6";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section3a/>
      <Section4/>
      <Section5/>
      <Section6/>

    </div>
  );
}

export default App;
