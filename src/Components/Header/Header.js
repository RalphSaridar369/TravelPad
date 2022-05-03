import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='main__header'>
        <img src={require('../../Images/Logo.png')} className="header__logo"/>
        <div className='header__left'>
            <div>About us</div>
            <div>The Team</div>
        </div>
    </div>
  )
}

export default Header