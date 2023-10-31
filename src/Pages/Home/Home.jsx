import React from "react";
import "./home.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import cartoon from "../../Assets/image/search-cartoon.png";
import ReactTyped from "react-typed";
import AboutJanak from "../AboutJanak/AboutJanak";
import Partners from "../Partners/Partners";
import Products from "../Products/Products";
import News from "../News/News";
import Container from "../../Component/Container/Container";


const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  let text = "Search Something here.....";
  let delay = 100;
  let infinite = true;

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);
  return (
    
      <div id="homeMain">
        <div id="home1">
          <Container>
            <h1>
              Revolutionizing{" "}
              <span>
                Legal Expert<em>i</em>se
              </span>
            </h1>
            <p>Where Legal Prowess Meets Technological Brilliance</p>
          </Container>
        </div>

        <div id="home2">
          <div id="inputText">
            <h3>What content do you want?</h3>
            <div className="search">
              <input type="text" placeholder={`${currentText}` + "|"} />
              <IoSearchOutline className="icon" />
            </div>
          </div>

          <div id="search-cartoon">
            <div>
              <img src={cartoon} alt="cartoon" />
            </div>
            <div id="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                posuere erat. Aliquam rhoncus tortor eget magna placerat
                condimentum. Fusce elementum condimentum sapien, ac convallis
                ante pharetra ac.
              </p>
              <p>
                Donec vel dignissim velit. Cras tempus tincidunt odio, id
                pretium turpis pharetra quis. Duis orci arcu, sodales vel magna
                et, tempor cursus erat. Integer posuere tempor lectus, sed
                rutrum nibh.
              </p>
            </div>
          </div>
        </div>

        <AboutJanak />
        <Products />
        <Partners />
        <News />
      </div>

  );
};

export default Home;
