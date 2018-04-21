import React, { Component } from 'react';
import Foot from './components/footer'
import Intro from './components/intro'
import AboutMe from './components/aboutMe'
import './App.css'
import { Parallax, ParallaxLayer } from 'react-spring'



class App extends Component {
   render() {
      return (
         <div >
            <Parallax pages={2} ref={ref => this.parallax = ref}>
               <ParallaxLayer offset={0} speed={0.2} className='margin-auto'>
                  <Intro></Intro>
               </ParallaxLayer>
               <ParallaxLayer offset={1} speed={0.5}>
                  <AboutMe> </AboutMe>
               </ParallaxLayer>

            </Parallax>
            <Foot></Foot>
         </div>
      );
   }
}

export default App;
