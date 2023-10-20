import React from 'react'
import logo from "../../Assets/image/logo.png"
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import {Link} from "react-router-dom"
import {BsArrowUpRight} from "react-icons/bs"
import './Header.scss'
import {useNavigate} from "react-router-dom"

const Header=()=>{

  const navigate=useNavigate();

return(
  <div id="main">
  <div>
    <img src={logo} alt="logo"/>
  </div>

    <div>
      <Link  to='/'>Home</Link>
      <Link to='/aboutJanak'>About Janak</Link>
      <Link to='/contact'>Contact Us</Link>
    </div>

    <div className="login">
      <Link onClick={()=>navigate(<Login/>)} >Login</Link>
      <span>/</span>
      <Link onClick={()=>navigate(<SignUp/>)}>Sign Up</Link>
      <BsArrowUpRight className="icon" />
    </div>
  </div>
)
}

export default  Header