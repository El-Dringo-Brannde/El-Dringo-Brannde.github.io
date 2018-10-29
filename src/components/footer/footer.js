import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ButtonPadding from './buttons';

import './footer.css';

const Foot = () => (
	<SkewedContainer
		top="right"
		bgColor="#E64A19"
		className="contact-me"
		noMargin
	>
		<Grid container justify="center">
			<ScrollAnimation animateOnce animateIn="bounceInDown">
				<Typography variant="display2" className="text-center">
					Contact Me
					</Typography>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</ScrollAnimation>
		</Grid>
		<Grid container justify="center" style={{ marginBottom: '5vh' }}>
			<Grid
				item
				lg={3}
				style={{ margin: '25px 35px', maxWidth: '70vw' }}
			>
				<ScrollAnimation animateOnce animateIn="bounceInLeft">
					<Typography
						variant="body2"
						style={{ fontSize: '1rem' }}
					>
						I'd love to answer any questions you may have about
						my availability, skills, any of the work I have
						done, or just to get to know me better.
						</Typography>
					<br />
					<Typography
						variant="body2"
						style={{ fontSize: '1rem' }}
					>
						Please feel free to contact me through any of the
						methods below, or take a look at some more work of
						mine as well, check back regularly because I'm
						always building or learning something cool.
						</Typography>

					<ButtonPadding>
						<i className="fas fa-phone fa-lg p-1" />
						541 510 5034
					</ButtonPadding>

					<ButtonPadding href="mailto:Brandondring31@gmail.com?Subject=Github%20Portfolio">
						<i className="fas fa-envelope fa-lg p-1" />
						Email
					</ButtonPadding>

					<ButtonPadding href="https://www.linkedin.com/in/brandon-dring/">
						<i className="fab fa-linkedin fa-lg p-1" />
						Linked In
					</ButtonPadding>

					<ButtonPadding href="https://github.com/El-Dringo-Brannde">
						<i className="fab fa-github fa-lg p-1" />
						Github
					</ButtonPadding>
				</ScrollAnimation>
			</Grid>
			<Grid
				item
				lg={3}
				style={{ margin: '25px 35px', maxWidth: '40vw' }}
			>
				<ScrollAnimation animateOnce animateIn="bounceInRight">
					<Card raised>
						<img
							src={
								process.env.PUBLIC_URL +
								'/DirtbikePhoto.jpg'
							}
							className="contact-photo"
						/>
					</Card>
				</ScrollAnimation>
			</Grid>
		</Grid>
		<footer style={{ background: '#00B0FF' }}>
			<Grid container justify="center">
				<Grid item>
					<div>Made with ❤️ in Portland by Brandon</div>
				</Grid>
			</Grid>
		</footer>
	</SkewedContainer>
);

export default Foot;
