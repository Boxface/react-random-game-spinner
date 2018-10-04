import React from 'react';
import PropTypes from 'prop-types';

import ContainerComponent, {ContainerInner} from './Container.styles';

const Container = ({ children }) => (
	<ContainerComponent>
		<ContainerInner>
			{children}
		</ContainerInner>
	</ContainerComponent>
);

Container.propTypes = {
	/**
	* The content of the Container
	*/
	children: PropTypes.oneOfType([PropTypes.node]),
};

Container.description = `
	Container to surround individual components
`;

export default Container;
