import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Menu from './Menu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu />}
            <HeaderBlock/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>  
        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
