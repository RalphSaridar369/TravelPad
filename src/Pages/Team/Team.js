import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className='team__main' id="team">
        <h1 className='team__header'>The Team</h1>
        <img src={require('../../Images/about-1.png')} />
    </div>
  )
}

export default Team