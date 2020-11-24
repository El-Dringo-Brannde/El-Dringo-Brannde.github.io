import React from 'react';
import Rating from 'react-rating';

import { Divider, Typography } from '@material-ui/core';

const SkillRating = props => (
	<>
		<Typography variant="body2" className="center-text">
			{' '}
			{props.skill}
		</Typography>
		<Rating
			emptySymbol={
				<div
					style={{
						color: 'black',
						border: '1px solid',
						height: 8,
						width: 45,
						backgroundColor: 'lightgrey',
						margin: 8
					}}
				/>
			}
			fullSymbol={
				<div
					style={{
						color: 'black',
						border: '1px solid',
						height: 8,
						width: 45,
						backgroundColor: 'black',
						margin: 8
					}}
				/>
			}
			initialRating={props.rating}
			fractions={2}
			readonly
		/>
		<Divider />
	</>
);
export default SkillRating;
