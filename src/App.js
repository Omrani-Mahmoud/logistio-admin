import React from 'react';

import { Router, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from './Sign_in';
import {ProtectedRoute} from './ProtectedRoute'
import Dashboard from './Components/Dashboard'
const hist = createBrowserHistory();


function App() {
  return (
    <BrowserRouter>

    <Router  history={hist}>
       <Switch>
        <Route component={SignIn} exact path='/'/> 
        <Route component={Dashboard}  path='/home'/> 

         {/* <ProtectedRoute  component={Dashboard}  path='/home' /> */}

      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;
