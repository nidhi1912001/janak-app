import React from "react";
import "./home.scss";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import cartoon from "../../Assets/image/search-cartoon.png";
import Container from "../../Component/Container/Container";



const Home = React.forwardRef((props, ref) => {
  const [ currentText, setCurrentText ] = useState( "" );
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  let text = "Search Something here.....";
  let delay = 100;


  useEffect( () => {
    let timeout;
    if ( currentIndex < text.length ) {
      timeout = setTimeout( () => {
        setCurrentText( ( prevText ) => prevText + text[currentIndex] );
        setCurrentIndex( ( prevIndex ) => prevIndex + 1 );
      }, delay );
    }

    return () => clearTimeout( timeout );
  }, [ currentIndex, delay, text ] );
  return (
    <>

    <div id="homeMain" ref={ref}>

      <div className="home-top">
        <Container>
          <h1 className="home-heading">
            Revolutionizing{" "}
            <span className="home-heading-span">
                Legal Expert<span className="specific-i">i</span>se
              </span>
          </h1>
          <p>Where Legal Prowess Meets Technological Brilliance</p>
        </Container>
      </div>

      <Container>
        <div className="home-bottom">
          <div className="home-bottom-content">
            <h3 className="home-bottom-heading">What content do you want?</h3>
            <div className="home-search">
              <input className="home-search-input" type="text" placeholder={`${currentText}` + "|"}/>
              <IoSearchOutline className="icon"/>
            </div>
          </div>

          <div id="search-cartoon">
            <div>
              <img src={cartoon} alt="cartoon"/>
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
      </Container>

    </div>


    </>


  )
}
)

export default Home;
