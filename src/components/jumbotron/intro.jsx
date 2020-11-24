import React from 'react';

import SkewedContainer from 'sc-react';
import Slider from 'react-slick';
import Typing from 'react-typing-animation';

import { Grid, Typography } from '@material-ui/core';

import { images, skills } from '../../config/carousel';
import './intro.css';
import settings from './settings';

const Intro = () => (
	<SkewedContainer bottom="right" className="intro" noMargin>
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			style={{
				marginTop: '20vh',
				position: 'absolute',
				zIndex: 1000
			}}
		>
			<Grid item>
				<Typography
					variant="h2"
					style={{ color: 'white' }}
					component="div"
				>
					Hi, I'm Brandon Dring
					<br />
					Cloud Engineer, Beer, &amp; Coffee Drinker
					<br />I architect, build &amp; maintain:
					<Typing speed={50}>
						{skills.map((el, idx) => (
							<React.Fragment key={idx}>
								{el}
								<Typing.Delay ms={1000} />
								<Typing.Backspace count={el.length} />
								<Typing.Delay ms={250} />
							</React.Fragment>
						))}
					</Typing>
				</Typography>
			</Grid>
		</Grid>
		<Slider {...settings} className="intro-image hide-overflow-y">
			{images.map((el, idx) => (
				<img
					src={el}
					alt={el}
					key={idx}
					className="intro-image hide-overflow-y"
				/>
			))}
		</Slider>
	</SkewedContainer>
);

export default Intro;
