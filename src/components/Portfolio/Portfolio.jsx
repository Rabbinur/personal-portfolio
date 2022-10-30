import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import skilify from "../../img/E-learnig website.png";
import Ecommerce from "../../img/ema-jhon.png";
import exercise from "../../img/exercise-club.png";
import AlQuran from "../../img/al-quran.png";
import quiz from "../../img/quiz-hacks.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={skilify} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AlQuran} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={exercise} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quiz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={exercise} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
