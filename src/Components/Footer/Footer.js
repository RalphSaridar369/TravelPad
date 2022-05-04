import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__main'>
        <h3>Follow us on our social media:</h3>
        <div className='footer__icons__container'>
            <a href="https://discord.gg/KXsEUMGSnA" target="_blank">
                <img src={require('../../Images/discord.png')} />
            </a>
            <a href="https://twitter.com/Soltravelpad_v2" target="_blank">
                <img src={require('../../Images/twitter.png')} />
            </a>
        </div>
    </div>
  )
}

export default Footer