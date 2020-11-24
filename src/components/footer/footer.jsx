import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import { Card, Grid, Typography, Divider, Button } from '@material-ui/core';

import './footer.css';

const Foot = () => (
	<SkewedContainer
		top="left"
		bgColor="#E64A19"
		className="contact-me"
		noMargin
	>
		<ScrollAnimation animateOnce animateIn="bounceInDown">
			<Grid container justify="center">
				<Typography
					variant="h1"
					className="center-text"
					component="div"
				>
					Contact Me
				</Typography>
				<Divider
					style={{
						margin: '5vh 15vw',
						width: '70vw'
					}}
				/>
			</Grid>
		</ScrollAnimation>
		<Grid
			container
			justify="center"
			style={{
				marginBottom: '5vh'
			}}
		>
			<Grid
				item
				lg={3}
				style={{
					margin: '25px 35px',
					maxWidth: '70vw'
				}}
			>
				<ScrollAnimation animateOnce animateIn="bounceInLeft">
					<Typography
						variant="body2"
						style={{
							fontSize: '1rem'
						}}
					>
						I 'd love to answer any questions you may have about my
						availability, skills, any of the work I have done, or
						just to get to know me better.
					</Typography>
					<br />
					<Typography
						variant="body2"
						style={{
							fontSize: '1rem',
							marginBottom: 50
						}}
					>
						Please feel free to contact me through any of the
						methods below, or take a look at some more work of mine
						as well.
					</Typography>
					<Grid container justify="center">
						<Button href="mailto:Brandondring31@gmail.com?Subject=Github%20Portfolio">
							<i
								className="fas fa-envelope fa-lg "
								style={{
									marginRight: 5
								}}
							/>
							Email
						</Button>
						<Button href="https://www.linkedin.com/in/brandon-dring/">
							<i
								className="fab fa-linkedin fa-lg "
								style={{
									marginRight: 5
								}}
							/>
							Linked In
						</Button>
						<Button href="https://github.com/El-Dringo-Brannde">
							<i
								className="fab fa-github fa-lg "
								style={{
									marginRight: 5
								}}
							/>
							Github
						</Button>
					</Grid>
				</ScrollAnimation>
			</Grid>
			<Grid
				item
				lg={3}
				style={{
					margin: '25px 35px',
					maxWidth: '40vw'
				}}
			>
				<ScrollAnimation animateOnce animateIn="bounceInRight">
					<Card raised>
						<img
							src={process.env.PUBLIC_URL + '/DirtbikePhoto.jpg'}
							className="contact-photo"
						/>
					</Card>
				</ScrollAnimation>
			</Grid>
		</Grid>
		<footer
			style={{
				background: '#00B0FF'
			}}
		>
			<Grid container justify="center">
				<Grid item>
					<div> Made with ❤️ in Beaverton, Oregon.</div>
				</Grid>
			</Grid>
		</footer>
	</SkewedContainer>
);

export default Foot;
