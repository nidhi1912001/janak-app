import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutJanak from "./Pages/AboutJanak/AboutJanak";
import Contact from "./Pages/ContactUs/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutJanak" element={<AboutJanak/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
