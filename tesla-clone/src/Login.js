import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import LanguageIcon from '@material-ui/icons/Language';
import ButtonPrimary from './ButtonPrimary';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className='login'>
      <div className="login__header">
        <div className="login__logo">
          <Link>
            <img 
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign in</h1>
        <form className='login__form'>
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
          <ButtonPrimary name='Sign in' type='submit' onClick={signIn}/>
        </form>
      </div>
    </div>
  )
}

export default Login
