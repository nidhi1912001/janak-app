import React from 'react'
import "./AboutJanak.scss"
import employee from "../../Assets/image/employees-brainstorming.png"

const AboutJanak=()=>{
  return(
    <div className="about">
         <div className="about-left">
           <img src={employee}  alt="employee"/>
           <div className="box">
             <span className="ten">10<sup>+</sup></span>
             <span className="experience">YEARS OF EXPERIENCE</span>
           </div>
         </div>

         <div className="about-right">
              <div className="heading">About Us</div>
              <div className="container">
                <p className="container-start">Embarking on a Journey to Transform the <span>Legal Landscape</span> </p>
                <p className="container-middle">In a world where legal complexities and jargons are the norm,
                Janak emerges as a beacon of simplicity and accessibility.
                We're here to reengineer how you interact with the legal system,
                replacing confusion with clarity, inefficiency with speed, and barriers with open gates.
                </p>
                <div className="container-end">
                <h5> Our mission</h5>
                  <div className="end-detail">
                    <span></span>
                   <p>“ isn't just to provide tools; it's to redefine how society
                  navigates the legal terrain, making justice not just a
                  theoretical concept but a comprehensive and
                  accessible experience for everyone. ”</p>
                  </div>
                </div>
             </div>
         </div>
    </div>

  )
}
export default AboutJanak