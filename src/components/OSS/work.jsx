import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import { Button, Card, CardContent, CardActions, Grid, Divider, Typography } from '@material-ui/core';

import contributions from '../../config/contributions';

const OSSContributions = () => (
	<SkewedContainer
		top="right"
		bgColor="#009688"
		noMargin
		className="portfolio"
		style={{ paddingBottom: 100 }}
	>
		<ScrollAnimation animateOnce animateIn="bounceInUp">
			<Grid container justify="center">
				<Typography variant="h3" className="text-center">
					Open Source Contributions
				</Typography>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</Grid>
		</ScrollAnimation>

		<Grid container justify="center">
			{contributions.map((contribution, idx) => (
				<ScrollAnimation
					animateOnce
					animateIn={contribution.bounce}
					key={idx}
				>
					<Grid item style={{ margin: 15 }} key={idx}>
						<Card style={{ maxWidth: '30vh' }} raised={true}>
							<CardContent>
								<Typography variant="h5">
									{contribution.project}
								</Typography>
								<Typography variant="body1">
									{contribution.author}
								</Typography>
								<Divider style={{ margin: 10 }} />
								<Typography>
									{contribution.description}
								</Typography>
							</CardContent>
							<CardActions>
								<Grid container justify="center">
									<Button
										onClick={() =>
											window.open(
												contribution.link,
												'_blank'
											)
										}
										size="small"
									>
										View on Github
									</Button>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
				</ScrollAnimation>
			))}
		</Grid>
	</SkewedContainer>
);

export default OSSContributions;
