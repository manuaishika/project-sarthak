import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Project Sarthak</h3>
            <p>Building brighter futures for children through education, healthcare, and community support.</p>
            <div className="social-links">
              <button className="social-link">Facebook</button>
              <button className="social-link">Twitter</button>
              <button className="social-link">Instagram</button>
              <button className="social-link">LinkedIn</button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 projectsarthak20@gmail.com</p>
              <p>📍 Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and events.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" className="email-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Project Sarthak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
