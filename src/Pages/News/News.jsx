import React from "react";
import "./news.scss";
import { SlCalender } from "react-icons/sl"
import news1 from "../../Assets/image/news1.png.png"
import news2 from "../../Assets/image/news2.png.png"
import news3 from "../../Assets/image/news3.png.png"

const News=()=>{
   const newsCarousel=[{id:1,icon:<SlCalender/>, date:"5th January,2023",detail:"Three Ways Leaders Should\n" +
       "Pursue Breakthrough Innovation\n" +
       "During...", img:`${news1}`},
     {id:2,icon:<SlCalender/>,date:"5th January,2023",detail:"Three Ways Leaders Should\n" +
       "Pursue Breakthrough Innovation\n" +
       "During...", img:`${news2}`},
     {id:3,icon:<SlCalender/>, date:"5th January,2023" ,detail:"Three Ways Leaders Should\n" +
       "Pursue Breakthrough Innovation\n" +
       "During...", img:`${news3}`}]

  return(
    <div className="news">
      <div className="news-top">
        <div className="heading">Latest News</div>
        <p>Find the top <span> Insights & News </span></p>
      </div>

      <div className="news-bottom">
        {newsCarousel.map((n)=>{
          return(
            <card className="news-bottom-card">
              <p className="card-date">{n.icon}{n.date}</p>
              <p className="card-detail">{n.detail}</p>
              <img src={n.img}/>

            </card>
          )
        })}

      </div>

    </div>
  )
}
export default News