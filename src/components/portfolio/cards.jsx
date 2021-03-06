import React from 'react';

import { Card, CardContent, CardMedia, Grid, Typography, Divider, Button } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

let anime = ['Left', 'Up', 'Right', 'Left', 'Up', 'Right'];

class PortfolioCards extends React.Component {
	state = {
		checked: false
	};
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.navigateAway = this.navigateAway.bind(this);
	}

	handleChange() {
		this.setState({ checked: !this.state.checked });
	}

	navigateAway() {
		window.location.href = this.props.link;
	}

	render() {
		return (
			<Grid
				item
				lg={3}
				style={{
					margin: '50px 35px',
					minHeight: '30vh',
					height: '50vh',
					width: '70vw'
				}}
			>
				<ScrollAnimation
					animateOnce
					animateIn={`bounceIn${anime[this.props.idx]}`}
				>
					<div className="portfolio-item">
						<Card
							style={{
								maxHeight: '100%',
								maxWidth: '100%',
								cursor: 'pointer'
							}}
							raised={this.state.checked}
							className="portfolio-item-preview"
							onClick={this.navigateAway}
							onMouseEnter={this.handleChange}
							onMouseLeave={this.handleChange}
						>
							<CardMedia
								image={
									process.env.PUBLIC_URL + this.props.image
								}
								style={{
									paddingTop: '25%',
									backgroundSize: 'contain',
									maxHeight: '15vh'
								}}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{this.props.title}
								</Typography>
								<Typography
									gutterBottom
									variant="body2"
									component="h2"
									style={{ fontSize: '1em' }}
								>
									{this.props.description}
								</Typography>
								<Typography
									variant="body2"
									component="div"
									style={{ background: '#edeae1' }}
									className="portfolio-item-description"
								>
									Tech Used.
									<Divider
										component="div"
										style={{ marginBottom: '5px' }}
									/>
									{this.props.tech.map((el, idx) => (
										<i
											key={el}
											className={el}
											style={{
												fontSize: '3.2rem',
												margin: '0px 5px'
											}}
										/>
									))}
									<Button href={this.props.link}>
										<i className="fab fa-github fa-lg" />
										&nbsp;View on Github
									</Button>
								</Typography>
							</CardContent>
						</Card>
					</div>
				</ScrollAnimation>
			</Grid>
		);
	}
}

export default PortfolioCards;
