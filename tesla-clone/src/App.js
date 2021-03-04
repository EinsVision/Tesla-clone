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
              img='https://raw.githubusercontent.com/EinsVision/Tesla-clone/master/tesla-clone/src/image/Desktop-ModelS.jpeg'
            />
            <HeaderBlock 
              model='Model 3' 
              img='https://tesla.com/ns_videos/model-3-social.jpg'
            />
            <HeaderBlock 
              model='Model X' 
              img='https://raw.githubusercontent.com/EinsVision/Tesla-clone/master/tesla-clone/src/image/Desktop-ModelX.jpeg'
            />
            <HeaderBlock 
              model='Model Y' 
              img='https://raw.githubusercontent.com/EinsVision/Tesla-clone/master/tesla-clone/src/image/Desktop-ModelY.jpeg'
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
