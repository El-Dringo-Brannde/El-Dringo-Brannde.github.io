import React from 'react';

import NavBar from './components/nav/bar';

import './globals.css';

import HomePage from './pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Portfolio = () => (
	<React.Fragment>
		<NavBar />
		<HomePage />
	</React.Fragment>
);

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Portfolio} />
		</Switch>
	</BrowserRouter>
);
export default App;
