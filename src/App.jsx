import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';
import React, { useState, useEffect } from 'react';
import './App.css';
import GitHub from './images/GitHub.svg';
import LinkedIn from './images/LinkedIn.svg';
import Email from './images/Email.svg';
import ASL from './images/ASL.png';
import Project from './components/Project';

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: '.vanta',
        THREE: THREE,
        minHeight: 200.00,
        minWidth: 200.00,
        zoom: 0.5,
        highlightColor: 0xffc300,
        midtoneColor: 0xff1f00,
        lowlightColor: 0x2d00ff,
        baseColor: 0xffebeb,
        blurFactor: 0.5,
        speed: 0.7
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <main>
      <div className = "vanta">
        <div className = "info">
          <div className = "container">
            <h1 className = "info-title"><b>Hi, I'm Neel!</b></h1>
            <div className = "info-desc">
              <p>I'm an aspiring software engineer studying Computer Science and Finance at UNSW.</p>
              <p>Interested? Feel free to download my <a href = "www.google.com">resume</a> and check out my projects below!</p>
            </div>
            <div className = "info-links">
              <a href = "https://github.com/ndoot" target='_blank'><img src = {GitHub}></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank'><img src = {LinkedIn}></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank'><img src = {Email}></img></a>
            </div>
          </div>
        </div>
      </div>
      <div className = "container">
        <section name = "projects">
          <h2 className = "projects-title">Projects</h2>
          <div className = "projects-grid">
            <Project imgSrc = {ASL} title = "Live ASL Translator" 
              desc = "This bot uses OpenCV and Tensorflow to detect and classify American Sign Language characters.">
            </Project>
            <Project></Project>
            <Project></Project>
          </div>
        </section>
        <section name = "skills">
        < h2 className = "skills-title">Skills</h2>
        </section>
      </div>
    </main>
  );
}

export default App;
