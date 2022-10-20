import React from 'react';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
         </Switch>
      </Router>
      </>
    </div>
  );
}

export default App;