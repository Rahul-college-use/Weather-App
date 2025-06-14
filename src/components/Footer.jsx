import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="portfolio-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Email: rahul.cse.kr@gmail.com</p>
          <p>Phone: +91 9199 8559 36</p>
          <div className="social-links">
            <a href="https://github.com/Rahul-college-use" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rahul-kr-cse/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/_rahul_x_4u_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;