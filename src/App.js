import React, { Component } from 'react';

import NavBar from './components/nav/bar'

import './globals.css'
import 'mdbreact/dist/css/mdb.css'

import HomePage from './pages/home'


class App extends Component {
   render() {
      return (
         <div>
            <NavBar></NavBar>
            <HomePage></HomePage>
         </div>
      );
   }
}

export default App;
