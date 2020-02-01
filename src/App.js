import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Layout/Navar';
import User from './components/Layout/User';
import Alert from './components/Layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// Context
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:username' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
