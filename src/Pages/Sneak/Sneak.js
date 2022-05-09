import React, { useState } from 'react';
import './Sneak.css';

const Sneak = () => {

  const [img,setImg] = useState(1);  
  const gifIt = () =>{
    let ar = [1,2,3,4,5,6];
    let index = 0;
    while(true){
        setTimeout(()=>{
            setImg(ar[index]);
            index++
            if(index==5){
                index=0;
            }
        },1000)
    }
  }

  return (
    <div className='sneak__main' id="sneak">
        <h1 className='sneak__header'>
            Sneak Peak 
        </h1>
        <div className='grow'>
            <img src={require(`../../Images/preview.gif`)} className="md-img"/>
        </div>
        <div className='left'>
            <img src={require('../../Images/preview1.gif')} className="small-img"/>
            <img src={require('../../Images/preview2.gif')} className="small-img"/>
        </div>
        <div className='right'>
            <img src={require('../../Images/preview3.gif')} className="small-img"/>
            <img src={require('../../Images/preview4.gif')} className="small-img"/>
        </div>
        <div className='left'>
            <img src={require('../../Images/preview5.gif')} className="small-img"/>
            <img src={require('../../Images/preview.gif')} className="small-img"/>
        </div>
    </div>
  )
}

export default Sneak