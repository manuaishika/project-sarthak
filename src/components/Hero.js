import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Project Sarthak</h1>
            <h2 className="hero-subtitle">Building brighter futures for children</h2>
            <p className="hero-description">
              We are dedicated to creating opportunities and providing support for children in need. 
              Together, we can make a lasting difference in their lives and build a better tomorrow.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Get Involved</a>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="kids-illustration">
              <div className="kid kid-1">
                <div className="kid-head"></div>
                <div className="kid-body"></div>
                <div className="kid-arms"></div>
                <div className="kid-legs"></div>
              </div>
              <div className="kid kid-2">
                <div className="kid-head"></div>
                <div className="kid-body"></div>
                <div className="kid-arms"></div>
                <div className="kid-legs"></div>
              </div>
              <div className="kid kid-3">
                <div className="kid-head"></div>
                <div className="kid-body"></div>
                <div className="kid-arms"></div>
                <div className="kid-legs"></div>
              </div>
              <div className="floating-elements">
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="heart heart-1"></div>
                <div className="heart heart-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
