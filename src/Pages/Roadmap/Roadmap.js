import React, {useEffect} from 'react';
import './Roadmap.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='roadmap__main' id="roadmap">
        <h1>Roadmap</h1>
        <div className='roadmap__step__line' data-aos="fade-down"></div>
        <div className="roadmap__step" data-aos="fade-left">1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div className='roadmap__step__line' data-aos="fade-down"></div>
        <div className="roadmap__step" data-aos="fade-right">2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div className='roadmap__step__line' data-aos="fade-down"></div>
        <div className="roadmap__step" data-aos="fade-left">3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div className='roadmap__step__line' data-aos="fade-down"></div>
        <div className="roadmap__step" data-aos="fade-right">4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    </div>
  )
}

export default Roadmap