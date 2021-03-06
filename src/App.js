import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from 'Components/loginPage/logIn'
import Home from 'Components/homePage/home'
import Exhibition from 'Components/exhibition/exhibition';
import Shop from 'Components/shop/shop';
import Collections from 'Components/collections/collections';
import Plan from 'Components/plan/plan';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/home" component={Home} />
          <Route path="/exhibition" component={Exhibition} />
          <Route path="/shop" component={Shop} />
          <Route path="/collections" component={Collections} />
          <Route path="/plan" component={Plan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
