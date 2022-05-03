import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro__main'>
        <img src={require('../../Images/plane-intro.png')} className="intro__plane-1"/>
        <img src={require('../../Images/plane-intro.png')} className="intro__plane-2"/>
        <img src={require('../../Images/plane-intro.png')} className="intro__plane-3"/>
        <img src={require('../../Images/cloud-1.png')} className="cloud-1"/> 
        <img src={require('../../Images/cloud-1.png')} className="cloud-2"/> 
        <img src={require('../../Images/cloud-1.png')} className="cloud-3"/> 
        <img src={require('../../Images/cloud-1.png')} className="cloud-4"/> 
    </div>
  )
}

export default Intro