import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/pages/Home';
import SignUp from './components/pages/Sign-up/SignUp'
import events from './components/pages/Events/events'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />;
          <Route path='/events' component={events} />;
        </Switch>
      </Router>
    </>
  );
}

export default App;
