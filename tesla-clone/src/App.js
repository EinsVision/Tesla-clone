import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';

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

          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount'/> : <Login />}
          </Route>  

          <Route exact path='/signup'>
            <Signup />
          </Route>  

          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login'/>
              ) : (
                <>
                  <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                  {isMenuOpen && <Menu />}
                </>
                
            )}
          </Route>  

        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
