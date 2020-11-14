import React from 'react';
import SkewedContainer from 'sc-react';

import ExpSection from './expSection';
import EduSection from './eduSection';
import jobExp from '../../config/jobExp';
import eduExp from '../../config/eduExp';

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';

const Resume = () => (
	<SkewedContainer
		top="right"
		bottom="right"
		bgColor="white"
		className="resume"
		noMargin
	>
		<Grid container justify="center">
			<ScrollAnimation animateOnce animateIn="bounceInDown">
				<Typography
					variant="h1"
					className="text-center"
					component="div"
				>
					R&#233;sum&#233;
				</Typography>
			</ScrollAnimation>
		</Grid>
		<Grid container justify="center">
			<ScrollAnimation animateOnce animateIn="bounceInDown">
				<Button
					variant="text"
					href="https://github.com/El-Dringo-Brannde/Resume/blob/master/Resume.pdf"
				>
					<Icon>get_app</Icon>
					Download
				</Button>
			</ScrollAnimation>
		</Grid>
		<Divider style={{ margin: '5vh 15vw', width: '70vw' }} />
		<Grid container justify="center">
			<Grid item lg={2} style={{ padding: 20 }}>
				<ScrollAnimation animateOnce animateIn="bounceInLeft">
					<Typography variant="display1">Experience</Typography>
				</ScrollAnimation>
			</Grid>
			<Grid item lg={8} style={{ padding: 20 }}>
				<ScrollAnimation animateOnce animateIn="bounceInRight">
					{jobExp.map(job => (
						<ExpSection
							key={job.start}
							title={job.title}
							iconType="work"
							description={job.description
								.split('\n')
								.map((i, idx) => (
									<p key={idx}>
										{i}
										<br />
									</p>
								))}
							company={job.company}
							start={job.start}
							end={job.end}
						/>
					))}
					<Divider />
				</ScrollAnimation>
			</Grid>
		</Grid>
		<Grid container justify="center">
			<Grid item lg={2} style={{ padding: 20 }}>
				<ScrollAnimation animateOnce animateIn="bounceInLeft">
					<Typography variant="display1">Education</Typography>
				</ScrollAnimation>
			</Grid>
			<Grid item lg={8} style={{ padding: 20 }}>
				<ScrollAnimation animateOnce animateIn="bounceInRight">
					{eduExp.map(school => (
						<EduSection
							key={school.start}
							title={school.title}
							description={school.description
								.split('\n')
								.map((i, idx) => {
									return <span key={idx}>{i}</span>;
								})}
							academics={school.academics}
							company={school.name}
							awards={school.awards}
							activities={school.activities}
							start={school.start}
							end={school.end}
						/>
					))}
				</ScrollAnimation>
			</Grid>
		</Grid>
		<br />
		<br />
		<br />
		<br />
		<br />
	</SkewedContainer>
);

export default Resume;
