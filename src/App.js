import React, { Component } from 'react';
import Foot from './components/footer/footer'
import Intro from './components/intro/intro'
import AboutMe from './components/about/aboutMe'
import Resume from './components/resume/resume'
import './globals.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



class App extends Component {
   render() {
      return (
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
               <Foot></Foot>
            </Parallax>
         </ParallaxProvider>

      );
   }
}

export default App;
