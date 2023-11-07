import logo from './logo.svg';
import React from "react";
import './App.scss';
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutJanak from "./Pages/AboutJanak/AboutJanak";
import Contact from "./Pages/ContactUs/Contact";
import Products from "./Pages/Products/Products"
import Partners from "./Pages/Partners/Partners";
import News from "./Pages/News/News"


function App() {
  const homeRef = React.useRef()
  const aboutRef = React.useRef()
  const productsRef = React.useRef()
  const partnerRef= React.useRef()
  const newsRef = React.useRef()
  const contactRef = React.useRef()


  return (
    <>
      <Header ref={{ homeRef, aboutRef, productsRef,partnerRef, newsRef, contactRef }}/>
      <Home ref={homeRef} />
      <AboutJanak  ref={aboutRef}/>
      <Products ref={productsRef}/>
      <Partners ref={partnerRef}/>
      <News  ref={newsRef}/>
      <Contact ref={contactRef}/>
   </>
  );
}

export default App;
