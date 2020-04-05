import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {authenticate, logout} from '../../redux/actions/user.actions';
import styled from 'styled-components';

// components
import ClickOut from "../common/ClickOut";
import TextInput from "../common/TextInput";
import {InputGroup} from "react-bootstrap";



const Login = ({history, user}) => {
	const [description, setDescription] = useState("none");
	const dispatch = useDispatch();
	const uid = user.uid? user.uid: "loggedOut";
	const email = user.email? user.email: "loggedOut";
	const displayName = user.displayName? user.displayName: "loggedOut";

	const buttonbutton = ({onClick, children}) => (
		 	onClick={onClick}>
			{children}
	);

	return (
		<Page>
			<butback>
			{/*<buttonback onClick={() => history.push('close.png')}></buttonback>*/}
			{/*	 onClick={clickFile}>*/}
			{/*	<img src={backhome}/>*/}


			</butback>

			<logotodo>

			</logotodo>
			kids activity marketplace to help keep your sanity

				<ContainerG>
					<Button onClick={() => dispatch(authenticate({provider: 'GOOGLE'}))}><img width={24} src=" https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" />Sign in with Google</Button>
				</ContainerG>


			<ContainerF>
				<Button onClickk={() => dispatch(authenticate({provider: 'FACEBOOK'}))}></Button><img width={24} src="https://lh3.googleusercontent.com/proxy/aSQ_En6CVkmBhyEPBXaqc3mPQp4e3LkSYO8jADHOuDF50_ky0XBEa7oVk89k5_sLoJaGylBZSHNry4PuitDVlfvFvkjIv3MvAyHXdtL6MJL95uv3Z7Duv0kzU2EoDg" />Sign in with Facebook
			</ContainerF>





				or sign in with your account

			<down>

				<InputGroup.Text>
					Type your email
				</InputGroup.Text>

			<InputGroup.Text>
				Type your password
			</InputGroup.Text>

				<InputGroup.Text>
					Log in
				</InputGroup.Text>
				Don't have an account?
			</down>



		</Page>
	);
};


const mapStateToProps = state => {
	return {
			user: state.user
};
};

export default connect(mapStateToProps)(withRouter(Login));
const Button = styled.div`
background-color:red;
color: white
border-radius:10px
`;
const Page = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
   	color: white;
   	background: #0097df;
`;
 const logotodo = styled.div`
	width: 24vw;
 	min-height: 24vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
 `;
const butback= styled.div`
	height: 32px;
	min-width: 80px;
	font-weight: 400;
	cursor: pointer;
	transition: all 300ms;
	background: red;
	color: #0097df;
	display: flex;
	align-items: center;
`;


const ContainerG = styled.div`
	height: 32px;
	min-width: 80px;
	font-weight: 400;
	cursor: pointer;
	transition: all 300ms;
	background-color: red;
	color: white;
	display: flex;
	align-items: center;
	border-radius: 4px;

`;

const ContainerF = styled.div`
	height: 32px;
	min-width: 80px;
	font-weight: 400;
	cursor: pointer;
	transition: all 300ms;
	background: #0070ff;
	color: white;
	display: flex;
	align-items: center;
	height: 24px;.div'
	border: red;
`;

const Hero = styled.div`
	width: 100vw;
	min-height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
	background: red;
	color: white;
`;

const down = styled.div`
	width: 100 vw;
	min-height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
	background:#0097df;
	color: white;
`;
const Label = styled.div`
   const Row = styled.div\`
 display: flex;
 flex-direction: row-reverse;
 talign-items: flex-end;
 tjustify-content: center;
 twidth: 100%;
 tleft:0px;
 color:red;
`;
const Background = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify
	color: red;
`;
const Box = styled.div`
	min-width: 120px;
	height: 32px;
	border-radius: 2px;
	background: black;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	color: red;
	font-weight: 200;
	transition: all 300ms;
  margin: 5px;

	&:hover {
		background: ${({theme,red}) => theme.r500};
	}

	background: ${({theme,red})=> red && theme.r500};
	
`;

