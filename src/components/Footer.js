import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Little Lemon</h3>
        <p>Chicago, IL</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div className="footer-section">
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant</p>
      </div>
    </footer>
  );
}

export default Footer;