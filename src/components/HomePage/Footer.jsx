import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="8" fill="#00AB55"/>
                  <path d="M32 8L40 24H24L32 8Z" fill="white"/>
                  <path d="M24 24L32 40L40 24H24Z" fill="white"/>
                  <path d="M32 40L24 56L40 24L32 40Z" fill="white"/>
                </svg>
              </div>
              <span className="logo-text">SKILLSWAP</span>
            </div>
            <p className="footer-description">
              Connect with real people to exchange skills and learn together. Teach what you know, learn what you need - all through peer-to-peer skill sharing on SkillSwap.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">GET HELP</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Latest Blog</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Privacy</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Art & Design</a>
              <a href="#" className="footer-link">Business</a>
              <a href="#" className="footer-link">Technology</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">CONTACT US</h3>
            <div className="contact-info">
              <p className="contact-text">
                Address: Paseo Arcenas, Labangon, Cebu City, Cebu, Philippines
              </p>
              <p className="contact-text">
                Phone: +639952933026<br />
                Mail: skillswap@gmail.com
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2024 SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
