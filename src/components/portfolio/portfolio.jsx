import React from 'react';
import SkewedContainer from 'sc-react';

import ScrollAnimation from 'react-animate-on-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import projects from '../../config/projects';
import PortfolioCards from './cards';

import './portfolio.css';

const Portfolio = () => (
	<SkewedContainer
		top="left"
		bgColor="#00B0FF"
		noMargin
		className="portfolio"
		style={{ paddingBottom: 100 }}
	>
		<ScrollAnimation animateOnce animateIn="bounceInUp">
			<Grid container justify="center">
				<Typography variant="display2" className="text-center">
					Portfolio
				</Typography>
				<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
			</Grid>
		</ScrollAnimation>
		<Grid container justify="center" style={{ marginBottom: '5vh' }}>
			{projects.map((element, idx) => {
				return (
					<PortfolioCards
						title={element.title}
						description={element.description}
						image={element.image}
						tech={element.tech}
						link={element.link}
						idx={idx}
						key={idx}
					/>
				);
			})}
		</Grid>
	</SkewedContainer>
);

export default Portfolio;
