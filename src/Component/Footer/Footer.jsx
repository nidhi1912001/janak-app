import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import{TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin} from "react-icons/ti"
import './footer.scss'
import logoFooter  from '../../Assets/image/logoFooter.png'

const Footer=()=>{

  return(
    <div className="footer">

      <div className="footer-top">
        <p className="subscribe-label">Legal Knowledge as a Tool for Social Change</p>
        <input className="subscribe-input" type="text" placeholder="Enter Email Address"/>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src={logoFooter}/>
          <p>Janak learns from each interaction, refining its knowledge and
            enhancing its ability to assist users with their legal queries.</p>
          <div className="socialMedia">
            <TiSocialFacebook  className="icon"/>
            <TiSocialTwitter className="icon" />
            <SlSocialInstagram className="icon"/>
            <TiSocialLinkedin className="icon"/>
          </div>

        </div>

        <div className="footer-bottom-right">

        </div>
      </div>



    </div>
  )
}

export default Footer;