import React from 'react'
import "./About.scss"
import employee from "../../Assets/image/employees-brainstorming.png"
import Container from "../../Component/Container/Container";

const About=React.forwardRef((props, ref)  =>{
  return(
    <div className="about" ref={ref}>
      <Container>
         <div className="about-left">
           <img src={employee}  alt="employee"/>
           <div className="box">
             <span className="ten">10<sup>+</sup></span>
             <span className="experience">YEARS OF EXPERIENCE</span>
           </div>
         </div>

         <div className="about-right">
              <div className="about-right-heading">About Us</div>
              <div className="about-right-container">
                <p className="about-container-start">Embarking on a Journey to Transform the <span>Legal Landscape</span> </p>
                <p className="about-container-middle">In a world where legal complexities and jargons are the norm,
                Janak emerges as a beacon of simplicity and accessibility.
                We're here to reengineer how you interact with the legal system,
                replacing confusion with clarity, inefficiency with speed, and barriers with open gates.
                </p>
                <div className="about-container-end">
                <h5 className="about-container-heading"> Our mission</h5>
                  <div className="about-container-detail">
                    <span></span>
                   <p className="about-end-content">“ isn't just to provide tools; it's to redefine how society
                  navigates the legal terrain, making justice not just a
                  theoretical concept but a comprehensive and
                  accessible experience for everyone. ”</p>
                  </div>
                </div>
             </div>
         </div>
      </Container>
    </div>

  )
}
)
export default About