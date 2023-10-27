import logo from './logo.svg';
import React from "react";
import './App.scss';
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutJanak from "./Pages/AboutJanak/AboutJanak";
import Contact from "./Pages/ContactUs/Contact";
import Footer from "./Component/Footer/Footer";
import Layout from "./Component/appLayout/Layout";
import Products from "./Pages/Products/Products"
import Partners from "./Pages/Partners/Partners";
import News from "./Pages/News/News"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="aboutJanak" element={<AboutJanak/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="partners" element={<Partners/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
