import React from 'react'
import partner from "../../Assets/image/partner.png"
import "./partners.scss"

const Partners=()=>{
  return(
    <div className="partners-container">
      <div className="partners-top">
        <div className='heading'> Our Partners </div>
        <p>Endorsed by Nvidia <span> Inception Program </span></p>

      </div>
      <div className="partners-details">
        <img src={partner}/>
        <div className='border'></div>
        <p>Our collaboration with the revered Nvidia Inception Program amplifies 
          our dedication. With their unparalleled technological prowess, 
          we continue to deliver top-tier solutions for all your agreement concerns.</p>

      </div>
    </div>

  )
}
export default Partners;