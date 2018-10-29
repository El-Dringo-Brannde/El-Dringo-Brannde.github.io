import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonPadding = ({ children }) => (
	<React.Fragment>
		<Button style={{ marginTop: 20 }}>{children}</Button>
		<br />
	</React.Fragment>
);

export default ButtonPadding;
