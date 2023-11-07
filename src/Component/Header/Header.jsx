import React,{forwardRef} from 'react'
import logo from "../../Assets/image/logo.png"
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import {Link} from "react-router-dom"
import {BsArrowUpRight} from "react-icons/bs"
import{ImArrowUpRight2} from "react-icons/im"
import './Header.scss'
import {useNavigate} from "react-router-dom"
import Container from '../Container/Container';
import ScrollToTop from "../ScrollToTop";
import Products from "../../Pages/Products/Products";

const Header=React.forwardRef((props, ref) => {

    function smoothScroll(target) {
      const { top } = target.getBoundingClientRect()
      window.scrollTo({
        top: top + window.pageYOffset,
        behavior: "smooth"
      });
    }
    const  { homeRef, aboutRef, productsRef,partnerRef, newsRef, contactRef } = ref;

    const dataBtn=[{refName:"homeRef",title:"Home"},
      {refName: "aboutRef",title: "About"},
      {refName: "productsRef", title: "Products"},
      {refName: "partnerRef", title: "Partners"},
      {refName: "newsRef", title: "News"},
      {refName: "contactRef", title: "Contact Us"}]
return(

  <Container>
  <div id="main">
    <div>
      <img src={logo} alt="logo"/>
    </div>

    <div id="pages">
      <button onClick={()=>smoothScroll(homeRef.current)}>Home</button>
      <button onClick={()=>smoothScroll(aboutRef.current)}>About</button>
      <button onClick={()=> smoothScroll(productsRef.current)}>Products</button>
      <button onClick={()=>smoothScroll(partnerRef.current)}>Partners</button>
      <button onClick={()=>smoothScroll(newsRef.current)}>News</button>
      <button onClick={()=>smoothScroll(contactRef.current)}>Contact Us</button>

    </div>

    <div id="login">
      <div >
      <button  >Login</button>
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