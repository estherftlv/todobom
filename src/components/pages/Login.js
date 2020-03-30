import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {authenticate} from '../../redux/actions/user.actions';


import Button from '../common/Button';

const Login = props => {
	return (
		<Page>
			<Hero>
					<Button onClick={() => props.history.push('/')}>Back home</Button>
				<Label>
					I am Login.js
				</Label>
					<Button onClick={() => props.authenticate({provider: 'GOOGLE'})}>login with GOOGLE</Button>
		  </Hero>
		</Page>
	);
};

export default connect(null, {authenticate})(Login);


const Page = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Hero = styled.div`
	width: 100vw;
	min-height: 500px;
	background: ${({ theme }) => theme.a100};
	color: #000000;
`;
const Label = styled.div`
	line-height: 32px;
`;
