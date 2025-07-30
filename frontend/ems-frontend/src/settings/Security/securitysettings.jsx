// SecuritySettings.jsx
import React from 'react';
import './SettingsSubPage.css';

const SecuritySettings = () => {
  return (
    <div className="settings-subpage">
      <h2>Security Settings</h2>
      <div className="setting-item">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
        <button>Change Password</button>
      </div>
      <div className="setting-item">
        <label>Two-Factor Authentication</label>
        <select>
          <option>Disabled</option>
          <option>Enabled</option>
        </select>
      </div>
    </div>
  );
};

export default SecuritySettings;
