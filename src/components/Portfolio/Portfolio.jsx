import React, { useContext } from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import skilify from "../../img/E-learnig website.png";
import Ecommerce from "../../img/ema-jhon.png";
import exercise from "../../img/exercise-club.png";
import AlQuran from "../../img/al-quran.png";
import quiz from "../../img/quiz-hacks.png";
import carWash from '../../img/car-wash-services.png'
import { themeContext } from "../../Context";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <main >
      <div className="portfolio" id="portfolio">

        {/* heading */}
        <span span style={{color: darkMode?'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>

           {/* slider */}
      <Swiper
       // install Swiper modules
       
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://car-wash-services.netlify.app/#slide2" target="_blank"><img src={carWash} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://skilify-e-learning.web.app/" target="_blank"><img src={skilify} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ema-jhon-simple-1b78a.web.app/" target="_blank" rel="noopener noreferrer">   <img src={Ecommerce} alt="" /></a>
       
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://quran-hadith.netlify.app" target="_blank"> <img src={AlQuran} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://exercise-schedule.netlify.app" target='_blank'> <img src={exercise} alt="" /></a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://quiz-hacks.netlify.app/" target="_blank"> <img src={quiz} alt="" /></a>
         
        </SwiperSlide>
        
      </Swiper>
      </div>
     
      
    </main>
  );
};

export default Portfolio;
