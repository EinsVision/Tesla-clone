import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu />}
            <HeaderBlock 
              model='Model S' 
              img='data:image/jpeg;base64,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'
            />
            <HeaderBlock 
              model='Model 3' 
              img='https://tesla.com/ns_videos/model-3-social.jpg'
            />
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
