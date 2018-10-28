import React, { Component } from 'react';

import NavBar from './components/nav/bar';

import './globals.css';
import 'mdbreact/dist/css/mdb.css';

import HomePage from './pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Portfolio = () => (
	<div>
		<NavBar />
		<HomePage />
	</div>
);

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Portfolio} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
