import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Menu from './Menu';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
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
            {user ? <Redirect to='/teslaaccount'/> : <Login />}
            
          </Route>  
        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
