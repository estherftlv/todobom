import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider,useSelector} from 'react-redux';
import store from './redux/store';

import styled, {ThemeProvider} from "styled-components";
import theme from './theme';

import Spinner from './components/common/Spinner';
import AuthContainer from './components/common/AuthContainer';
import Home from './components/pages/Home.js';
import Login from './components/pages/Login';
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rewards from './components/pages/Rewards';




const history = createBrowserHistory();


const PageSpinner = () => {
	const checked = useSelector(state => state.user.checked);

	if (checked) {
		return null;
	}

	return (
		<SpinnerContainer>
			<Spinner/>
		</SpinnerContainer>
	);
};

const App = ()=>(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
      	<AuthContainer>
        <PageSpinner/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
			<Route exact path="/rewards" component={Rewards}/>
          </Switch>
      	</AuthContainer>
      </Router>
    </ThemeProvider>
  </Provider>
  );

export default App;

const SpinnerContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100vw;
	height: 100vh;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;
