import React from 'react';
import styled from 'styled-components';


import Button from '../common/Button';

const Home = ({ history }) => {
	return (
		<Page>
			<Hero>
				<Label>
					I am Login.js
				</Label>
				<Button onClick={()=>{history.push('/')}}>Home</Button>
		  </Hero>
		</Page>
	);
};

export default Home;


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
	margin: 100px 20px 0 20px;
	line-height: 32px;
`;
