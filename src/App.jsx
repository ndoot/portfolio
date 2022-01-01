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
import charity from './images/charity.jpg'
import Project from './components/Project';
import Skills from './components/Skills';

// To deploy site: git bash here > npm run deploy
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
              <p>Interested? Feel free to download my <a href = "https://drive.google.com/file/d/1w9eJI5QA7CJjMjQ5kRRjk7xAvyUw3n57/view?usp=sharing" target='_blank' rel = 'noreferrer'><b>resume</b></a> and check out my projects below!</p>
            </div>
            <div className = "info-links">
              <a href = "https://github.com/ndoot" target='_blank' rel = 'noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>  
              </a>
              <a href = "mailto:realneeldutta@gmail.com" target='_blank' rel = 'noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>  
              </a>
            </div>
          </section>
          <section name = "projects">
            <h2 className = "section-title">Projects</h2>
            <p className = "projects-desc">Live demos provided upon request. Sign Language Translator repository is private - code provided upon request.</p>
            <div className = "projects-grid">
              <Project imgSrc = {ASL} title = "Live Sign Language Translator" 
                demo = "https://www.youtube.com/watch?v=30j52_ApOOY&ab_channel=NeelDutta"
                desc = "This project uses Computer Vision (OpenCV + MediaPipe) and Machine Learning (Tensorflow) to detect and classify American Sign Language alphabet characters in real time."
                technologies = {["Python", "TensorFlow ML", "OpenCV", "MediaPipe"]}
                status='Complete'>
              </Project>
              <Project imgSrc = {airbnb} title = "University Project: AirBnB Clone" 
                desc = "This uni project uses React and a series of pre-written restful APIs to create a simple functional clone of AirBnB, with login and logout functionality, and the ability to create, search, book, publish and review listings."
                technologies = {["HTML", "CSS", "JavaScript", "React.js", "Node.js"]}
                status='Complete'>
              </Project>
              <Project imgSrc = {charity} title = "Charity Fundraising App" 
                desc = "Currently working on an app to crowdsource fundraising for charities and their projects."
                technologies = {["HTML", "CSS", "JavaScript", "React Native", "AWS", "Node.js", "Stripe API"]}
                status='WIP'>
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
              <Project imgSrc = {crypto} title = "Crypto Sentiment Analysis Website" 
                desc = "Currently working on developing a real-time crypto sentiment analysis website using Sentiment.js to analyse data scraped from Twitter."
                technologies = {["HTML", "CSS", "JavaScript", "React.js", "AWS"]}
                status='Hiatus'>
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
              <a href = "https://github.com/ndoot" target='_blank' rel = 'noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href = "https://www.linkedin.com/in/neel-dutta-profile/" target='_blank' rel = 'noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>  
              </a>
              <a href = "mailto:realneeldutta@gmail.com" target='_blank' rel = 'noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>  
              </a>
            </div>
          </div>
          <div className = 'center footer-copyright'><b>© Neel Dutta, 2021</b></div>
        </section>
      </div>
    </main>
  );
}

export default App;
