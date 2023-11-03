import React, { useState } from "react";
import "./news.scss";
import { SlCalender } from "react-icons/sl"
import news1 from "../../Assets/image/news1.png.png"
import news2 from "../../Assets/image/news2.png.png"
import news3 from "../../Assets/image/news3.png.png"
import { ImArrowUpRight2 } from "react-icons/im"
import vectorLeft from "../../Assets/image/vector-left.png"
import vectorRight from "../../Assets/image/vector-right.png"
import Container from "../../Component/Container/Container";

const News = () => {
  const newsCarousel = [ {
    id: 1, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
      "Pursue Breakthrough Innovation\n" +
      "During...", img: `${news1}`
  },
    {
      id: 2, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 3, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news3}`
    },
    {id: 4, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation11\n" +
        "During...", img: `${news3}`}]

  const length = newsCarousel.length;
  const [currentNews,setCurrentNews] =useState(newsCarousel)


  const handleLeft=()=>{
    setCurrentNews(currentNews === 0 ? length - 1 : currentNews - 1)
  }
  const handleRight=()=>{
    setCurrentNews(currentNews === length - 1 ? 0 : currentNews + 1);

  }



  return (
    <div className="news">
      <div className="news-top">
        <div className="news-heading">Latest News</div>
        <p className="news-content"> Find the top <span> Insights & News </span></p>
      </div>

      <div className="news-bottom">
        <div className="news-card">
          <img className="vector" src={vectorLeft} onClick={handleLeft}/>

          <div className="cards">

            {newsCarousel.map( ( n ) => {
              return (
                <card className="card">
                  <p className="card-date">{n.icon}{n.date}</p>
                  <p className="card-detail">{n.detail}</p>
                  <img className="card-img" src={n.img}/>
                </card>
              )
            } )}
          </div>

          <img className="vector" src={vectorRight} onClick={handleRight}/>
        </div>

        <div className="viewAll">
          <p className="viewAll-news">View All News</p>
          <ImArrowUpRight2 className="icon"/>
        </div>

      </div>


    </div>
  )
}
export default News