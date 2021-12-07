import React, { useState, useEffect } from 'react';
import './../App.css';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';

function Info() {
  const [vantaEffect, setVantaEffect] = useState(0);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: '.vanta',
        THREE: THREE,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xff,
        midtoneColor: 0xff0000,
        lowlightColor: 0x830000,
        baseColor: 0xffffff,
        blurFactor: 0.5,
        speed: 1
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className = "vanta">
      <div className = "info">
        <div className = "container">
          <div className = "info-title">Hi, I'm Neel!</div>
          <div className = "info-desc">
            I'm an aspiring software engineer studying a B. Computer Science / Finance at UNSW. <br></br>  <br></br>
            I love to tinker with as many technologies as I can get my hands on.
            Interested? Feel free to download my <a href = "www.google.com">resume</a>, or contact me at <u>realneeldutta@gmail.com</u>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
