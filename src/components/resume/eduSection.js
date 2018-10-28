import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const EduSection = props => {
	return (
		<Grid container>
			<Grid item xs style={{ padding: 20, maxWidth: '50vw' }}>
				<Typography variant="headline">{props.title}</Typography>
				<br />
				<Typography variant="body2" style={{ fontSize: '1em' }}>
					<i>
						{' '}
						<strong>Summary - </strong>{' '}
					</i>
					{props.description}
				</Typography>
				<br />
				<br />

				<Typography variant="body2" style={{ fontSize: '1em' }}>
					<i>
						<strong>Academics - </strong>
					</i>
					{props.academics}
				</Typography>
				<br />
				<br />
				<Typography variant="body2" style={{ fontSize: '1em' }}>
					<i>
						<strong>Awards - </strong>
					</i>
					{props.awards}
				</Typography>

				<br />
				<br />
				<Typography variant="body2" style={{ fontSize: '1em' }}>
					<i>
						{' '}
						<strong>Activities -</strong>{' '}
					</i>
					{props.activities}
				</Typography>
			</Grid>
			<Grid item lg={2} style={{ padding: 20, maxWidth: '10vw' }}>
				<i className="fas fa-briefcase" />
				<Typography variant="body2" style={{ fontSize: '1em' }}>
					<div>{props.company}</div>
					<br /> <br />
				</Typography>
				<i className="far fa-clock" />
				<br />
				<Typography variant="body2" style={{ fontSize: '1em' }}>
					{props.start}
					<br />-<br />
					{props.end}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default EduSection;
