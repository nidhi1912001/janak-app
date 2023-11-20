import React, { useState,useEffect } from "react";
import "./news.scss";
import newsList from "../../utilities/newsData";
import { ImArrowUpRight2 } from "react-icons/im"
import vectorLeft from "../../Assets/image/vector-left.png"
import vectorRight from "../../Assets/image/vector-right.png"
import Container from "../../Component/Container/Container";

const News = React.forwardRef((props, ref)  => {

  const [currentImage, setCurrentImage] = useState(0);


  const handleLeft=()=>{
    setCurrentImage((currentImage - 1 + newsList.length) % newsList.length);

  }

  const handleRight=()=>{
    setCurrentImage((currentImage + 1) % newsList.length);
  }

  

  return (
    <div className="news" ref={ref}>
      <Container>
      <div className="top">
        <div className="top-heading">Latest News</div>
        <p className="top-content"> Find the top <span> Insights & News </span></p>
      </div>
      </Container>

      <div className="news-bottom">
        <div className="news-card">

          <img className="vector-left" src={vectorLeft} onClick={handleLeft}/>
          <img className="vector-right" src={vectorRight} onClick={handleRight}/>

         <Container>

          <div className="cards">


          {newsList.slice(currentImage, currentImage + 3).map((image, index) => (

          <card className="card">
                  <p className="card-date">{image.icon}{image.date}</p>
                  <p className="card-detail">{image.detail}</p>
                  <img className="card-img" src={image.img}/>
                </card>
          ))

            }

          </div>
         </Container>


        </div>

        <div className="view-all">
          <button className="viewAll-news">View All News</button>
          <ImArrowUpRight2 className="icon"/>
        </div>

      </div>


    </div>
  )
}
)
export default News