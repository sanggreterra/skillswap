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
              <img src="skillswap_icon.png" alt="SkillSwap Logo" width={40} height={40} />
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
                <a href="https://www.facebook.com/" className="social-link">Facebook</a>
                <a href="https://x.com/" className="social-link">X (formerly Twitter)</a>
                <a href="https://www.instagram.com/" className="social-link">Instagram</a>
                <a href="https://www.youtube.com/" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
