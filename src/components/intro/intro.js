import React from 'react';
import SkewedContainer from 'sc-react'
import './intro.css'
import Slider from 'react-slick'
import Grid from 'material-ui/Grid';

const settings = {
   dots: false,
   arrows: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 8000,
   speed: 2000,
   pauseOnHover: false
}


const Intro = () => {
   return (
      <SkewedContainer
         className='full-screen'
         bottom='right'
         noMargin>
         <div className=' margin-25 center-text overlay-div thick-characters hack-headline'>
            <div className="cd-headline letters type">
               <span>Hi, I'm Brandon. </span>
               <br />
               <span>Professional Coder. Amateur Beer, & Coffee Drinker</span>
               <br />
               <span>I design & build </span>
               <span className="cd-words-wrapper waiting">
                  <b className="is-visible">Full Stack Websites. &nbsp;</b>
                  <b>Mobile apps. &nbsp;</b>
                  <b>Angular Apps. &nbsp;</b>
                  <b>Electron Apps. &nbsp;</b>
                  <b>Node.JS Servers. &nbsp;</b>
                  <b>Python Automation Scripts. &nbsp;</b>
               </span>
            </div>
         </div>
         <Slider {...settings} className='full-screen hide-overflow-y'>
            {/* Slide 1 */}
            <img src='https://i.imgur.com/KVg0kyA.jpg' className='full-screen hide-overflow-y' />
            {/* Slide 2 */}
            <img src='https://i.imgur.com/b2zJh4o.jpg' className='full-screen hide-overflow-y' />
            {/* Slide 3*/}
            <img src='https://i.imgur.com/RPx8g53.jpg' className='full-screen hide-overflow-y' />
         </Slider>
      </SkewedContainer>
   );
}


export default Intro;