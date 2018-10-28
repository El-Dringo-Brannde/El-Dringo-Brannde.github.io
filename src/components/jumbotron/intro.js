import React from 'react';

import SkewedContainer from 'sc-react';
import Slider from 'react-slick';

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
					<b className="is-visible">Websites. &nbsp;</b>
					<b>Mobile apps. &nbsp;</b>
					<b>Angular Apps. &nbsp;</b>
					<b>Electron Apps. &nbsp;</b>
					<b>Node.JS Servers. &nbsp;</b>
				</span>
			</div>
		</div>
		<Slider {...settings} className="intro-image hide-overflow-y">
			{/* Slide 1 */}
			<img
				src={process.env.PUBLIC_URL + '/Yosemite.jpg'}
				className="intro-image hide-overflow-y"
			/>
			{/* Slide 2 */}
			<img
				src={process.env.PUBLIC_URL + '/PacificOcean.jpg'}
				className="intro-image hide-overflow-y"
			/>
			{/* Slide 3*/}
			<img
				src={process.env.PUBLIC_URL + '/MtHood.jpg'}
				className="intro-image hide-overflow-y"
			/>
			{/* Slide 4*/}
			<img
				src={process.env.PUBLIC_URL + '/GrandCanyon.jpg'}
				className="intro-image hide-overflow-y"
			/>
		</Slider>
	</SkewedContainer>
);

export default Intro;
