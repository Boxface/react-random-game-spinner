import styled from 'styled-components';

const SpinnerComponent = styled.div`

	.Spinner-outer-wheel {
	  border: 1px solid black;
	  border-radius: 50%;
	  height: 300px;
	  position: relative;
	  overflow: hidden;
	  width: 300px;
	}

	.Spinner-inner-wheel {
	  height: 100%;
	  width: 100%;
	}

	.Spinner-outer-segment {
	  height: 50%;
	  position: absolute;
	  right: 0;
	  top: 0;
	  width: 50%;
	  transform-origin: 0% 100%;
	}

	.Spinner-inner-segment {
	  font-size: 0.7em;
	  position: absolute;
	  height: 200%;
	  left: -100%;
	  padding-top: 25px;
	  text-align: center;
	  transform: skewY(0) rotate(45deg);
	  width: 200%;
	}

	.Spinner-outer-segment:first-child {
	  transform: rotate(0deg) skewY(0);
	}

	.Spinner-outer-segment:nth-child(2) {
	  transform: rotate(90deg) skewY(0);
	}

	.Spinner-outer-segment:nth-child(3) {
	  transform: rotate(180deg) skewY(0);
	}

	.Spinner-outer-segment:nth-child(4) {
	  transform: rotate(270deg) skewY(0);
	}

	.g1 {
	  background-color: #00a8b5;
	}

	.g2 {
	  background-color: #774898;
	}

	.g3 {
	  background-color: #e62a76;
	}

	.g4 {
	  background-color: #fbb901;
	}

`;

export const SpinnerDialComponent = styled.div`
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 50px solid white;
	color: black;
	height: 0;
	position: absolute;
	left: 125px;
	top: 100px;
	transform: rotate(${props => props.degrees}deg);
	transform-origin: bottom center;
	transition: all 6s ease;
	width: 0;
	z-index: 2;
`;

export default SpinnerComponent;
