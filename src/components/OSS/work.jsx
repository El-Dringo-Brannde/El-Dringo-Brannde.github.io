import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const OSSContributions = () => (
	<React.Fragment>
		<SkewedContainer
			top="left"
			bottom="right"
			bgColor="#F44336"
			noMargin
			className="about-me"
		>
			<ScrollAnimation animateOnce animateIn="bounceInDown">
			<Grid container justify="center">
				<Typography
					variant="display2"
					className="center-text"
					component="div"
					>
					Open Source Contributions
				</Typography>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</Grid>
		</ScrollAnimation>
			<Card> Hello there</Card>
		</SkewedContainer>
	</React.Fragment>
)

export default OSSContributions;