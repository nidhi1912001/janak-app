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

const News = () => {
  const newsList = [ {
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
        "During...", img: `${news3}`},
    {id: 5, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation11\n" +
        "During...", img: `${news3}`},
    {
      id: 6, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 7, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    },
    {
      id: 8, icon: <SlCalender/>, date: "5th January,2023", detail: "Three Ways Leaders Should\n" +
        "Pursue Breakthrough Innovation\n" +
        "During...", img: `${news2}`
    }
        ]

let box=document.querySelector(".cards");

  console.log(box.scrollLeft,"boxx")

  const slideWidth = 30;
  const length = newsList.length;
  console.log(newsList.length,"uparrrrr")
  // newsList.push(...newsList);


  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };



  const createItem = (position, idx) => {
    const item = {
      styles: {
        transform: `translateX(${position * slideWidth}rem)`,
      },
      player: newsList[idx],
    };

    // switch (position) {
    //   case length - 1:
    //   case length + 1:
    //     item.styles = {...item.styles, filter: 'grayscale(1)'};
    //     break;
    //   case length:
    //     break;
    //   default:
    //     item.styles = {...item.styles, opacity: 0};
    //     break;
    // }

      return item;
  };




  const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);


    return (
      <li className="carousel__slide-item" style={item.styles}>
        <card className="card">
              <p className="card-date">{item.player.icon}{item.player.date}</p>
              <p className="card-detail">{item.player.detail}</p>
              <img className="card-img" src={item.player.img}/>
        </card>
      </li>


    );
  };


  const keys = Array.from(Array(newsList.length).keys());
  console.log(Array.from(Array(newsList.length)),"arraylist")
  // const [currentNews,setCurrentNews] =useState(newsCarousel)
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] =useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;


  const handleLeft=(jump = 1)=>{
    let widthOne=box.clientWidth;
    box.scrollLeft=box.scrollLeft - widthOne

    // if (!isTicking) {
    //   setIsTicking(true);
    //   setItems((prev) => {
    //     return prev.map((_, i) => prev[(i + jump) % bigLength]);
    //   });
    // }


  }
  const handleRight=(jump = 1)=>{
    let widthOne=box.clientWidth;
    console.log(widthOne,"widthone")
    box.scrollLeft=box.scrollLeft + widthOne
    console.log(box.scrollLeft - widthOne,"scrollLeft")
    // if (!isTicking) {
    //   setIsTicking(true);
    //   setItems((prev) => {
    //     return prev.map(
    //       (_, i) => prev[(i - jump + bigLength) % bigLength],
    //     );
    //   });
    // }

  }

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);




  return (
    <div className="news">
      <div className="news-top">
        <div className="news-heading">Latest News</div>
        <p className="news-content"> Find the top <span> Insights & News </span></p>
      </div>

      <div className="news-bottom">
        <div className="news-card">
          <button className="vector-left" src={vectorLeft} onClick={handleLeft}><p>&lt;</p></button>
          <button className="vector-right" src={vectorRight} onClick={handleRight}> <p>&gt;</p></button>

          <div className="cards">


            {newsList.map( (n ) => {
              return (
                <card className="card">
                  <p className="card-date">{n.icon}{n.date}</p>
                  <p className="card-detail">{n.detail}</p>
                  <img className="card-img" src={n.img}/>
                </card>
               )
              // return(
              // <CarouselSlideItem
              //   key={i}
              //   idx={i}
              //   pos={pos}
              //   activeIdx={activeIdx}
              // />

            } )}

          </div>


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