import React, { useState } from "react";
import partnerData from "../../utilities/partnerData";
import joinWaitlist from "../../Assets/image/join-waitlist.png";
import "./partners.scss";
import Container from "../../Component/Container/Container";

const Partners = React.forwardRef((props, ref)  => {


  const [selectData, setSelectData] = useState(partnerData[0]);

  const handleClick = (ele, id) => {
    setSelectData({ ...selectData, img: ele.img, content: ele.content });
  };
  return (
    <div className="partners-main" ref={ref}>

      <div className="partners-top">
        <Container>
        <div className="top">
          <div className="top-heading"> Our Partners </div>
          <p className="top-content">
            Endorsed by Nvidia <span> Inception Program </span>
          </p>
        </div>

        <div className="partners-details">
          <img className="partners-details-img" src={selectData.img} />
          <div className="border"></div>
          <p className="partners-details-content">{selectData.content}</p>
        </div>

        <div className="carousel">
          {partnerData.map((ele, id) => {
            return <a className="carousel-link" onClick={() => handleClick(ele, id)} key={id}></a>;
          })}
        </div>
      </Container>
      </div>



      <div className="partners-bottom">

        <Container>

          <div className="mobile-input">
            <input className="input" type="text" placeholder="hello"/>
          </div>

        <div className="partner-bottom-content">
          <label className="partner-label">Coming Soon</label>
          <p className="partner-heading">
            Stay Tuned for <span> Janak.AI v1.0 </span>
          </p>
          <p className="bottom-content">
            Excitement is brewing! We're diligently crafting enhancements and
            features aimed at elevating your journey with legal data even
            further. Stay connected, and be a part of this exhilarating
            evolution! Janak learns from each interaction, refining its
            knowledge and enhancing its ability to assist users with their legal
            queries
          </p>
          <img className="joinWaitlist"  src={joinWaitlist} />
        </div>
        </Container>
      </div>
    </div>
  )
}
)
export default Partners;
