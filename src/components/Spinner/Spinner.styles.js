import styled, { keyframes } from 'styled-components';

const SpinnerComponent = styled.div`
	display: block;
	padding-top: 100%;
	position: relative;
`;

export const SpinnerOuterWheel = styled.div`
	border: 1px solid black;
	border-radius: 50%;
	height: 100%;
	left: 0;
	position: absolute;
	overflow: hidden;
	top: 0;
	width: 100%;

	&:after {
		box-shadow: inset 0px 0px 10px 6px rgba(0,0,0,0.3);
		border-radius: 50%;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		overflow: hidden;
		top: 0;
		width: 100%;
		z-index: 50;
	}
`;

const blur = keyframes`
	0% {
		filter: blur(0px);
	}
	20% {
		filter: blur(7px);
	}
	50% {
		filter: blur(10px);
	}
	70% {
		filter: blur(3px);
	}
	100% {
		filter: blur(0px);
	}
`;

export const SpinnerInnerWheel = styled.div`
	${props => props.spinnerActive && `
		animation: ${blur} 6s linear infinite;
	`}
	height: 100%;
	position: relative;
	width: 100%;
	transform: rotate(${props => props.degrees}deg);
	transform-origin: center center;
	transition: all 6s ease;
`;

export const SpinnerWedge = styled.div`
	box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3), 0px 0px 10px 6px rgba(0,0,0,0.3) inset, 0px 0px 15px 10px rgba(0,0,0,0.1) inset;
	color: #353535;
	height: 50%;
	position: absolute;
	right: 0px;
	top: 0px;
	width: 50%;
	transform-origin: 0% 100%;

	&:first-child {
		background-color: #5AAA95;
		transform: rotate(0deg) skewY(0);
	}

	&:nth-child(2) {
		background-color: #FFC857;
		transform: rotate(90deg) skewY(0);
	}

	&:nth-child(3) {
		background-color: #ED254E;
		transform: rotate(180deg) skewY(0);
	}

	&:nth-child(4) {
		background-color: #65DEF1;
		transform: rotate(270deg) skewY(0);
	}*/
`;

export const SpinnerInnerWedge = styled.div`
	font-size: 1em;
	font-weight: bold;
	position: absolute;
	height: 200%;
	left: -105%;
	padding-top: 25px;
	text-align: center;
	transform: skewY(0) rotate(45deg);
	width: 200%;
`;

export const SpinnerDial = styled.div`
	box-shadow: 10px 10px 2px 2px rgba(0,0,0,0.6) inset;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 50px solid white;
	filter: drop-shadow(3px 1px 4px rgba(0,0,0,0.6));
	height: 0;
	position: absolute;
	left: 50%;
	margin-left: -25px;
	margin-top: -50px;
	top: 50%;
	width: 0;
	z-index: 2;

	&:after {
		background-color: white;
		border-radius: 0 0 50px 50px;
		content: '';
		height: 25px;
		left: -25px;
		position: absolute;
		top: 49px;
		width: 50px;
		z-index: 3;
	}
`;

export default SpinnerComponent;
