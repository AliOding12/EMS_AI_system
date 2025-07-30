// AccountsSettings.jsx
import React from 'react';
import './SettingsSubPage.css';

const AccountsSettings = () => {
  return (
    <div className="settings-subpage">
      <h2>Accounts</h2>
      <div className="setting-item">
        <label>Connected Email</label>
        <input type="email" value="admin@example.com" readOnly />
      </div>
      <div className="setting-item">
        <label>Linked GitHub</label>
        <button>Unlink</button>
      </div>
      <div className="setting-item">
        <label>Linked Google Account</label>
        <button>Unlink</button>
      </div>
    </div>
  );
};

export default AccountsSettings;
