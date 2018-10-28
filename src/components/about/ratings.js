import React from 'react';
import Rating from 'react-rating';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const SkillRating = props => (
	<React.Fragment>
		<Typography variant="body2"> {props.skill}</Typography>
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
	</React.Fragment>
);
export default SkillRating;
