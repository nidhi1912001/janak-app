import React,{forwardRef} from 'react'
import logo from "../../Assets/image/logo.png"
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import {BsArrowUpRight} from "react-icons/bs"
import{ImArrowUpRight2} from "react-icons/im"
import './Header.scss'
import Container from '../Container/Container';


const Header=React.forwardRef((props, ref) => {

    function smoothScroll(target) {
      const { top } = target.getBoundingClientRect()
      window.scrollTo({
        top: top + window.pageXOffset,
        behavior: "smooth"
      });
    }
    const  { homeRef, aboutRef, productsRef,partnerRef, newsRef, contactRef } = ref;


    const dataBtn=[{refName:homeRef,title:"Home"},
      {refName: aboutRef,title: "About"},
      {refName: productsRef, title: "Products"},
      {refName: partnerRef, title: "Partners"},
      {refName: newsRef, title: "News"},
      {refName: contactRef, title: "Contact Us"}]


return(

  <Container>
  <div className="main">
    <div>
      <img src={logo} alt="logo"/>
    </div>

    <div className="pages">
      {dataBtn.map((data)=>{
        return(
          <button className='page-btn' onClick={()=>smoothScroll(data.refName.current)}>{data.title}</button>

        )
      })}

    </div>

    <div id="login">
      <div >
      <a >Login</a>
      <span>/</span>
      <button >Sign Up</button>
      </div>
      {/*<BsArrowUpRight style={{ fontWeight: 'bold' }} className="headerIcon"/>*/}
      <ImArrowUpRight2 className="icon"/>
    </div>
  </div>
  </Container>
)
}
)
export default Header;