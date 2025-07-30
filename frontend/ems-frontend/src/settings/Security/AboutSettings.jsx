// AboutSettings.jsx
import React from 'react';
import './SettingsSubPage.css';

const AboutSettings = () => {
  return (
    <div className="settings-subpage">
      <h2>About</h2>
      <p>Department Manager v1.0.0</p>
      <p>Developed by AA and Co </p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
};

export default AboutSettings;
