import React from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from './Button.styles';

const Button = ({ onClick, children, ...otherProps }) => (
	<ButtonComponent {...otherProps} onClick={onClick}>
		{children}
	</ButtonComponent>
);

Button.propTypes = {
	/**
	* The content of the button
	*/
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	/**
	* Function to be called on clicking the button
	*/
	onClick: PropTypes.func,
};

Button.description = `
	Vanilla button with options to extend upon it
`;

export default Button;
