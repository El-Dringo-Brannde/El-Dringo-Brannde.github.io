import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink
} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

import { scroller } from 'react-scroll';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false,
			dropdownOpen: false
		};
		this.onClick = this.onClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	onClick() {
		this.setState(prevState => {
			return { collapse: !prevState.collapse }
		});
	}

	toggle() {
		this.setState(prevState => {
		return {dropdownOpen: !prevState.dropdownOpen}
		});
	}

	render() {
		return (
			<Router>
				<Navbar
					light
					color="blue-grey lighten-5"
					expand="lg"
					fixed="top"
				>
					<NavbarBrand href="/">
						<strong>Brandon Dring</strong>
					</NavbarBrand>
					{!this.state.isWideEnough && (
						<NavbarToggler onClick={this.onClick} />
					)}
					<Collapse isOpen={this.state.collapse} navbar>
						<NavbarNav right>
							<NavItem color="blue-grey lighten-5">
								<NavLink
									to="#"
									className="nav-link"
									onClick={() =>
										scroller.scrollTo('about-me', {
											offset: -100,
											duration: 1000,
											smooth: 'easeInOutQuart'
										})
									}
								>
									About Me
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="#"
									onClick={() =>
										scroller.scrollTo('resume', {
											offset: -100,
											duration: 1000,
											smooth: 'easeInOutQuart'
										})
									}
								>
									Resume
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="#"
									onClick={() =>
										scroller.scrollTo('portfolio', {
											offset: -100,
											duration: 1000,
											smooth: 'easeInOutQuart'
										})
									}
								>
									Portfolio
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="#"
									onClick={() =>
										scroller.scrollTo('contact-me', {
											offset: -100,
											duration: 1000,
											smooth: 'easeInOutQuart'
										})
									}
								>
									Contact
								</NavLink>
							</NavItem>
						</NavbarNav>
					</Collapse>
				</Navbar>
			</Router>
		);
	}
}
