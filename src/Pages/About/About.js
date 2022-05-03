import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';

const About = () => {

    let about = `Founded by a team of seasoned travel, fintech and blockchain industry experts, TravelPad's mission is to bring to the travel industry as a whole transparent pricing, innovation, authentic truth, enhanced security, and efficient stakeholder interaction.

    TravelPad's vision is to align travel booking with the ethos of decentralized technology. That being, promote accessibility to anyone, anywhere, offer censorship resistant and peer-to-peer transactions, and build open-source technology controlled by software and governed by users.`

    return (
        <div className='about__main'>
            <h1 className='about__header'>
                <Typewriter
                    options={{
                        strings: ['Welcome to TravelPad', 'Glad to have you here', 'Enjoy your flight!'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <p className='about__paragraph'>
                <Typewriter
                    options={{
                        strings: about,
                        autoStart: true,
                        delay: 40
                    }}
                />
            </p>

            <div className='about__images__container'>
                <img src={require('../../Images/about-1.png')} />
                <img src={require('../../Images/about-2.png')} />
                <img src={require('../../Images/about-3.png')} />
            </div>
        </div>
    )
}

export default About