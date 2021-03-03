import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import LanguageIcon from '@material-ui/icons/Language';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <div className='signup'>
      <div className="signup__header">
        <div className="signup__logo">
          <Link to='/'>
            <img 
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>

      <div className="signup__info">
        <h1>Sign up</h1>
        <form className='signup__form'>
          <label htmlFor="fName">First Name</label>
          <input 
            type="text" 
            id='fName' 
            value={fName} 
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input 
            type="text" 
            id='lName' 
            value={lName} 
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">E-Mail</label>
          <input 
            type="email" 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name='Create account' type='submit' />
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>

        <Link to='/login'>
          <ButtonSecondary name='Sign in' type='submit' />
        </Link>
      </div>
      
    </div>
  )
}

export default Signup

// 2:30