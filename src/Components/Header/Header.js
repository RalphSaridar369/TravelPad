import React from 'react';
import './Header.css';

const Header = () => {

  const scroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className='main__header'>
        <img src={require('../../Images/Logo.png')} className="header__logo" onClick={()=>scroll('#intro')}/>
        <div className='header__left'>
            <div onClick={()=> scroll('#about-us')}>About us</div>
            <div onClick={()=> scroll('#roadmap')}>Roadmap</div>
            <div onClick={()=> scroll('#sneak')}>Sneak Peak</div>
            <div onClick={()=> scroll('#team')}>The Team</div>
        </div>
    </div>
  )
}

export default Header