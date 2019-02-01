import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import contributions from './contributions';

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
				<Typography variant="display2" className="text-center">
					Open Source Contributions
				</Typography>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</Grid>
		</ScrollAnimation>

		<Grid container justify="center">
			{contributions.map((contribution, idx) => (
				<ScrollAnimation animateOnce animateIn={contribution.bounce}>
					<Grid item style={{ margin: 15 }} key={idx}>
						<Card style={{ maxWidth: '30vh' }}>
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
