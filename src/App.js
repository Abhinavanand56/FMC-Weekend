import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/pages/Home';
import SignUp from './components/pages/Sign-up/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sponsors from "./components/pages/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />;
          <Route path='/sponsors' component={Sponsors} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
