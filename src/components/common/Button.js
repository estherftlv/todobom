import React from 'react';
import styled from 'styled-components';

const Button = ({onClick, children}) => (
	<Container onClick={onClick}>
		{children}
	</Container>
);

export default Button;

const Container = styled.div`
	padding: 0 15px;
	height: 32px;
	min-width: 80px;
	font-weight: 500;
	cursor: pointer;
	transition: all 300ms;
	border-radius: 2px;
	margin: 5px;
	background: #F3F3F3;
	color: #000000;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;


	&:hover {
		background: #F4F4F$;
	}



`;
