import React, { useState } from 'react'
import partner from "../../Assets/image/partner.png"
import joinWaitlist from "../../Assets/image/join-waitlist.png"
import "./partners.scss"

const Partners=()=>{

  const carouselSlidesData=[{
    id:1,
    img:`${partner}`,
    content:"Our collaboration with the revered Nvidia Inception " +
      "Program amplifies our dedication. With their unparalleled technological prowess, we continue to" +
      "deliver top-tier solutions for all your agreement1"
  },
    {
      id: 2,
      img:`${partner}`,
      content:"Our collaboration with the revered Nvidia Inception " +
        "Program amplifies our dedication. With their unparalleled technological prowess, we continue to" +
        "deliver top-tier solutions for all your agreement2"

    },
    {
      id: 3,
      img:`${partner}`,
      content:"Our collaboration with the revered Nvidia Inception " +
        "Program amplifies our dedication. With their unparalleled technological prowess, we continue to" +
        "deliver top-tier solutions for all your agreement3"

    }]



  const[selectData,setSelectData]=useState(carouselSlidesData[0])

 const handleClick=(ele,id)=>{
         setSelectData({...selectData,img:ele.img, content:ele.content})
 }
  return(
    <div>
       <div className="partners-container">
      <div className="partners-top">
        <div className='heading'> Our Partners </div>
        <p>Endorsed by Nvidia <span> Inception Program </span></p>

      </div>

      <div className="partners-details">
        <img src={selectData.img}/>
        <div className='border'></div>
        <p>{selectData.content}</p>
      </div>

      <div className="carousel">
        {carouselSlidesData.map((ele,id)=>{
          return(
            <a onClick={()=>handleClick(ele,id)} key={id}></a>
          )
        })}
      </div>
      </div>
   <div className="partners-bottom">
      <div className="coming-soon">
      </div>
      <div className="partner-bottom-content">
        <label className="label">Coming Soon</label>
        <p className="heading">Stay Tuned for <span> Janak.AI v1.0 </span></p>
        <p className="bottom-content">Excitement is brewing! We're diligently crafting
          enhancements and features aimed at elevating your
          journey with legal data even further. Stay connected,
          and be a part of this exhilarating evolution!
          Janak learns from each interaction,
          refining its knowledge and enhancing its ability to assist users with their legal queries</p>
        <img src={joinWaitlist}/>
        </div>
   </div>


    </div>


  )

}
export default Partners;