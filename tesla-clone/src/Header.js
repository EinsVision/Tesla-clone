import React from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className="header__logo">
        <Link to='/'>
          <img 
            className='header__logoImg'
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
            alt=""
          />
          </Link>
      </div>
    </div>
  )
}

export default Header
