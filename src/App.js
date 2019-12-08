import React from 'react';
import './App.css';
import LogIn from 'Components/loginPage/logIn'
import Home from 'Components/homePage/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
