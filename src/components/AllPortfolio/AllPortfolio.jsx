import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllPortfolio.css";
import carWash from '../../img/car-wash-services.png';
import skilify from "../../img/E-learnig website.png";
import emajhon from "../../img/ema-jhon.png";
import exercise from "../../img/exercise-club.png";
import AlQuran from "../../img/al-quran.png";
import quiz from "../../img/quiz-hacks.png";
import panda from "../../img/panda ecommerce.png"
import proedu from "../../img/pro-edu.png"
import typetest from "../../img/typing test.png"
import shoppers from "../../img/shoppers.png"
import gorgo from "../../img/gorgo.png"
import quick from "../../img/quick.png"
import influncer from "../../img/inflencer.png"
import donate from "../../img/donate.png"
import lucid from "../../img/lucid.png"
import strict from "../../img/strict.png"
import sstech from "../../img/sstech.png"
import shikbo from "../../img/shikbo amra.png"
import portfolio from "../../img/porfolio.png"
import { themeContext } from "../../Context";
import { useContext } from 'react';
import { useState } from 'react';
// import data from '../AllPortfolio/data'
// import data from './data'
const data={
  cardData:[
    {
        id:0,
        img:carWash,
        link:'https://car-wash-services.netlify.app/#slide2',
        desc:'desc 0'
    },
      {
          id:1,
          img:sstech,
          link:'https://rabbinur.github.io/sstech/',
          desc:'desc 1'
      },
      {
          id:2,
          img:shoppers,
          link:'https://rabbinur.github.io/shoppers/',
          desc:'desc 2'
      },
      {
          id:3,
          img:skilify,
          link:'https://skilify-e-learning.netlify.app',
          desc:'desc 3'
      },
      {
          id:4,
          img:strict,
          link:'https://rabbinur.github.io/strict/',
          desc:'desc 4'
      },
      {
          id:5,
          img:lucid,
          link:'https://rabbinur.github.io/Lucid/',
          desc:'desc 5'
      },
      {
          id:6,
          img:shikbo,
          link:'https://rabbinur.github.io/ShikbeAmra/',
          desc:'desc 6'
      },
      {
          id:7,
          img:gorgo,
          link:'https://rabbinur.github.io/Gorgo/',
          desc:'desc 7'
      },
      {
          id:8,
          img:portfolio,
          link:'rabbinur-muktar-portfolio.netlify.app/',
          desc:'desc 8'
      },
      {
          id:9,
          img:typetest,
          link:'https://typing-test-w.netlify.app',
          desc:'desc 9'
      },
      {
          id:10,
          img:quiz,
          link:'https://quiz-hacks.netlify.app/',
          desc:'desc 10'
      },
      {
          id:11,
          img:panda,
          link:'https://rabbinur.github.io/pandaEcommerceWebsite/',
          desc:'desc 11'
      },
      {
          id:12,
          img:donate,
          link:'https://rabbinur.github.io/donate-today/',
          desc:'desc 12'
      },
      {
          id:13,
          img:quick,
          link:"https://rabbinur.github.io/Quick/",
          desc:'desc 13'
      },
      {
          id:14,
          img:panda,
          desc:'desc 14'
      },
      {
          id:15,
          img:AlQuran,
          link:'https://rabbinur.github.io/Quran-hadith/',
          desc:'desc 15'
      },
      {
          id:16,
          img:proedu,
          link:'https://rabbinur.github.io/influencer-gear/',
          desc:'desc 16'
      },
      {
          id:17,
          img:exercise,
          link:'https://exercise-schedule.netlify.app',
          desc:'desc 17'
      },
      {
          id:18,
          img:emajhon,
          link:'https://ema-jhon-simple-1b78a.web.app/',
          desc:'desc 18'
      },
      {
          id:19,
          img:typetest,
          link:'https://typing-test-w.netlify.app',
          desc:'desc 19'
      },
      {
          id:20,
          img:influncer,
          link:"https://rabbinur.github.io/influencer-gear/",
        
          desc:'desc 20'
      },
  ]
}
const AllPortfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const[noOfELement,setNoOfElement]=useState(6)
  const loadMore=()=>{
setNoOfElement(noOfELement+noOfELement)
console.log('click')
  }
const slice=data.cardData.slice(0,noOfELement)
     return (


    //     <div className="Allportfolio"  id="portfolio">

    //     {/* heading */}
    //     <span  style={{color: darkMode?'white': ''}}>All Projects</span>
    //         <span >Portfolio</span>

    //       <div className='gap-portfolio'>
    //       <span className='gap' ><a href="https://rabbinur.github.io/strict/" target="_blank" rel="noopener noreferrer"><img src={strict} alt="" /></a></span>
    //       <span className='gap'><a href="https://rabbinur.github.io/sstech/" target="_blank" rel="noopener noreferrer"><img src={sstech} alt="" /></a></span>
    //       <span className='gap'><a href="https://rabbinur.github.io/shoppers/" target="_blank" rel="noopener noreferrer">
    //         <img src={shoppers} alt="" /></a></span>
    //     <span className='gap'>  <a href="https://rabbinur.github.io/ShikbeAmra/" target="_blank" rel="noopener noreferrer">
    //         <img src={shikbo} alt="" /></a></span>
    //       <span className='gap'><a href="https://rabbinur.github.io/Lucid/" target="_blank" rel="noopener noreferrer">
    //         <img src={lucid} alt="" /></a></span>
    //      <span className='gap'> <a href="https://rabbinur.github.io/donate-today/" target="_blank" rel="noopener noreferrer">
    //         <img src={donate} alt="" /></a></span>
    //      <span className='gap'> <a href="https://rabbinur.github.io/influencer-gear/" target="_blank" rel="noopener noreferrer">
    //         <img src={influncer} alt="" /></a></span>
    //      <span className='gap'>
    //      <a  href="https://edtech-2022.netlify.app/" target="_blank" rel="noopener noreferrer">
    //         <img src={proedu} alt="" /></a>
    //      </span>
          
    //     <span className='gap'>  <a href="https://rabbinur.github.io/Gorgo/" target="_blank" rel="noopener noreferrer">
    //         <img src={gorgo} alt="" /></a></span>
    //       <span className='gap'>
    //       <a href="https://rabbinur.github.io/Quick/" target="_blank" rel="noopener noreferrer">
    //         <img src={quick} alt="" /></a>
    //       </span>
    //       </div>
    //       <button className='btn btn-outline-primary'>Load More</button>
    
    //   </div>
   
    <section className="Allportfolio"  id="portfolio">
     {/* heading */}
     <span  style={{color: darkMode?'white': ''}}>All Projects</span>
            <span >Portfolio</span>
    <div className='row justify-content-center mt-5'>
             {/* //here data.cardData is replace by slice cause show few data */}
             {slice.map((item,index)=>{
                    return(
                        <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4' key={index}>
                        <div >
                          <a href={item.link} target="_blank" ><img src={item.img} alt="" className='card-img-top' /></a>
                             <div className='card-body'>
                                    <h5 className='card-title'>{}</h5>
                                  <p className='card-text'></p>
                              </div>
    
                         </div>
    
                    </div>
                    )
                
                })}
          </div>
          <button onClick={()=>loadMore()} className='button i-button '>More</button>

         </section>
             
 
       
    );

};

export default AllPortfolio;