import React from 'react';

import SpinnerComponent, {SpinnerOuterWheel, SpinnerInnerWheel, SpinnerWedge, SpinnerInnerWedge, SpinnerDial } from './Spinner.styles';

const Spinner = ( {degrees} ) => (
	<SpinnerComponent>
		<SpinnerOuterWheel>
			<SpinnerInnerWheel>
				<SpinnerWedge>
					<SpinnerInnerWedge>Rainbow Six Siege</SpinnerInnerWedge>
				</SpinnerWedge>
				<SpinnerWedge>
					<SpinnerInnerWedge>Rocket League</SpinnerInnerWedge>
				</SpinnerWedge>
				<SpinnerWedge>
					<SpinnerInnerWedge>Jackbox TV</SpinnerInnerWedge>
				</SpinnerWedge>
				<SpinnerWedge>
					<SpinnerInnerWedge>Golf With Friends</SpinnerInnerWedge>
				</SpinnerWedge>
			</SpinnerInnerWheel>
			<SpinnerDial degrees={degrees}></SpinnerDial>
		</SpinnerOuterWheel>
	</SpinnerComponent>
);

Spinner.description = `
	The spinner used to choose a game to play
`;

export default Spinner;
