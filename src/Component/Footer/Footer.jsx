import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import{TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin} from "react-icons/ti"
import './footer.scss'
const Footer=()=>{

  return(
    <>
      <div>
        <h1 id="text">janak.ai</h1>
        <p id="text">janak learns from each interaction, refining its knoweldge and enhancing its ability  to assist
          users with their legal queires</p>
        <div>
        <TiSocialFacebook  className="icon"/>
        <TiSocialTwitter className="icon" />
        <SlSocialInstagram className="icon"/>
        <TiSocialLinkedin className="icon"/>
        </div>

      </div>
    </>
  )
}

export default Footer;