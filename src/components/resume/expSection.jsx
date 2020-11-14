import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ExpSection = props => (
	<Grid container>
		<Grid item xs style={{ padding: 20, maxWidth: '50vw' }}>
			<Typography variant="h3">{props.title}</Typography>
			<Typography variant="body2" style={{ fontSize: '1em' }}>
				{' '}
				{props.description}
			</Typography>
		</Grid>
		<Grid item lg={2} style={{ padding: 20, maxWidth: '10vw' }}>
			<i className="fas fa-briefcase" />
			<Typography variant="body2" style={{ fontSize: '1em' }}>
				{props.company}
			</Typography>
			<br /> <br />
			<i className="far fa-clock" />
			<br />
			<Typography variant="body2" style={{ fontSize: '1em' }}>
				{props.start}
			</Typography>
			<br />-<br />
			<Typography variant="body2" style={{ fontSize: '1em' }}>
				{props.end}
			</Typography>
		</Grid>
	</Grid>
);

export default ExpSection;
