import React, { Component } from 'react';
import Foot from './components/footer'
import Intro from './components/intro'
import './App.css'
import { Col, Container, Row, Footer } from 'mdbreact';
import { Parallax, ParallaxLayer } from 'react-spring'



class App extends Component {
   render() {
      return (
         <div style={{ width: '100%', wordWrap: 'break-word' }}>

            <Parallax pages={3}>
               <ParallaxLayer offset={0} speed={0.2}>
                  <Intro></Intro>
               </ParallaxLayer>
               <ParallaxLayer offset={1} speed={0.5}>
                  second Page
               </ParallaxLayer>
               <ParallaxLayer offset={2} speed={0.5}>
                  <Foot></Foot>
               </ParallaxLayer>
            </Parallax>



         </div>
      );
   }
}

export default App;
