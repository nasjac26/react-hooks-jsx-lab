import React from "react";
import { image } from "../data/data";

function About() {
  //id?
  return (
    <div id="about"> 
      <h2>About Me</h2>
      <p>Might drop da top off of it!</p>
      <img src={image} alt="I made this"/>
    </div>
  
  
    )
  }

export default About;
