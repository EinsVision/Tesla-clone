import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* HeaderBlock */}
      </div>
    </Router>
    
  );
}

export default App;
