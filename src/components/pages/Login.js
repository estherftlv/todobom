import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../redux/actions/user.actions';
import styled from 'styled-components';


import Button from '../common/Button';

const Login = ({history, user}) => {
	const dispatch = useDispatch();
	return (
		<Page>
			<Hero>
				<Button onClick={() => history.push('/')}>Back home</Button>
				<Label>
					I am Login.js{user.uid}
				</Label>
				{!(user && user.uid) ?
					<Button onClick={() => dispatch(authenticate({provider: 'GOOGLE'}))}>Google AUTHENTICATE</Button> : 
					<Button onClick={() => dispatch(logout())}>Logout</Button> 
				}
			</Hero>
		</Page>
	);
};


const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(withRouter(Login));


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
