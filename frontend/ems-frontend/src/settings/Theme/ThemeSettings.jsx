import React, { useState } from 'react';
import './ThemeSettings.css';

const ThemeSettings = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="theme-settings">
      <h3>Theme Settings</h3>
      <div className="theme-options">
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
          />
          Dark
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="system"
            checked={theme === 'system'}
            onChange={() => setTheme('system')}
          />
          System Default
        </label>
      </div>
    </div>
  );
};

export default ThemeSettings;
