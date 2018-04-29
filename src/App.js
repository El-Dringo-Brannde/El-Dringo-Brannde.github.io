import React, { Component } from 'react';


import NavBar from './components/header/navbar'
import Intro from './components/intro/intro'
import AboutMe from './components/about/aboutMe'
import Resume from './components/resume/resume'
import Portfolio from './components/portfolio/portfolio'
import Foot from './components/footer/footer'

import './globals.css'
import 'mdbreact/dist/css/mdb.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



class App extends Component {
   render() {
      return (
         <div>
            <NavBar></NavBar>
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
      );
   }
}

export default App;
