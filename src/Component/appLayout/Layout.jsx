import React from 'react'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom"
import "./layout.scss";
import ScrollToTop from "../ScrollToTop";

const Layout=()=>{
  return(
   <div className="appLayout">

     <Header/>
     <Outlet/>
     {/*<Footer/>*/}
   </div>
  )
}
export default Layout