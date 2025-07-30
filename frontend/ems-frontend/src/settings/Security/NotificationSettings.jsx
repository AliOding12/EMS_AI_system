// NotificationsSettings.jsx
import React from 'react';
import './SettingsSubPage.css';

const NotificationsSettings = () => {
  return (
    <div className="settings-subpage">
      <h2>Notifications</h2>
      <div className="setting-item">
        <label>Email Notifications</label>
        <input type="checkbox" /> Enable
      </div>
      <div className="setting-item">
        <label>Push Notifications</label>
        <input type="checkbox" /> Enable
      </div>
      <div className="setting-item">
        <label>SMS Alerts</label>
        <input type="checkbox" /> Enable
      </div>
    </div>
  );
};

export default NotificationsSettings;
