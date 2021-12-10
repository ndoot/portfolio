import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';
import React, { useState } from 'react';
import './App.css';
import GitHub from './images/GitHub.svg';
import LinkedIn from './images/LinkedIn.svg';
import Email from './images/Email.svg';
import ASL from './images/ASL.png';
import airbnb from './images/airbnb.png';
import website from './images/website.jpg';
import algobot from './images/algobot.jpg';
import crypto from './images/crypto.jpg';
import Project from './components/Project';
import Skills from './components/Skills';

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
      <div className = "vanta"></div>
      <div className = "gradient"></div>
      <div className = "content">
        <div className = "container">
          <section name = "info">
            <h1 className = "info-title"><b>Hi, I'm Neel!</b></h1>
            <div className = "info-desc">
              <p>I'm an aspiring software engineer studying a <b>Computer Science/Commerce (Finance)</b> double degree at UNSW.</p>
              <p>Interested? Feel free to download my <a href = "www.google.com">resume</a> and check out my projects below!</p>
            </div>
            <div className = "info-links">
              <a href = "https://github.com/ndoot" target='_blank' rel = 'noreferrer'><img src = {GitHub} alt = "Github"></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'><img src = {LinkedIn} alt = "LinkedIn"></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'><img src = {Email} alt = "Contact"></img></a>
            </div>
          </section>
          <section name = "projects">
            <h2 className = "section-title">Projects</h2>
            <p className = "projects-desc">Demos provided upon request.</p>
            <div className = "projects-grid">
              <Project imgSrc = {ASL} title = "Live ASL Translator" 
                desc = "This project uses Computer Vision (OpenCV + MediaPipe) and Machine Learning (Tensorflow) to detect and classify American Sign Language alphabet characters in real time."
                technologies = {["Python", "TensorFlow ML", "OpenCV", "MediaPipe"]}
                status='Complete'>
              </Project>
              <Project imgSrc = {airbnb} title = "University Project: AirBnB Clone" 
                desc = "This uni project uses React and a series of pre-written restful APIs to create a simple functional clone of AirBnB, with login and logout functionality, and the ability to create, search, book, publish and review listings."
                technologies = {["HTML", "CSS", "JavaScript", "React.js"]}
                status='Complete'>
              </Project>
              <Project imgSrc = {website} title = "Portfolio" 
                desc = "This website is a simple application built with HTML, CSS, Javascript and React."
                technologies = {["HTML", "CSS", "JavaScript", "React.js"]}
                status='Complete'>
              </Project>
              <Project imgSrc = {algobot} title = "Algorithmic Trading Bot" 
                desc = "This python bot uses technical indicators (RSI, MACD) to paper-trade overbought and oversold stocks on a medium-term timeframe. Currently working on incorporating insider cluster buying via FinViz's Api."
                technologies = {["Python", "QuantConnect API"]}
                status='WIP'>
              </Project>
              <Project imgSrc = {crypto} title = "Crypto Sentiment Analysis Site" 
                desc = "Currently working on developing a real-time crypto sentiment analysis website using Sentiment.js to analyse data scraped from Twitter."
                technologies = {["HTML", "CSS", "JavaScript", "React.js", "AWS"]}
                status='WIP'>
              </Project>
            </div>
          </section>
          <section name = "skills">
            <h2 className = "section-title">Skills</h2>
            <Skills heading = "Programming Languages: " type="languages" skills={["HTML", "CSS", "JavaScript", "Python", "Java", "SQL", "C"]}></Skills>
            <Skills heading = "Frameworks and Technologies: " type="frameworks" skills={["Node.js", "React.js", "MySQL", "AWS EC-2", "Git"]}></Skills>
            <Skills heading = "Industry Practices and Other: " type="other"  skills={["Agile", "TDD", "Excel", "MS Office Suite"]}></Skills>
          </section>
        </div>
        <section className = "footer">
          <div className='container center'>
            <div className = "info-links center">
              <a href = "https://github.com/ndoot" target='_blank' rel = 'noreferrer'><img src = {GitHub} alt = "Github"></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'><img src = {LinkedIn} alt = "LinkedIn"></img></a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'><img src = {Email} alt = "Contact"></img></a>
            </div>
          </div>
          <div className = 'center footer-copyright'><b>© Neel Dutta, 2021</b></div>
        </section>
      </div>
    </main>
  );
}

export default App;
