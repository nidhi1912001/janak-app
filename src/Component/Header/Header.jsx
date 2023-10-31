import React from 'react'
import logo from "../../Assets/image/logo.png"
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import {Link} from "react-router-dom"
import {BsArrowUpRight} from "react-icons/bs"
import{ImArrowUpRight2} from "react-icons/im"
import './Header.scss'
import {useNavigate} from "react-router-dom"
import Container from '../Container/Container';

const Header=()=>{

  const navigate=useNavigate();
  console.log(navigate);
return(
  <Container>
  <div id="main">
    <div>
      <img src={logo} alt="logo"/>
    </div>

    <div id="pages">
      <Link  to='/'>Home</Link>
      <Link to='/aboutJanak'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/partners'>Partners</Link>
      <Link to='/news'>News</Link>
      <Link to='/contact'>Contact Us</Link>
    </div>

    <div id="login">
      <div >
      <Link onClick={()=>navigate(<Login/>)}  >Login</Link>
      <span>/</span>
      <Link onClick={()=>navigate(<SignUp/>)}>Sign Up</Link>
      </div>
      {/*<BsArrowUpRight style={{ fontWeight: 'bold' }} className="headerIcon"/>*/}
      <ImArrowUpRight2 className="icon"/>
    </div>
  </div>
  </Container>
)
}

export default  Header