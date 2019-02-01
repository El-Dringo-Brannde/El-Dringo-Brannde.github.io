import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import SkillRating from './ratings';
import Skills from '../../config/skills';
import bio from '../../config/bio';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const AboutMe = () => (
	<React.Fragment>
		<SkewedContainer
			top="left"
			bottom="left"
			bgColor="#F44336"
			noMargin
			className="about-me"
			style={{ marginBottom: 100 }}
		>
			<Grid container justify="center">
				<ScrollAnimation animateOnce animateIn="bounceInDown">
					<Typography variant="display2" className="text-center">
						About Me
					</Typography>
				</ScrollAnimation>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</Grid>
			<Grid container justify="center">
				<Grid item lg={3} style={{ margin: '25px 35px' }}>
					<ScrollAnimation animateOnce animateIn="bounceInLeft">
						<Card raised>
							<div className="image-container-fill" />
						</Card>
					</ScrollAnimation>
				</Grid>
				<Grid item xl={3} style={{ margin: 25 }}>
					<ScrollAnimation animateOnce animateIn="bounceInUp">
						<Typography
							variant="h4"
							className="center-text"
							style={{ marginTop: 0 }}
						>
							Skills
						</Typography>
						{Skills.map(skill => (
							<SkillRating
								key={skill.name}
								skill={skill.name}
								rating={skill.rating}
							/>
						))}
					</ScrollAnimation>
				</Grid>
				<Grid
					item
					lg={4}
					style={{ margin: '25px 35px', maxWidth: '80vw' }}
				>
					<ScrollAnimation animateOnce animateIn="bounceInRight">
						<Card raised>
							<CardContent>
								<Typography variant="headline">Hi.</Typography>
								<br />
								{bio.map((el, idx) => (
									<React.Fragment key={idx}>
										<Typography
											variant="body2"
											style={{
												fontSize: '1em',
												lineHeight: '1.15em'
											}}
										>
											{el}
										</Typography>
										<br />
									</React.Fragment>
								))}{' '}
								<br />
								<Typography variant="headline">
									Social.
								</Typography>
								<IconButton href="https://github.com/El-Dringo-Brannde">
									<i className="fab fa-github fa-lg" />
								</IconButton>
								<IconButton href="https://www.linkedin.com/in/brandon-dring/">
									<i className="fab fa-linkedin fa-lg" />
								</IconButton>
							</CardContent>
						</Card>
					</ScrollAnimation>
				</Grid>
			</Grid>
		</SkewedContainer>
	</React.Fragment>
);
export default AboutMe;
