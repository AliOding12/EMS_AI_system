// SettingsPage.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <aside className="settings-sidebar">
        <h2>Settings</h2>
        <nav>
          <ul>
            <li><Link to="theme">Theme</Link></li>
            <li><Link to="admin">Admin Info</Link></li>
            <li><Link to="security">Security</Link></li>
            <li><Link to="notification">Notifications</Link></li>
            <li><Link to="account">Accounts</Link></li>
            <li><Link to="logs">Activity Logs</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="settings-content">
        <Outlet />
      </main>
    </div>
  );
};

export default SettingsPage;