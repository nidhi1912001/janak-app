import "./Header.scss";
import React, { forwardRef, useState } from 'react'
import './Header.scss'
import logo from "../../Assets/image/logo.png"
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { ImArrowUpRight2 } from "react-icons/im"
import { HiBars4 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Container from '../Container/Container';


const Header = React.forwardRef( ( props, ref ) => {

    const [ bar, setBar ] = useState( false )

    function smoothScroll( target ) {
      const { top } = target.getBoundingClientRect()
      window.scrollTo( {
        top: top + window.pageXOffset,
        behavior: "smooth"
      } );
    }

    const { homeRef, aboutRef, productsRef, partnerRef, newsRef, contactRef } = ref;


    const dataBtn = [ { refName: homeRef, title: "Home" },
      { refName: aboutRef, title: "About" },
      { refName: productsRef, title: "Products" },
      { refName: partnerRef, title: "Partners" },
      { refName: newsRef, title: "News" },
      { refName: contactRef, title: "Contact Us" } ]

    const toggleBar = () => {
      setBar( !bar )
    }


    return (

      <Container>
        <div className="main">

          <nav className="bars">

            <button onClick={toggleBar}> {bar ? <RxCross2/> : <HiBars4/>} </button>
          </nav>

          <div className={bar ? "logo-mobile" : "logo"}>
            <img src={logo} alt="logo"/>
          </div>


          <div className={bar ? "page-mobile" : "pages"}>
            {dataBtn.map( ( data ) => {
              return (
                <button className='page-btn' onClick={() => smoothScroll( data.refName.current )}>{data.title}</button>

              )
            } )}

          </div>

          <div className={bar ? "userLogin-mobile" : "user-login"}>
            <div className="login-signUp">
              <a className="login">Login</a>
              <span className="slash">/</span>
              <a className="signup"> Sign Up</a>
            </div>
            <ImArrowUpRight2 className="icon"/>
          </div>
        </div>
      </Container>
    )
  }
)
export default Header;