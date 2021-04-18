import React from 'react';

import NavBar from './components/nav/bar';

import './globals.css';

import HomePage from './pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Portfolio = () => (
	<>
		<NavBar />
		<HomePage />
	</>
);

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Portfolio} />
		</Switch>
	</BrowserRouter>
);
export default App;
