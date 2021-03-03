import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import LanguageIcon from '@material-ui/icons/Language';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <div className='signup'>
      <div className="login__header">
        <div className="login__logo">
          <Link to='/'>
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
    </div>
  )
}

export default Signup
