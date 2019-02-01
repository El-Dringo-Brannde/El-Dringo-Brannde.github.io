import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { scroller } from 'react-scroll';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { withStyles } from '@material-ui/core/styles';

import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
	root: {
		width: '100%'
	},
	grow: {
		flexGrow: 1
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	}
});

class PrimarySearchAppBar extends React.Component {
	state = {
		mobileMoreAnchorEl: null
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	render() {
		const { mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton
						color="inherit"
						onClick={() =>
							scroller.scrollTo('about-me', {
								offset: -100,
								duration: 1000,
								smooth: 'easeInOutQuart'
							})
						}
					>
						About Me
					</IconButton>
				</MenuItem>
				<MenuItem>
					<IconButton
						color="inherit"
						onClick={() =>
							scroller.scrollTo('resume', {
								offset: -100,
								duration: 1000,
								smooth: 'easeInOutQuart'
							})
						}
					>
						Resume
					</IconButton>
				</MenuItem>
				<MenuItem>
					<Typography
						variant="h5"
						onClick={() =>
							scroller.scrollTo('portfolio', {
								offset: -100,
								duration: 1000,
								smooth: 'easeInOutQuart'
							})
						}
					>
						Portfolio
					</Typography>
				</MenuItem>
			</Menu>
		);

		return (
			<div className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>
						<Typography
							className={classes.title}
							variant="h6"
							color="inherit"
							noWrap
						>
							Brandon Dring
						</Typography>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton
								color="inherit"
								onClick={() =>
									scroller.scrollTo('about-me', {
										offset: -100,
										duration: 1000,
										smooth: 'easeInOutQuart'
									})
								}
							>
								About Me
							</IconButton>
							<IconButton
								color="inherit"
								onClick={() =>
									scroller.scrollTo('resume', {
										offset: -100,
										duration: 1000,
										smooth: 'easeInOutQuart'
									})
								}
							>
								Resume
							</IconButton>
							<IconButton
								color="inherit"
								onClick={() =>
									scroller.scrollTo('portfolio', {
										offset: -100,
										duration: 1000,
										smooth: 'easeInOutQuart'
									})
								}
							>
								Portfolio
							</IconButton>
							<IconButton
								color="inherit"
								onClick={() =>
									scroller.scrollTo('contact-me', {
										offset: -100,
										duration: 1000,
										smooth: 'easeInOutQuart'
									})
								}
							>
								Contact Me
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-haspopup="true"
								onClick={this.handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
			</div>
		);
	}
}

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
