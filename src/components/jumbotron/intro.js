import React from 'react';

import SkewedContainer from 'sc-react';
import Slider from 'react-slick';
import { images, skills } from './carousel';

import './intro.css';

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 8000,
	speed: 2000,
	pauseOnHover: false
};

const Intro = () => (
	<SkewedContainer bottom="right" className="intro" noMargin>
		<div
			className="center-text overlay-div thick-characters hack-headline"
			style={{ margin: '75px' }}
		>
			<div
				className="cd-headline letters type"
				style={{ maxWidth: '80vw' }}
			>
				<span>Hi, I'm Brandon. </span>
				<br />
				<span>
					Coder, Beer, & Coffee Drinker &nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;
					</span>
				<br />
				<span>I design & build </span>
				<span className="cd-words-wrapper waiting">
					{
						skills.map(el => el)
					}
				</span>
			</div>
		</div>
		<Slider {...settings} className="intro-image hide-overflow-y">
			{
				images.map((el, idx) => (
					<img
						src={el}
						alt={el}
						key={idx}
						className="intro-image hide-overflow-y"
					/>
				))
			}
		</Slider>
	</SkewedContainer>
);

export default Intro;
