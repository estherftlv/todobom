import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import styled, {ThemeProvider} from "styled-components";
import theme from './theme';

import Home from './components/pages/Home.js';
import Login from './components/pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
