import React from 'react';
import Rating from 'react-rating';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class SkillRating extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ margin: 5 }}>
				<Typography variant="body2"> {this.props.skill}</Typography>
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
					initialRating={this.props.rating}
					fractions={2}
					readonly
				/>
				<Divider />
			</div>
		);
	}
}
export default SkillRating;
