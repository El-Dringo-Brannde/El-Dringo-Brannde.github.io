import React, { Component } from 'react';
import Foot from './components/footer'
import Intro from './components/intro'
import AboutMe from './components/aboutMe'
import './App.css'
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
            {/* <Foot></Foot> */}
         </ParallaxProvider>
      );
   }
}

export default App;
