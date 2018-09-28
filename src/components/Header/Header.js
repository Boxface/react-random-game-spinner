import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from './Header.styles';

const Header = ({ children }) => (
	<HeaderComponent>
		{children}
	</HeaderComponent>
);

Header.propTypes = {
	/**
	* The content of the Header
	*/
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.description = `
	The site header
`;

export default Header;
