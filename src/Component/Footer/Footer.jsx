import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti"
import './footer.scss'
import logoFooter from '../../Assets/image/logoFooter.png'
import { ImArrowUpRight2 } from "react-icons/im"
import { FiHome } from "react-icons/fi"
import { LuMail } from "react-icons/lu"
import Container from "../Container/Container";
import liveChat from "../../Assets/image/Live chat.png"
import home from "../../Assets/image/fi-rr-home.png"


const Footer = () => {

  return (
    <div className="footer">

      <div className="footer-top">
        <p className="subscribe-label">Legal Knowledge as a Tool for Social Change</p>
        <input className="subscribe-input" type="text" placeholder="Enter Email Address"/>
        <button className='subscribe-button'>Subscribe <ImArrowUpRight2 className='icon'/></button>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-top">
            <div className="footer-bottom-colA">
              <img className="footer-logo" src={logoFooter}/>
              <p className="colA-contain">Janak learns from each interaction, refining its knowledge and
                enhancing its ability to assist users with their legal queries.</p>
              <div className="socialMedia">
                <TiSocialFacebook className="icon"/>
                <TiSocialTwitter className="icon"/>
                <SlSocialInstagram className="icon"/>
                <TiSocialLinkedin className="icon"/>
              </div>
            </div>

            <div className="footer-bottom-colB"></div>
            <div className="footer-bottom-colC">

              <h3 className="footer-bottom-heading">Quick Links</h3>
              <div className="colC-section">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Register</a>
                <a href="#">Contact Us</a>
              </div>

            </div>

            <div className="footer-bottom-colD">
              <h3 className="footer-bottom-heading">Contact</h3>
              <div className="contact-address">
                <FiHome className="icon"/>

                <p className="address-details">336 Smith Street, #05-303, New Bridge Centre,Singapore (050336)
                </p>
              </div>
              <div className="contact-address">
                <LuMail className="icon"/>
                <p className="address-details">info@janak.ai</p>

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

export default Footer;