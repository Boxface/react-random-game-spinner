import React from 'react';

import SpinnerComponent, {SpinnerDialComponent} from './Spinner.styles';

const Spinner = ( {degrees} ) => (
	<SpinnerComponent>
	  <div className="Spinner-outer-wheel">
		<div className="Spinner-inner-wheel">
			<div className = "Spinner-outer-segment g1">
			  <div className = "Spinner-inner-segment">Rainbow Six Siege</div>
			</div>
			<div className = "Spinner-outer-segment g2">
			  <div className = "Spinner-inner-segment">Rocket League</div>
			</div>
			<div className = "Spinner-outer-segment g3">
			  <div className = "Spinner-inner-segment">Jackbox.tv</div>
			</div>
			<div className = "Spinner-outer-segment g4">
			  <div className = "Spinner-inner-segment">Golf With Your Friends</div>
			</div>
		</div>
		<SpinnerDialComponent degrees={degrees}></SpinnerDialComponent>
	  </div>
	</SpinnerComponent>
);

Spinner.description = `
	The spinner used to choose a game to play
`;

export default Spinner;
