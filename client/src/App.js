import React from 'react';
import logo from './logo.svg';
import './App.css';
import Variables from './routes/variables'
import HomePage from './routes/home-page'
import VariablesId from "./routes/variables-id";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/variables">
                  <Variables />
              </Route>
              <Route exact path="/variables">
                  <Variables />
              </Route>
              <Route path="/variables/:id" component={VariablesId}/>
          </Switch>
      </header>
    </div>
      </Router>
  );
}

export default App;
