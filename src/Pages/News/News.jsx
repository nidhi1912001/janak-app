import React, { useState,useEffect } from "react";
import "./news.scss";
import { SlCalender } from "react-icons/sl"
import news1 from "../../Assets/image/news1.png.png"
import news2 from "../../Assets/image/news2.png.png"
import news3 from "../../Assets/image/news3.png.png"
import { ImArrowUpRight2 } from "react-icons/im"
import vectorLeft from "../../Assets/image/vector-left.png"
import vectorRight from "../../Assets/image/vector-right.png"
import Container from "../../Component/Container/Container";

const News = React.forwardRef((props, ref)  => {
  const newsList = [ {
    id: 1, icon: <SlCalender/>, date: "5th January,2023", detail: "111Three Ways Leaders Should\n" +
      "Pursue Breakthrough Innovation\n" +
      "During...", img: `${news1}`
  },
    {
      id: 2, icon: <SlCalender/>, date: "5th January,2023", detail: "2222Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 3, icon: <SlCalender/>, date: "5th January,2023", detail: "333Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news3}`
    },
    {id: 4, icon: <SlCalender/>, date: "5th January,2023", detail: "444Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation11\n" +
        "During...", img: `${news3}`},
    {id: 5, icon: <SlCalender/>, date: "5th January,2023", detail: "555Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation11\n" +
        "During...", img: `${news3}`},
    {
      id: 6, icon: <SlCalender/>, date: "5th January,2023", detail: "666Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 7, icon: <SlCalender/>, date: "5th January,2023", detail: "777Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 8, icon: <SlCalender/>, date: "5th January,2023", detail: "888Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    }
        ]

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

        <div className="viewAll">
          <button className="viewAll-news">View All News</button>
          <ImArrowUpRight2 className="icon"/>
        </div>

      </div>


    </div>
  )
}
)
export default News