import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {new Date().getFullYear()} SkillSnap. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '15px 0',
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;
