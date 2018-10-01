import styled from 'styled-components';

const ButtonComponent = styled.button`
	background-color: transparent;
	border: 2px solid #155e63;
	color: white;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	padding: 15px 30px;
	position: relative;
	overflow: hidden;
	text-align: center;
	text-decoration: none;.
	transition: all 1.5s ease;

	&:after {
		content: "";
		background: #155e63;
		border: 3px solid #155e63;
		height: 0%;
		left: 50%;
		position: absolute;
		opacity: 0;
		top: 50%;
		transition: all 1.5s ease;
		transform: translateY(-50%) translateX(-50%) rotate(25deg);
		width: 150%;
		z-index: -1;
	}

	&:hover:after,
	&:focus:after {
		height: 400% !important;
		opacity: 1;
	}

	&:focus {		
		outline: 0;
	}

`;

export default ButtonComponent;
