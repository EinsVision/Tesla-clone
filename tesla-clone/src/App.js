import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Menu from './Menu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        {isMenuOpen && <Menu />}

        <HeaderBlock/>
        
      </div>
    </Router>
    
  );
}

export default App;
