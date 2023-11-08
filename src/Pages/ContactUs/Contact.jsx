import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti"
import './contact.scss'
import logoFooter from '../../Assets/image/logoFooter.png'
import { ImArrowUpRight2 } from "react-icons/im"
import { BiHomeAlt } from "react-icons/bi"
import { LuMail } from "react-icons/lu"
import Container from "../../Component/Container/Container";
import liveChat from "../../Assets/image/Live chat.png"
import home from "../../Assets/image/fi-rr-home.png"
import {AiFillHome} from "react-icons/ai"


const Contact = React.forwardRef((props, ref)  => {

  return (
    <div className="contact" ref={ref}>

      <div className="contact-top">
        <p className="subscribe-label">Legal Knowledge as a Tool for Social Change</p>
        <input className="subscribe-input" type="text" placeholder="Enter Email Address"/>
        <button className='subscribe-button'>Subscribe <ImArrowUpRight2 className='icon'/></button>
      </div>

      <div className="contact-bottom">
        <Container>
          <div className="contact-bottom-top">
            <div className="contact-bottom-colA">

              <div className="colA-info">
                <img className="contact-logo" src={logoFooter}/>
                <p className="colA-contain">Janak learns from each interaction, refining its knowledge and
                  enhancing its ability to assist users with their legal queries.</p>
                <div className="socialMedia">
                  <TiSocialFacebook className="icon"/>
                  <TiSocialTwitter className="icon"/>
                  <TiSocialLinkedin className="icon"/>
                  <SlSocialInstagram className="icon"/>
                </div>
              </div>

              <div className="colA-border"></div>
            </div>

            <div className="contact-bottom-colB">

              {/*<div className="footer-bottom-colB"></div>*/}
              <div className="colB-left">

                <h3 className="contact-bottom-heading">Quick Links</h3>
                <div className="colB-section">
                  <a href="#">Home</a>
                  <a href="#">About Us</a>
                  <a href="#">Register</a>
                  <a href="#">Contact Us</a>
                </div>

              </div>

              <div className="colB-right">
                <h3 className="contact-bottom-heading">Contact</h3>
                <div className="contact-address">
                  <BiHomeAlt className="icon"/>
                  <p className="address-details">336 Smith Street, #05-303,<br/>
                    New Bridge Centre,<br/>
                    Singapore (050336)
                  </p>
                </div>
                <div className="contact-address">
                  <LuMail className="icon"/>
                  <p className="address-details">info@janak.ai</p>

                </div>
              </div>




            </div>
          </div>

          <div className="footer-bottom-bottom">
            <div className="livechat">
              <div className="end-border"></div>
              <img className="liveChat-img" src={liveChat}/>
            </div>
            <div className="copyright">Copyright © 2023 Janak - All Rights Reserved.</div>
          </div>
        </Container>
      </div>


    </div>
  )
}
)

export default Contact;