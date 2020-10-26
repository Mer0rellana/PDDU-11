import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import HomePage from './views/HomePage';

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/home' component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
