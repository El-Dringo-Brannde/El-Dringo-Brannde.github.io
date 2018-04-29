import React, { Component } from 'react';


import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


import Intro from './../components/jumbotron/intro'
import AboutMe from './../components/about/me'
import Resume from './../components/resume/resume'
import Portfolio from './../components/portfolio/portfolio'
import Foot from './../components/footer/footer'


const HomePage = () => {
   return (
      <div>
         <ParallaxProvider>
            <Parallax>
               <Intro></Intro>
            </Parallax>
            <Parallax >
               <AboutMe> </AboutMe>
            </Parallax>
            <Parallax>
               <Resume></Resume>
            </Parallax>
            <Parallax>
               <Portfolio></Portfolio>
            </Parallax>
            <Parallax>
               <Foot></Foot>
            </Parallax>
         </ParallaxProvider>
      </div>
   )
}

export default HomePage